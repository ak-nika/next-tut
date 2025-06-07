import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));

  if (comment) {
    return Response.json(comment);
  } else {
    return new Response(JSON.stringify({ message: "Comment not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }
}
