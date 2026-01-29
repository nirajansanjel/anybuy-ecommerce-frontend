import React from "react";
import ProductsTable from "./_components/Table";

import Modal from "@/app/components/Modal";

const ProductManagement = () => {
  return (
    <section className=" dark:bg-gray-800 py-3 sm:py-5">
      <Modal />
      <h2 className="font-semibold text-xl text-gray-700 mb-2  m-4 dark:text-white">
        Product Management
      </h2>
      <div className="px-4 mx-auto max-w-screen-2xl lg:px-12"></div>
      <ProductsTable />
    </section>
  );
};

export default ProductManagement;
