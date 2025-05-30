const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return (
    <div>
      <h1>Product Details - Product {productId}</h1>
      <p>This is the details page for product {productId}.</p>
    </div>
  );
};

export default ProductDetails;
