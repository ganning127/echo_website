// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
  }

  try {
    const res = await fetch(
      "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/",
      {
        method: "POST",
        headers: {
          Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_KEY}`,
          revision: "2024-02-15",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            type: "profile-subscription-bulk-create-job",
            attributes: {
              list_id: process.env.KLAVIYO_LIST_ID,
              subscriptions: {
                email: {
                  marketing: {
                    consent: "SUBSCRIBED",
                  },
                },
              },
              profiles: {
                data: [
                  {
                    type: "profile",
                    attributes: {
                      email,
                    },
                  },
                ],
              },
            },
          },
        }),
      }
    );

    // Klaviyo returns 202 Accepted for this endpoint
    if (res.status === 202) {
      return NextResponse.json({ success: true });
    }

    const errorData = await res.json();
    console.error("Klaviyo error:", errorData);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}