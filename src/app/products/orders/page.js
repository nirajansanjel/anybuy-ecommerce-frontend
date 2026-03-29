"use client";
import React, { useEffect, useState } from "react";
import OrderCard from "./_components/Card";
import { getOrdersByUser } from "@/api/orders";
import Loader from "@/app/components/Loader";
import {
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/constants/orderStatus";
import { FaLastfmSquare } from "react-icons/fa";
import { set } from "date-fns";

const orderStatuses = [
  ORDER_STATUS_PENDING,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_SHIPPED,
  ORDER_STATUS_DELIVERED,
];

const OrdersPage = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(ORDER_STATUS_PENDING);
  const [isUpdated, setIsUpdated] = useState(true);

  function fetchOrders() {
    setLoading(true);
    getOrdersByUser(status)
      .then((response) => setOrders(response.data))
      .finally(() => {
        setLoading(false);
        setIsUpdated(false);
      });
  }
  useEffect(() => {
    fetchOrders();
  }, [status]);

  useEffect(() => {
    if (!isUpdated) return;
    fetchOrders();
  }, [isUpdated]);

  return (
    <section className="py-10 ">
      <div className="container mx-auto">
        <div>
          <h1 className="text-3xl font-semibold mb-5 dark:text-white">
            Order Items
          </h1>
        </div>
        <div className="flex justify-around border-b mb-2 rounded-lg border-gray-200">
          {orderStatuses.map((orderStatus) => (
            <button
              key={orderStatus}
              className={
                orderStatus == status
                  ? "bg-orange-500 px-4 md:px-12 rounded text-white text-sm md:text-md hover:bg-orange-400"
                  : "px-4 py-1 md:px-12  md:text-md m-1 rounded text-xs md:text-md hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-600"
              }
              onClick={() => setStatus(orderStatus)}
            >
              {orderStatus}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6">
          {loading ? (
            <div className="py-10 flex justify-center">
              <Loader className="w-10 h-10 fill-secondary" />
            </div>
          ) : orders.length == 0 ? (
            <div className="text-center text-lg dark:text-white rounded p-1">
              No order Items{" "}
            </div>
          ) : (
            orders.map((order, index) => (
              <OrderCard
                key={index}
                order={order}
                setIsUpdated={setIsUpdated}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default OrdersPage;
