import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { verifyRecaptcha } from "@/lib/recaptcha";

export const dynamic = "force-dynamic";

const uri = process.env.MONGO_URI!;
const client = new MongoClient(uri);

export async function POST(req: Request) {
  try {
    const { email, recaptchaToken } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const { pass, score } = await verifyRecaptcha(recaptchaToken);
    if (!pass) {
      console.warn("reCAPTCHA failed for newsletter:", { score });
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 403 }
      );
    }

    await client.connect();
    const db = client.db("website"); // <-- Replace this
    const collection = db.collection("newsletter");

    await collection.insertOne({
      email,
      subscribedAt: new Date(),
    });

    return NextResponse.json({ message: "Success" });
  } catch (err) {
    console.error("Newsletter insert failed:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    await client.close();
  }
}
