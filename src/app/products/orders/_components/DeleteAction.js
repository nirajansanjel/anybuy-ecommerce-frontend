import { orderDelete } from "@/api/orders";
import Modal from "@/app/components/Modal";
import React, { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { toast } from "react-toastify";

const DeleteAction = ({ order,setIsUpdated }) => {
  const [showModal, setShowModal] = useState(false);
  function removeOrder() {
    orderDelete(order._id)
      .then(() => {
        toast.success("Order deleted successfully!", { autoClose: 1000 });
        setIsUpdated(true)
      })
      .catch((error) => {
        toast.error(error.response?.data, { autoClose: 1000 });
      })
      .finally(() => {
        setShowModal(false);
      });
  }

  return (
    <>
      <button
        className="bg-red-500 rounded-md shadow text-zinc-100 px-4 py-1"
        onClick={() => setShowModal(true)}
      >
        Delete
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        label={"Are you sure you want to delete this order?"}
        confirmAction={
          <button
            className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-600 rounded-lg border border-red-200 hover:bg-red-700 focus:z-10 focus:ring-4 focus:ring-red-100 "
            onClick={removeOrder}
          >
            Yes, I&apos;m sure
          </button>
        }
        info={
          <p>
            <span>Order Number : {order.orderNumber}</span>
          </p>
        }
        icon={<FiAlertCircle className="mx-auto mb-4 text-red-600 w-12 h-12" />}
      />
    </>
  );
};

export default DeleteAction;
