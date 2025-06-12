import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <h1>Featured Products</h1>
      <Link className="underline block mt-2" href="/products/1">
        Product 1
      </Link>
      <Link className="underline block mt-2" href="/products/2">
        Product 2
      </Link>
      <Link className="underline block mt-2" href="/products/3">
        Product 3
      </Link>
    </div>
  );
}
