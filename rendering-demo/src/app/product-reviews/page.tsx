import Product from "@/components/Product";
import Reviews from "@/components/Reviews";
import { Suspense } from "react";

export default function ProductReviews() {
  return (
    <div>
      <h1>Product Reviews</h1>

      <Suspense fallback={<div>Loading product details...</div>}>
        <Product />
      </Suspense>
      <Suspense fallback={<div>Loading reviews...</div>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
