import { getProducts } from "@/api/products";
import ProductCard from "./_components/Card";
import { LoadingCard } from "./loading";

export const metadata = {
  title: "Products",
};
const Products = async () => {
  const response = await getProducts();
  const products = response.data;

  return (
    <div className="container mx-auto py-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        
      </div>
    </div>
  );
};      

export default Products;
