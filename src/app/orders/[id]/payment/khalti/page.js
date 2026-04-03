"use client";
import {  confirmPayment } from "@/api/orders";
import Loader from "@/app/components/Loader";
import { ORDER_STATUS_CONFIRMED } from "@/constants/orderStatus";
import { ORDERS_ROUTE } from "@/constants/route";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const KhaltiPayment = () => {
  const searchParams = useSearchParams();
  const status = searchParams?.get("status");
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    confirmPayment(params.id, { status })
      .then(() => {
        toast.success("Payment Success.", {
          autoClose: 2500,
          onClose: () => {
            router.push(`${ORDERS_ROUTE}?status=${ORDER_STATUS_CONFIRMED}`);
          },
        });
      })
      .catch(() => {
        toast.error("Payment failed.", {
          autoClose: 2500,
          onClose: () => {
            router.push(ORDERS_ROUTE);
          },
        });
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <Loader className="h-12 w-12" />
      <h2 className="mt-5 text-3xl">Verifying Payment...</h2>
    </div>
  );
};

export default KhaltiPayment;
