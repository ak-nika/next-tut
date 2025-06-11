export const dynamic = "force-static"; // this forces the data to be cached even when reloaded
export const revalidate = 10; // This reloads a new data and caches it after 10 seconds

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
