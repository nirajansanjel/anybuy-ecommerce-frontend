"use client";

import { addToCart } from "@/redux/cart/cartSlice";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();

  function addProductToCart() {
    // Keep original behavior — strip description before dispatching
    const { description, ...productData } = product;
    dispatch(addToCart(productData));
    toast.success(`${product.name} added to cart.`, { autoClose: 750 });
  }

  return (
    <button
      onClick={addProductToCart}
      aria-label={`Add ${product.name} to cart`}
      className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-on-primary hover:scale-110 hover:shadow-md hover:shadow-primary/30 transition-all duration-200 shrink-0"
    >
      <FaCartPlus className="text-sm" />
    </button>
  );
};

export default AddToCart;
