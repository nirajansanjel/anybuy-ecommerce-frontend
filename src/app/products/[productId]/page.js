import { getProductById } from "@/api/products";
import Description from "../_components/Description";

export const generateMetadata = async ({ params }) => {
  const productId = (await params).productId;
  const response = await getProductById(productId);
  const product = response.data;
  return {
    title: product?.name,
    keywords: `${product?.name},${product?.brand},${product?.category}`,
  };
};

const ProductById =async ({ params }) => {
  const productId = (await params).productId;
  const response = await getProductById(productId);

  const product = response.data;

  return (
   <div>
    <Description product={product}/>
   </div>
  );
};

export default ProductById;
