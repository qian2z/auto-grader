import authOptions from "@/app/auth/authOptions";
import axios from "axios";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const formData = await request.formData();

  try {
    const convertApiResponse = await axios.post(
      `https://v2.convertapi.com/convert/pdf/to/docx?Secret=${process.env
        .NEXT_PUBLIC_CONVERT_API_SECRET!}&StoreFile=true`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return NextResponse.json(convertApiResponse.data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
