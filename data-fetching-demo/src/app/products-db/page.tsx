import { removeProduct } from "@/actions/products";
import { getProducts } from "@/prismaDB";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDB() {
  const products: Product[] = await getProducts();

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl text-center font-bold mb-8">All Products</h1>

      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-4 bg-gray-300 rounded-lg text-gray-700"
          >
            <h2 className="text-xl font-semibold">
              <Link
                href={`/products-db/${product.id}`}
                className="hover:underline"
              >
                {product.title}
              </Link>
            </h2>
            <p>{product.description}</p>
            <p className="text-lg font-medium">${product.price}</p>

            <form action={removeProduct.bind(null, product.id)}>
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-900 text-white transition-colors px-4 py-2 mt-4 rounded-xl font-semibold cursor-pointer"
              >
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
