import { updateStatus } from "@/api/orders";
import { ORDER_STATUS_CONFIRMED } from "@/constants/orderStatus";
import { ORDERS_ROUTE } from "@/constants/route";
import { useRouter } from "next/navigation";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { toast } from "react-toastify";


const CashOnDelivery = ({orderId}) => {
  const router = useRouter();

  function confirmOrder() {
    updateStatus(orderId, {
      status: ORDER_STATUS_CONFIRMED,
    })
      .then(() => {
        toast.success("Order Confirmed Succcessfully.", { autoClose: 1000 });
        router.push(`${ORDERS_ROUTE}?status=${ORDER_STATUS_CONFIRMED}`);
      })
      .catch((error) => {
        toast.error(error.response?.data);
      });
  }
  return (
    <button
      className="flex items-center cursor-pointer bg-green-500  rounded text-zinc-50 px-4 gap-1"
      onClick={confirmOrder}
    >
      <LiaMoneyBillWaveSolid />
      <div>Cash On Delivery</div>
    </button>
  );
};

export default CashOnDelivery;
