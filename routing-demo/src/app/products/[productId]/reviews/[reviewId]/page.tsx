import React from "react";

const ReviewDetails = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  return (
    <div>
      <h1>
        Review Details for Product ID: {productId} and Review ID: {reviewId}
      </h1>
    </div>
  );
};

export default ReviewDetails;
