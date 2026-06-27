import { createOrder } from "@/api/orders";
import Loader from "@/app/components/Loader";
import { LOGIN_ROUTE, PRODUCTS_ORDERS_ROUTE } from "@/constants/route";
import { clearCart } from "@/redux/cart/cartSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Checkout = ({ products, totalPrice }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);

  function checkoutOrder() {
    setLoading(true);
    if (user == null) {
      toast.error("Login first to checkout!");
      router.push(LOGIN_ROUTE);
      setLoading(false);
      return;
    }

    createOrder({
      orderItems: products.map((product) => ({
        product: product._id,
        quantity: product.quantity,
      })),
      totalPrice,
      shippingAddress: user.address,
    })
      .then(() => {
        toast.success("Order Created Successfully", { autoClose: 750 });
        router.push(PRODUCTS_ORDERS_ROUTE);
        dispatch(clearCart());
      })
      .catch((error) => {
        toast.error(error.response.data, { autoClose: 1000 });
      })
      .finally(() => setLoading(false));
  }
  return (
    <button
      onClick={checkoutOrder}
      disabled={loading || products.length == 0}
      className="bg-primary text-sm text-white px-4 py-1 rounded-md hover:bg-primary/90 flex gap-1 items-center disabled:bg-primary/80 disabled:cursor-not-allowed"
    >
      Checkout | Rs. {totalPrice}
      {loading && <Loader className="h-4 w-4 fill-red-500" />}
    </button>
  );
};

export default Checkout;
