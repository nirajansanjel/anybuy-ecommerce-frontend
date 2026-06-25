import { getProducts } from "@/api/products";
import NewArrivalsCarousel from "./NewArrivals";

// Server Component: keeps the real data fetching exactly as before.
const Featured = async () => {
  const response = await getProducts({ brands: "Apple" });
  const products = response.data;
  console.log("The products are:",products)

  return <NewArrivalsCarousel products={products} />;
};

export default Featured;
