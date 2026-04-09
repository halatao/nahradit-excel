import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  company?: string;
  area?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;

  if (
    !payload.name?.trim() ||
    !payload.company?.trim() ||
    !payload.area?.trim() ||
    !payload.email?.trim() ||
    !isValidEmail(payload.email)
  ) {
    return NextResponse.json(
      { success: false, message: "Vyplňte prosím všechna povinná pole." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Lead přijat.",
    receivedAt: new Date().toISOString(),
  });
}
