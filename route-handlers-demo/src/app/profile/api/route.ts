import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get("Authorization"));

  const headersList = await headers();
  console.log(headersList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log(theme);

  const cookieStore = await cookies();
  cookieStore.set("resultsPerPage", "20");

  console.log(cookieStore.get("resultsPerPage"));

  return new Response("<h1>Profile Page</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
