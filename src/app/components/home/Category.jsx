import { PRODUCTS_ROUTE } from "@/constants/route";
import Link from "next/link";
import { FaCube, FaLaptop, FaPhone } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";

const Category = () => {
  return (
    <section className="bg-slate-400 w-full h-auto " id="categories">
      <div className="container mx-auto px-4 py-6 ">
        <div className="text-center mb-4 ">
          <h3 className="text-3xl font-bold">Shop By Category</h3>
          <p className="text-gray-600">Browse your products by Categories</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 my-6 ">
          <Link href={`${PRODUCTS_ROUTE}?category=Laptop`} alt="">
            <div className="category1 flex flex-col items-center justify-center rounded-lg bg-zinc-300 p-4  ">
              <FaLaptop className="text-4xl bg-slate-400 p-2 rounded-full" />
              <h3 className="text-2xl font-semibold">Laptop&amp;PC</h3>
              <p className="text-gray-600">35 Products</p>
            </div>
          </Link>
          <Link href={`${PRODUCTS_ROUTE}?category=Electronics`} alt="">
            <div className="category2 flex flex-col items-center justify-center rounded-lg bg-zinc-300  p-4 w-full h-auto">
              <div className="icon2 flex justify-center items-center ">
                {" "}
                <MdElectricBolt className="fa-solid fa-bag-shopping text-4xl bg-slate-400 p-3 rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold">Electronics</h3>
              <p className="text-gray-600">381 Products</p>
            </div>
          </Link>
          <Link href={`${PRODUCTS_ROUTE}?category=Phone`} alt="">
            <div className="category3 flex flex-col items-center justify-center rounded-lg text-center bg-zinc-300  p-4 w-full h-auto">
              <FaPhone className="text-4xl bg-slate-400 p-2 rounded-full" />
              <h3 className="text-2xl font-semibold">SmartPhone</h3>
              <p className="text-gray-600">95 Products</p>
            </div>
          </Link>
          <Link href={`${PRODUCTS_ROUTE}`} alt="">
            <div className="category4 flex flex-col items-center justify-center rounded-lg text-center  bg-zinc-300 p-4 w-full h-auto">
              <FaCube className="fa-solid fa-cube text-4xl bg-slate-400 p-2 rounded-full" />
              <h3 className="text-2xl font-semibold">Miscellaneous</h3>
              <p className="text-gray-600">578 Products</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Category;
