import React from "react";

const getRandomNumber = (count: number): number => {
  return Math.floor(Math.random() * count);
};

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  const random = getRandomNumber(2);
  if (random === 1) {
    throw new Error("Error loading product");
  }

  return (
    <>
      {children}
      <h2>Featured Products</h2>
    </>
  );
};

export default ProductDetailsLayout;
