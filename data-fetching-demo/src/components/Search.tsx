import Form from "next/form";

const Search = () => {
  return (
    <Form action="/products-db" className="flex gap-2">
      <input
        type="text"
        name="query"
        className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-400 outline-none transition-colors"
        placeholder="Search products..."
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-lg text-white bg-blue-400 hover:bg-blue-600 cursor-pointer"
      >
        Search
      </button>
    </Form>
  );
};

export default Search;
