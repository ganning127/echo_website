import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = process.env.MONGO_URI!;

console.log("Connecting to MongoDB with URI:", uri);
const client = new MongoClient(uri);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
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
