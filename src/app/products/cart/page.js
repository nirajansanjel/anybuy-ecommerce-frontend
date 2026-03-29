"use client";
import { useDispatch, useSelector } from "react-redux";
import { CiSettings } from "react-icons/ci";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import Image from "next/image";
import ImagePlaceHolder from "@/assets/products/placeholder.webp";
import RemoveFromCart from "../_components/RemoveFromCart";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/cart/cartSlice";
import Checkout from "../_components/Checkout";

const ProductsCart = () => {
  const dispatch = useDispatch();
  const { products, totalPrice } = useSelector((state) => state.cart);
  return (
    <section className="py-10 m-4">
      <h2 className="text-3xl font-medium text-gray-800 dark:text-gray-200 mb-5 ml-2">
        Your cart items
      </h2>
      <div className="relative overflow-x-auto  shadow-md rounded-lg ">
        <table className="w-full text-sm text-left rtl:text-right text-body text-gray-600">
          <thead className="text-sm text-body bg-gray-100 dark:text-white dark:bg-primary rounded-base border-default ">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Brand
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Category
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Price
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-lg">
                <CiSettings />
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length == 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-2">
                  Cart items empty.
                </td>
              </tr>
            ) : (
              products.map((product, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:text-zinc-200 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    <div className="flex gap-2  items-center">
                      <Image
                        src={product.imageUrls[0] ?? ImagePlaceHolder}
                        height={32}
                        width={32}
                        className="h-10 w-10 object-cover rounded"
                        alt={product.name}
                      />
                      {product.name}
                    </div>
                  </th>
                  <td className="px-6 py-4">{product.brand}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Rs. {product.price}
                  </td>
                  <div className="flex items-center gap-2 px-6 py-6">
                    <button
                      onClick={() => dispatch(decreaseQuantity(product))}
                      className="text-lg"
                    >
                      <FiMinusCircle />
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => dispatch(increaseQuantity(product))}
                      className="text-lg"
                    >
                      <FiPlusCircle />
                    </button>
                  </div>
                  <td className="px-6 py-4">
                    <RemoveFromCart product={product} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="flex items-center justify-end py-4 gap-4 px-2">
          <button
            onClick={() => dispatch(clearCart())}
            className="px-4 py-1 text-sm rounded-md bg-red-500 border border-red-600 text-white hover:bg-red-700"
          >
            Clear Cart
          </button>
          <Checkout products={products} totalPrice={totalPrice} />
        </div>
      </div>
    </section>
  );
};

export default ProductsCart;
