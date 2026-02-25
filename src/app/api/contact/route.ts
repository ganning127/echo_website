import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { verifyRecaptcha } from "@/lib/recaptcha";

export const dynamic = "force-dynamic";

const uri = process.env.MONGO_URI!;
const client = new MongoClient(uri);

type ContactFormType = "general" | "partner" | "question" | "story";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const formType = body.formType as ContactFormType | undefined;

    if (!formType) {
      return NextResponse.json(
        { error: "formType is required" },
        { status: 400 }
      );
    }

    const { pass, score } = await verifyRecaptcha(body.recaptchaToken);
    if (!pass) {
      console.warn("reCAPTCHA failed for contact form:", { formType, score });
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 403 }
      );
    }

    await client.connect();
    const db = client.db("website");

    let collectionName: string;

    switch (formType) {
      case "general":
        collectionName = "contact_general";
        break;
      case "partner":
        collectionName = "contact_partner";
        break;
      case "question":
        collectionName = "contact_questions";
        break;
      case "story":
        collectionName = "contact_stories";
        break;
      default:
        return NextResponse.json(
          { error: "Unknown formType" },
          { status: 400 }
        );
    }

    const { recaptchaToken: _token, ...formData } = body;
    const document = {
      ...formData,
      formType,
      createdAt: new Date(),
    };

    await db.collection(collectionName).insertOne(document);

    return NextResponse.json({ message: "Success" });
  } catch (err) {
    console.error("Contact form submission failed:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    await client.close();
  }
}

