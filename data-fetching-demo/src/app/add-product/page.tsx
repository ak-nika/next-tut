import { addProduct } from "@/prismaDB";
import { redirect } from "next/navigation";
import SubmitButton from "@/components/SubmitButton";
import { useActionState } from "react";

type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

type FormState = {
  errors: Errors;
};

export default function AddProduct() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState
  );

  const createProduct = async (formdata: FormData) => {
    "use server";

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

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl text-center font-bold mb-8">Add Product</h1>

      <form
        className="p-4 space-y-4 max-w-96 mx-auto bg-gray-200 text-gray-800"
        action={formAction}
      >
        <label>
          <span className="font-semibold block mb-2">Product Name</span>
          <input
            type="text"
            placeholder="Enter product name..."
            name="title"
            className="w-full p-2 border rounded outline-none"
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
          {isPending ? "Submitting..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
