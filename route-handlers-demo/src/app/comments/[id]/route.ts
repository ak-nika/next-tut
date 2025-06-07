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

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { text } = await request.json();

  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  if (index !== -1) {
    comments[index].text = text;

    return Response.json(comments[index]);
  } else {
    return new Response(JSON.stringify({ message: "Comment not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  if (index !== -1) {
    comments.splice(index, 1);
    return new Response(null, { status: 204 });
  } else {
    return new Response(JSON.stringify({ message: "Comment not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }
}
