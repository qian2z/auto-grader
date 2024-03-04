import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import qs from "qs";

export async function POST(request: NextRequest) {
  const data = qs.stringify({
    success_url:
      "http://localhost:3000/payment-successful?sessionId={CHECKOUT_SESSION_ID}",
    "line_items[0][price]": process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
    "line_items[0][quantity]": 1,
    mode: "payment",
  });

  try {
    const response = await axios.post(
      "https://api.stripe.com/v1/checkout/sessions",
      data,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { id, url } = response.data;
    return NextResponse.json({ id, url }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      status: 500,
    });
  }
}
