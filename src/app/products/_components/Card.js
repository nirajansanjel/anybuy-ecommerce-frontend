import { FaCartPlus, FaStar } from "react-icons/fa";
import Image from "next/image";
import ImagePlaceHolder from "@/assets/products/placeholder.webp";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="product1 rounded-lg shadow-md bg-white  relative m-4 overflow-hidden dark:bg-slate-500 dark:text-white">
      <Link href={`/products/${product._id}`}>
        <Image
          src={product.imageUrls[0] ?? ImagePlaceHolder}
          className="rounded-t-lg  object-cover hover:scale-105 transition-all duration-105"
          alt={product.name}
          height={1 / 2}
          width={500}
        />
      </Link>
      <span className="absolute top-2 left-2 bg-red-600 text-white-500 rounded-full text-md p-1">
        -20%
      </span>
      <h3 className="flex text-2xl font-semibold pl-2 my-6 hover:text-primary">
        <Link href={`/products/${product._id}`}>{product.name}</Link>
      </h3>
      <div className="icons text-yellow-500 flex pl-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />

        <p className="text-black pt-2">(300)</p>
      </div>
      <div className="flex justify-between">
        <div className="  ">
          <span className="text-xl pl-2">Rs. {product.price}</span>
          <span className="line-through pl-2 ">{product.price * 1.2}</span>
        </div>
        <div className="mr-4 flex justify-end   text-3xl py-2 ">
          <FaCartPlus />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
