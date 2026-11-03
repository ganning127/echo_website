import { NextResponse } from "next/server";
import { submissionSchema } from "@/lib/postcard";
import { MongoClient } from "mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const uri = process.env.MONGO_URI!;

const MAX_BODY_BYTES = 10_000;
const MIN_FILL_MS = 4_000; // a human can't fill a card in under 4s
const WINDOW_MS = 10 * 60_000;
const MAX_PER_WINDOW = 5;

// In-memory limiter: per-instance only on serverless. Swap for Upstash/KV for real enforcement.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function sameOrigin(req: Request) {
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  if (!sameOrigin(req)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  if (!req.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json({ error: "Bad request" }, { status: 415 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip))
    return NextResponse.json({ error: "Too many postcards at once. Try again soon!" }, { status: 429 });

  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) return NextResponse.json({ error: "Too large" }, { status: 413 });

  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const parsed = submissionSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: "Please check your postcard." }, { status: 422 });
  const data = parsed.data;

  // Bots: pretend success, store nothing.
  if (data.website || data.elapsedMs < MIN_FILL_MS) return NextResponse.json({ ok: true });

  // Build the document explicitly; never spread user input into it.
  const doc = {
    style: data.style,
    stamp: data.stamp,
    ...(data.style === "blank" ? { message: data.message } : { fields: data.fields }),
    showcaseConsent: data.showcaseConsent,
    status: "pending" as const, // team reviews before anything is shown publicly
    createdAt: new Date(),
  };

  // New client per request (same connect/close pattern as the contact route), so
  // concurrent requests can't close each other's connection.
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await client.db("website").collection("postcards").insertOne(doc);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("postcard insert failed", e);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  } finally {
    await client.close();
  }
}