import { getProductById } from "@/api/products";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const productId = (await params).productId;
  const response = await getProductById(productId);
  const product = response.data;
  return {
    title: product?.name,
    keywords: `${product?.name},${product?.brand},${product?.category}`,
  };
};

const ProductById = async ({ params }) => {
  const productId = (await params).productId;
  const response = await getProductById(productId);

  const product = response.data;

  return (
    <div>
      <div>Info of product: {product._id}</div>
      <div> Name:{product.name}</div>
      <div> Price:{product.price}</div>
      <div> Brand:{product.brand}</div>
      <div> Category:{product.category}</div>
      <div>Description:{product.description}</div>
    </div>
  );
};

export default ProductById;
