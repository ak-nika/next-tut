import { addProduct } from "@/prismaDB";
import { redirect } from "next/navigation";
import SubmitButton from "@/components/SubmitButton";

export default function AddProduct() {
  const createProduct = async (formdata: FormData) => {
    "use server";

    const title = formdata.get("title")?.toString() as string;
    const price = formdata.get("price")?.toString() as string;
    const description = formdata.get("description")?.toString() as string;

    await addProduct(title, parseInt(price), description);
    redirect("/products-db");
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl text-center font-bold mb-8">Add Product</h1>

      <form
        className="p-4 space-y-4 max-w-96 mx-auto bg-gray-200 text-gray-800"
        action={createProduct}
      >
        <label>
          <span className="font-semibold block mb-2">Product Name</span>
          <input
            type="text"
            placeholder="Enter product name..."
            name="title"
            className="w-full p-2 border rounded outline-none"
            required
          />
        </label>

        <label>
          <span className="font-semibold block my-2">Product Price</span>
          <input
            type="number"
            placeholder="Enter product price..."
            name="price"
            className="w-full p-2 border rounded outline-none"
            required
          />
        </label>

        <label>
          <span className="font-semibold block my-2">Product Description</span>
          <input
            type="text"
            placeholder="Enter product description..."
            name="description"
            className="w-full p-2 border rounded outline-none"
            required
          />
        </label>

        <SubmitButton>Add Product</SubmitButton>
      </form>
    </div>
  );
}
