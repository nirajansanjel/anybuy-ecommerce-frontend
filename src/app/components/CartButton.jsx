"use client"
import { PRODUCTS_CART_ROUTE } from "@/constants/route";
import { useRouter } from "next/navigation";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartButton = () => {
  const router = useRouter();

const {products} = useSelector((state)=>state.cart)


  return (
    <div
      onClick={() => router.push(PRODUCTS_CART_ROUTE)}
      className="relative hidden lg:flex  hover:text-red-500 text-lg  w-16 justify-end px-1"
    >
      <span className="absolute -top-2 -right-2 text-white bg-red-600 text-[0.75rem] rounded-full h-4 w-4 p-1 flex items-center">{products.length}</span>
      <FaCartPlus />
    </div>
  );
};

export default CartButton;
