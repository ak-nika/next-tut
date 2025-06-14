import { getProducts } from "@/prismaDB";
import ProductDetails from "./ProductDetails";
import { Product } from "@/generated/prisma";

export default async function ProductsDB({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const products: Product[] = await getProducts(query);

  return <ProductDetails products={products} />;
}
