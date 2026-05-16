import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

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

    let document: Record<string, unknown>;

    if (formType === "general") {
      const { name, email, subject, message } = body;

      if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100)
        return NextResponse.json({ error: "Invalid name" }, { status: 400 });
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        return NextResponse.json({ error: "Invalid email" }, { status: 400 });
      if (!message || message.trim().length < 10 || message.trim().length > 5000)
        return NextResponse.json({ error: "Invalid message" }, { status: 400 });

      document = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject?.trim().slice(0, 200) ?? "",
        message: message.trim(),
        formType,
        createdAt: new Date(),
      };

    } else if (formType === "partner") {
      const { firstName, lastName, email, phone, organization, participants, gradeLevel, requestedDate, requestedTime, presentation } = body;

      if (!firstName || firstName.trim().length < 2)
        return NextResponse.json({ error: "Invalid first name" }, { status: 400 });
      if (!lastName || lastName.trim().length < 2)
        return NextResponse.json({ error: "Invalid last name" }, { status: 400 });
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        return NextResponse.json({ error: "Invalid email" }, { status: 400 });
      if (!organization || organization.trim().length < 2)
        return NextResponse.json({ error: "Invalid organization" }, { status: 400 });
      if (!participants || !gradeLevel || !requestedDate || !requestedTime || !presentation)
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

      document = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() ?? "",
        organization: organization.trim(),
        participants,
        gradeLevel,
        requestedDate,
        requestedTime,
        presentation,
        formType,
        createdAt: new Date(),
      };

    } else {
      return NextResponse.json({ error: "Unknown formType" }, { status: 400 });
    }

    await db.collection(collectionName).insertOne(document);

    return NextResponse.json({ message: "Success" });
  } catch (err) {
    console.error("Contact form submission failed:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    await client.close();
  }
}