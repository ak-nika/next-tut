"use client";

// import SubmitButton from "@/components/SubmitButton";
import { editProduct, FormState } from "@/actions/products";
import { Product } from "@/generated/prisma";
import { useActionState } from "react";

export default function EditProductForm({ product }: { product: Product }) {
  const initialState: FormState = {
    errors: {},
  };

  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(
    editProductWithId,
    initialState
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl text-center font-bold mb-8">Edit Product</h1>

      <form
        className="p-4 space-y-4 max-w-96 mx-auto bg-gray-200 text-gray-800 rounded-lg"
        action={formAction}
      >
        <label>
          <span className="font-semibold block mb-2">Product Name</span>
          <input
            type="text"
            placeholder="Enter product name..."
            name="title"
            className="w-full p-2 border rounded outline-none"
            defaultValue={product.title}
          />
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}

        <label>
          <span className="font-semibold block my-2">Product Price</span>
          <input
            type="number"
            placeholder="Enter product price..."
            name="price"
            className="w-full p-2 border rounded outline-none"
            defaultValue={product.price}
          />
        </label>
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}

        <label>
          <span className="font-semibold block my-2">Product Description</span>
          <input
            type="text"
            placeholder="Enter product description..."
            name="description"
            className="w-full p-2 border rounded outline-none"
            defaultValue={product.description ?? ""}
          />
        </label>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}

        {/* <SubmitButton>Add Product</SubmitButton> */}
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mt-4 mx-auto cursor-pointer transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {isPending ? "Editing..." : "Edit Product"}
        </button>
      </form>
    </div>
  );
}
