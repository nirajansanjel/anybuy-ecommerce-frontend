import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const {totalPrice} = useSelector((state)=> state.cart)
  return (
    <button className="bg-primary text-sm text-white px-4 py-1 rounded-md hover:bg-primary/90 flex gap-1 items-center disabled:bg-primary/80 disabled:cursor-not-allowed">
      Checkout | Rs.  {totalPrice}
    </button>
  );
};

export default Checkout;
