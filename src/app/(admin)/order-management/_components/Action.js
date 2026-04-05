import { updateStatus } from "@/api/orders";
import Modal from "@/app/components/Modal";
import React, { useState } from "react";
import { BsBox2 } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";

const Action = ({ id, orderStatus }) => {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(orderStatus);

  function updateOrderStatus() {
    updateStatus(id, { status })
      .then(() => {
        toast.success(`Status Updated : ${status}`, { autoClose: 1500 });
      })
      .catch(() => {
        toast.error("Status Update failed!", { autoClose: 1500 });
      })
      .finally(() => {
        setShowModal(false);
      });
  }

  return (
    <>
      <button className="flex" onClick={() => setShowModal(true)}>
        <span className="px-6 text-lg hover:text-green-600 ">
          <MdEdit />
        </span>
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        label={"Update Order Status"}
        icon={<BsBox2 className="mx-auto text-6xl text-gray-400 mb-5" />}
        info={
          <div>
            <select
              className="border rounded-md w-full py-2 border-gray-300"
              onChange={(e) => setStatus(e.target.value)}
              defaultValue={orderStatus}
            >
              <option value="PENDING">PENDING</option>
              <option value="CONFIRMED">CONFIRMED</option>
              <option value="SHIPPED">SHIPPED</option>
              <option value="DELIVERED">DELIVERED</option>
            </select>
          </div>
        }
        confirmAction={
          <button
            onClick={updateOrderStatus}
            className="bg-green-700 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-green-800"
          >
            Update
          </button>
        }
      />
    </>
  );
};

export default Action;
