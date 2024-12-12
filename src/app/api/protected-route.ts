import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // Token verification is handled by middleware
  return NextResponse.json({ message: "Protected data!" });
}
