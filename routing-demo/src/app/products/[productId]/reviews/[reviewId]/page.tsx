import { notFound, redirect } from "next/navigation";

const ReviewDetails = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    // notFound();

    redirect("/products");
  }
  return (
    <div>
      <h1>
        Review Details for Product ID: {productId} and Review ID: {reviewId}
      </h1>
    </div>
  );
};

export default ReviewDetails;
