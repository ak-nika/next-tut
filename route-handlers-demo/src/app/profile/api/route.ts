import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get("Authorization"));

  const headersList = await headers();
  console.log(headersList.get("Authorization"));

  return new Response("Profile Page");
}
