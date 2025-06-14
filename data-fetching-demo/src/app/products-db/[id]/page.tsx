import { getProduct } from "@/prismaDB";
import EditProductForm from "./EditProductForm";
import { Product } from "@/generated/prisma";
import { notFound } from "next/navigation";

export default async function EditProduct({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product: Product | null = await getProduct(parseInt(id));

  if (!product) notFound();

  return <EditProductForm product={product} />;
}
