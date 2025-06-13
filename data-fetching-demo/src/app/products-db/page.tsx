import { getProducts } from "@/prismaDB";

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
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-lg font-medium">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
