import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { verifyRecaptcha } from "@/lib/recaptcha";

export const dynamic = "force-dynamic";

const uri = process.env.MONGO_URI!;
const client = new MongoClient(uri);

interface RegistrationData {
  fullName: string;
  email: string;
  phone?: string;
  ageGroup: string;
  role: string;
  heardFrom: string;
  interests: string[];
  comments?: string;
  recaptchaToken?: string;
}

export async function POST(req: Request) {
  try {
    const data: RegistrationData = await req.json();

    const { pass, score } = await verifyRecaptcha(data.recaptchaToken);
    if (!pass) {
      console.warn("reCAPTCHA failed for registration:", { score });
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 403 }
      );
    }

    // Validate required fields
    if (!data.fullName || data.fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Full name is required" },
        { status: 400 }
      );
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!data.ageGroup) {
      return NextResponse.json(
        { error: "Age group is required" },
        { status: 400 }
      );
    }

    if (!data.role) {
      return NextResponse.json({ error: "Role is required" }, { status: 400 });
    }

    if (!data.heardFrom) {
      return NextResponse.json(
        { error: "Please tell us how you heard about ECHO" },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db("website");
    const collection = db.collection("registrations");

    // Check if email already registered
    const existingUser = await collection.findOne({ email: data.email });
    if (existingUser) {
      return NextResponse.json(
        { error: "This email is already registered" },
        { status: 409 }
      );
    }

    // Insert new registration
    const registration = {
      fullName: data.fullName.trim(),
      email: data.email.toLowerCase().trim(),
      phone: data.phone?.trim() || null,
      ageGroup: data.ageGroup,
      role: data.role,
      heardFrom: data.heardFrom,
      interests: data.interests || [],
      comments: data.comments?.trim() || null,
      registeredAt: new Date(),
      status: "active",
    };

    await collection.insertOne(registration);

    return NextResponse.json({
      message: "Registration successful",
      email: registration.email,
    });
  } catch (err) {
    console.error("Registration failed:", err);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}

// GET endpoint to retrieve registrations (for admin purposes)
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "50");
    const skip = parseInt(searchParams.get("skip") || "0");

    await client.connect();
    const db = client.db("website");
    const collection = db.collection("registrations");

    const registrations = await collection
      .find({})
      .sort({ registeredAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await collection.countDocuments();

    return NextResponse.json({
      registrations,
      total,
      limit,
      skip,
    });
  } catch (err) {
    console.error("Failed to fetch registrations:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    await client.close();
  }
}


