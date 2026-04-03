import { payViaKhalti } from "@/api/orders";
import khaltiLogo from "@/assets/PaymentModes/khalti-logo.png";
import Image from "next/image";
import { toast } from "react-toastify";

const PayViaKhalti = ({ orderId }) => {
  
  function initOrderPaymentKhalti() {

    payViaKhalti(orderId)
      .then((response) => {
        const data = response.data;
        window.location.href = data.payment_url;
      })
      .catch((error) => {
        toast.error(error.response?.data, { autoClose: 1500 });
      });
  }

  return (
    <button
      className="text-white bg-[#4e2c6d] cursor-pointer rounded-md flex items-center text-sm pl-2 pr-4 py-1 gap-2"
      onClick={initOrderPaymentKhalti}
    >
      <Image
        height={80}
        width={100}
        src={khaltiLogo}
        alt=""
        className="h-5 w-5"
      />
      Khalti
    </button>
  );
};

export default PayViaKhalti;
