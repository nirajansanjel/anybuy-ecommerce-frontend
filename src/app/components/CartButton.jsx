"use client";
import { PRODUCTS_CART_ROUTE } from "@/constants/route";
import { useRouter } from "next/navigation";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartButton = () => {
  const router = useRouter();
  const { products } = useSelector((state) => state.cart);

  return (
    // Removed "hidden lg:flex" — visibility is now controlled by the
    // parent (NavMenu desktop strip is already inside hidden lg:flex).
    <div
      onClick={() => router.push(PRODUCTS_CART_ROUTE)}
      className="relative flex hover:text-primary cursor-pointer text-lg w-8 justify-center"
    >
      <span className="absolute -top-2 -right-2 text-on-error bg-error text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
        {products.length}
      </span>
      <FaCartPlus />
    </div>
  );
};

export default CartButton;
