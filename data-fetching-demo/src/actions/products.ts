"use server";

import { addProduct, deleteProduct, updateProduct } from "@/prismaDB";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
};

export const createProduct = async (
  prevState: FormState,
  formdata: FormData
) => {
  const title = formdata.get("title")?.toString() as string;
  const price = formdata.get("price")?.toString() as string;
  const description = formdata.get("description")?.toString() as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = "Title is required";
  }
  if (!price) {
    errors.price = "Price is required";
  }
  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await addProduct(title, parseInt(price), description);
  redirect("/products-db");
};

export const editProduct = async (
  id: number,
  prevState: FormState,
  formdata: FormData
) => {
  const title = formdata.get("title")?.toString() as string;
  const price = formdata.get("price")?.toString() as string;
  const description = formdata.get("description")?.toString() as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = "Title is required";
  }
  if (!price) {
    errors.price = "Price is required";
  }
  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await updateProduct(id, title, parseInt(price), description);
  redirect("/products-db");
};

export async function removeProduct(id: number) {
  await deleteProduct(id);
  revalidatePath("/products-db");
}
