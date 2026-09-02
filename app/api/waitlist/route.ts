import { NextResponse } from "next/server";

import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { email, company, source } = (body ?? {}) as {
    email?: string;
    company?: string; // honeypot — real users leave this empty
    source?: string;
  };

  if (typeof company === "string" && company.trim() !== "") {
    // Bot filled the hidden field. Pretend everything is fine.
    return NextResponse.json({ ok: true });
  }

  const normalized = typeof email === "string" ? email.trim().toLowerCase() : "";

  if (!EMAIL_RE.test(normalized) || normalized.length > 320) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 422 },
    );
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json(
      { error: "The waitlist isn't available right now. Try again later." },
      { status: 503 },
    );
  }

  const { error } = await supabase.from("waitlist").insert({
    email: normalized,
    source: typeof source === "string" ? source.slice(0, 64) : "website",
  });

  // 23505 = unique_violation — already on the list, which is fine.
  if (error && error.code !== "23505") {
    console.error("waitlist insert failed:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    alreadyOnList: error?.code === "23505",
  });
}
