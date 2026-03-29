import {
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/constants/orderStatus";
import Image from "next/image";
import React from "react";
import { FaImage } from "react-icons/fa";
import DeleteAction from "./DeleteAction";

const OrderStatusBadge = ({ status }) => {
  switch (status) {
    case ORDER_STATUS_CONFIRMED:
      return (
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
          {status}
        </span>
      );

    case ORDER_STATUS_SHIPPED:
      return (
        <span className="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-orange-900 dark:text-orange-300">
          {status}
        </span>
      );
    case ORDER_STATUS_DELIVERED:
      return (
        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">
          {status}
        </span>
      );
    default:
      return (
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">
          {status}
        </span>
      );
  }
};

const OrderCard = ({ order,setIsUpdated }) => (
  <div className="border  border-gray-400 rounded-lg">
    <div className="py-4 px-6 bg-white rounded-t-lg dark:bg-gray-700  flex flex-col justify-between leading-normal">
      <div className="mb-2">
        <div className="flex justify-between items-center">
          <div className="text-gray-900 font-bold text-xl mb-2 dark:text-zinc-100">
            Order Number : # {order.orderNumber}
          </div>
          <div>
            <OrderStatusBadge status={order.status} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
          {order.orderItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 shadow dark:bg-gray-400"
            >
              <div className="bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                {item.product?.imageUrls.length > 0 ? (
                  <Image
                    src={item.product.imageUrls[0]}
                    alt={item.product?.name}
                    height={100}
                    width={100}
                    className="h-18 w-18 object-cover rounded-md"
                  />
                ) : (
                  <FaImage className="h-16 w-16 text-gray-400 dark:text-white" />
                )}
              </div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-zinc-100">
                {item.product?.name}
              </h4>
              <p className="text-gray-600">
                Rs. {item.product?.price} * {item.quantity}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-gray-50 rounded-b-lg dark:bg-zinc-400 ">
      <div className="flex justify-between items-center text-sm py-2 px-6">
        <p className="text-gray-900 dark:text-zinc-100 font-semibold leading-none p-2 rounded-md">
          Total Price:{order.totalPrice}
        </p>
        {order.status == ORDER_STATUS_PENDING && (
          <div className="flex gap-2">
            <DeleteAction order={order} setIsUpdated={setIsUpdated}/>
            <button className="bg-secondary rounded-md shadow text-zinc-700 px-4 py-1 ">
              Payment
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default OrderCard;
