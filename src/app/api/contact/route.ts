import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const uri = process.env.MONGO_URI!;
const client = new MongoClient(uri);
const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormType = "general" | "partner" | "question" | "story";

function buildEmailContent(formType: ContactFormType, body: Record<string, string>) {
  switch (formType) {
    case "general":
      return {
        subject: `New General Contact: ${body.subject}`,
        html: `
          <h2>New General Contact Submission</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
          <p><strong>Subject:</strong> ${body.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${body.message}</p>
        `,
      };
    case "partner":
      return {
        subject: `New Partner Inquiry: ${body.organization ?? body.name}`,
        html: `
          <h2>New Partner Inquiry</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
          <p><strong>Organization:</strong> ${body.organization ?? "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${body.message}</p>
        `,
      };
    case "question":
      return {
        subject: `New Question from ${body.name}`,
        html: `
          <h2>New Question Submission</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
          <p><strong>Question:</strong></p>
          <p>${body.message}</p>
        `,
      };
    case "story":
      return {
        subject: `New Story Submission from ${body.name}`,
        html: `
          <h2>New Story Submission</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
          <p><strong>Story:</strong></p>
          <p>${body.message}</p>
        `,
      };
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const formType = body.formType as ContactFormType | undefined;

    if (!formType) {
      return NextResponse.json({ error: "formType is required" }, { status: 400 });
    }

    // 1. Save to MongoDB (unchanged)
    await client.connect();
    const db = client.db("website");

    const collectionMap: Record<ContactFormType, string> = {
      general: "contact_general",
      partner: "contact_partner",
      question: "contact_questions",
      story: "contact_stories",
    };

    const collectionName = collectionMap[formType];
    if (!collectionName) {
      return NextResponse.json({ error: "Unknown formType" }, { status: 400 });
    }

    await db.collection(collectionName).insertOne({
      ...body,
      formType,
      createdAt: new Date(),
    });

    // 2. Send email notification via Resend
    const { subject, html } = buildEmailContent(formType, body);

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      replyTo: body.email,      // ← replying goes directly to the submitter
      subject,
      html,
    });

    return NextResponse.json({ message: "Success" });
  } catch (err) {
    console.error("Contact form submission failed:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    await client.close();
  }
}