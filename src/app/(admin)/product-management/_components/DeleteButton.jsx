import { deleteProduct } from "@/api/products";
import Modal from "@/app/components/Modal";
import React, { useState } from "react";
import { CgDanger } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const DeleteButton = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  function confirmDelete() {
    deleteProduct(id)
      .then(() => {
        toast.success("Product deleted successfully!",{autoClose:1000});
      })
      .catch((error) => {
        toast.error(error.response?.data,{autoClose:1000});
      })
      .finally(() => {
        setShowModal(false);
      });
  }
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="text-red-600 hover:text-lg transition"
      >
        <FaTrash />
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        label="Are you sure you want to delete this product from your account?"
        icon={<CgDanger className="mx-auto mb-4 text-fg-disabled w-12 h-12" />}
        confirmAction={
          <button
            onClick={confirmDelete}
            className="text-white bg-red-500 box-border border border-transparent  shadow-xs font-medium leading-5 rounded-xl text-sm px-4 py-2.5 "
          >
            Yes, I'm sure
          </button>
        }
      />
    </>
  );
};

export default DeleteButton;
