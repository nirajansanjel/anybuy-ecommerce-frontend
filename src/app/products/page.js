import { getBrands, getCategories, getProducts } from "@/api/products";
import ProductCard from "./_components/Card";
import FilterButton from "./_components/FilterButton";
import { CiSearch } from "react-icons/ci";

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
            for="search"
            class="block mb-2.5 text-sm font-medium text-heading sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className=" absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <CiSearch />
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-3 ps-9 rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
              placeholder="Search"
              
            />
           
          </div>

          <div>
            <FilterButton brands={brands} categories={categories} />
          </div>
        </div>
      </div>
      <div>
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
