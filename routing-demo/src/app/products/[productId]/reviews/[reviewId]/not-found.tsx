"use client";

import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();

  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  return (
    <div className="bg-gary-200 dark:bg-gray-950 min-h-screen flex items-center justify-center flex-col gap-2">
      <h1 className="text-2xl font-bold">
        404 - Review {reviewId} not found for Product {productId}
      </h1>
      <p>Sorry, the review you are looking for sadly does not exist.</p>
    </div>
  );
};

export default NotFound;
