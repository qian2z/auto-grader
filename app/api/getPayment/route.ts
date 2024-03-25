import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import axios from "axios";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user?.email! },
    });

    if (!user)
      return NextResponse.json({ error: "Invalid User" }, { status: 400 });

    const body = await request.json();

    const payment = await prisma?.payment.findUnique({
      where: { id: body.id },
    });

    if (payment) {
      return NextResponse.json("Payment Completed", { status: 200 });
    }

    const response = await axios.get(
      "https://api.stripe.com/v1/checkout/sessions/" + body.id,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
        },
      }
    );

    const { payment_status } = response.data;

    if (payment_status === "paid") {
      const updatedUser = await prisma.user.update({
        where: { email: session.user?.email! },
        data: {
          credit: user.credit + 30,
        },
      });

      const newPayment = await prisma?.payment.create({
        data: {
          id: body.id,
          userEmail: session.user?.email!,
        },
      });

      const response = {
        payment: newPayment.id,
        email: updatedUser.email,
        credit: updatedUser.credit,
      };

      return NextResponse.json(response, { status: 200 });
    } else {
      return NextResponse.json("Payment Required", { status: 402 });
    }
  } catch (error) {
    return NextResponse.json("Internal Server Error", {
      status: 500,
    });
  }
}
