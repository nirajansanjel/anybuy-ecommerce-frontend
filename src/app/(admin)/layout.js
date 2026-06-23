"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Sidebar from "./_components/Sidebar";
import { LOGIN_ROUTE } from "@/constants/route";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      return router.push(LOGIN_ROUTE);
    }
  });
  if (!user) {
    return (
      <div className="flex justify-center py-20  ">
        <Loader className="h-24 w-24" />
      </div>
    );
  }
  return (
  <div className="relative md:pl-64">
    <Sidebar />
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-4 sm:py-8">
      {children}
    </section>
  </div>)
};

export default AdminLayout;
