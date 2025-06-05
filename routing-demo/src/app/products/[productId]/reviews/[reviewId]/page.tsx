import { notFound } from "next/navigation";

const getRandomNumber = (count: number): number => {
  return Math.floor(Math.random() * count);
};

const ReviewDetails = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const random = getRandomNumber(2);
  if (random === 1) {
    throw new Error("An error occurred while fetching review details.");
  }

  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
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
