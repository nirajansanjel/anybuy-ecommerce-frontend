import Modal from "@/app/components/Modal";
import OrdersTable from "./_components/OrdersTable";

const OrderManagement = () => {
  return (
    <section className=" dark:bg-gray-800 py-3 sm:py-5">
      <Modal />
      <h2 className="font-semibold text-xl text-gray-700 mb-2  m-4 dark:text-white">
        Order Management
      </h2>
      <div className="px-4 mx-auto max-w-screen-2xl lg:px-12"></div>
      <OrdersTable />
    </section>
  );
};

export default OrderManagement;
