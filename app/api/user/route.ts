import authOptions from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const user = await prisma?.user.findUnique({
    where: { username: session.user?.name! },
  });

  return NextResponse.json(user?.credit, { status: 200 });
}
