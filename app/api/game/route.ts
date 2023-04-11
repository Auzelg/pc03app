import { NextResponse } from "next/server";
import words from "./words.json";

export async function GET(request: Request) {
  return NextResponse.json(words);
}
