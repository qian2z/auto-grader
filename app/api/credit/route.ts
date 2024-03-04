import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user?.email! },
    });
    if (!user)
      return NextResponse.json({ error: "Invalid User" }, { status: 400 });
    return NextResponse.json(user?.credit, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user?.email! },
    });

    if (!user)
      return NextResponse.json({ error: "Invalid User" }, { status: 400 });

    const body = await request.json();
    const { number } = body;

    if (user.credit < number) {
      return NextResponse.json(
        { error: "Insufficient Credit" },
        { status: 402 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { email: session.user?.email! },
      data: {
        credit: user.credit - number,
      },
    });

    const response = {
      email: updatedUser.email,
      credit: updatedUser.credit,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
