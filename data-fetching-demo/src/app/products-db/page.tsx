import { getProducts } from "@/prismaDB";
import ProductDetails from "./ProductDetails";
import { Product } from "@/generated/prisma";

export default async function ProductsDB() {
  const products: Product[] = await getProducts();

  return <ProductDetails products={products} />;
}
