import { getProducts } from "@/api/products";
import Image from "next/image";
import placeholder from "@/assets/products/placeholder.png";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import { PRODUCTS_ROUTE } from "@/constants/route";

const Card = ({ product }) => {
  return (
    <div className="rounded-lg shadow-md bg-white dark:bg-slate-800 dark:text-white relative m-4">
      {product.imageUrls.length > 0 ? (
        <Image
          src={product.imageUrls[0]}
          height={100}
          width={100}
          alt=""
          className="rounded-t-lg w-full h-48 object-cover border border-2 "
        />
      ) : (
        <Image className=" rounded-t-lg w-full object-cover" src={placeholder} alt=""/>
      )}
      <span className="absolute top-2 left-2 bg-red-600 text-white-500 rounded-full text-sm p-1">
        -20%
      </span>
      <h3 className="flex text-2xl font-semibold pl-2">{product.name}</h3>
      <div className="icons text-yellow-500 flex pl-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <p className="text-black dark:text-slate-400 pt-2">(300)</p>
      </div>
      <div className="flex justify-between">
        <div className="p-1">
          <span className="text-xl pl-2">Rs. {product.price}</span>
          <span className="line-through pl-2 ">{product.price * 1.2}</span>
        </div>
        <div className="mr-4 flex justify-end   text-3xl py-2 ">
          <i className="fa-solid fa-cart-arrow-down  hover:text-red-700 " />
        </div>
      </div>
    </div>
  );
};

const Featured = async () => {
  const response = await getProducts({ brands: "Apple" });
  const products = response.data;

  return (
    <section
      className="featuredProducts pt-8 bg-slate-100 dark:bg-slate-700"
      id="featuredSection"
    >
      <div className="container mx-auto px-4">
        <div className="featuredProducts">
          <div className="text-center dark:text-white">
            <h3 className="text-4xl font-bold ">Featured Sections</h3>
            <p className="text-md text-gray-600 mb-6 dark:text-gray-400">
              Check out the Best and Latest products in the market.
            </p>
          </div>
          {/* products details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Card product={product} key={index} />
            ))}
          </div>
          <div className="pb-6">
            <Link 
            href={PRODUCTS_ROUTE}
            className=" flex justify-center text-lg pb-4 p-6  bg-primary rounded-lg mt-3 text-lg">
              <h3>View All products</h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
