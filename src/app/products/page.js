import { getBrands, getCategories, getProducts } from "@/api/products";
import ProductCard from "./_components/Card";
import FilterButton from "./_components/FilterButton";
import SearchBar from "./_components/SearchBar";

export const metadata = {
  title: "Products",
};
const Products = async ({ searchParams }) => {
  const response = await getProducts(await searchParams);
  const products = response.data;
  const brandResponse = await getBrands();
  const categoryReponse = await getCategories();
  const brands = brandResponse.data;
  const categories = categoryReponse.data;

  return (
    <div className="container mx-auto py-6 ">
      <div className="flex flex-col px-6 py-2 items-center justify-between md:flex-row">
        <div>
          <h2 className="text-3xl py-5 font-medium dark:text-white">
            Popular Products
          </h2>
        </div>
        <div className="flex gap-4">
          <label
            htmlFor="search"
            className="block mb-2.5 text-sm font-medium text-heading sr-only "
          >
            Search
          </label>
         <SearchBar/>

          <div>
            <FilterButton brands={brands} categories={categories} />
          </div>
        </div>
      </div>
      <div>
        {products?.length==0 && (<div className="mx-auto w-full py-10 my-5 rounded-xl bg-secondary/10 text-secondary text-2xl text-center">Products Not Available!</div>)}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
