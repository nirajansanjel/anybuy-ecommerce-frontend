"use client";
import { HOME_ROUTE, LOGIN_ROUTE } from "@/constants/route";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import allowedAdminRoles from "@/helpers/auth";
import Sidebar from "./_components/Sidebar";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const allowedRoles = allowedAdminRoles(user?.roles);
  useEffect(() => {
    if (!user) {
      return router.push(LOGIN_ROUTE);
    }

    if (!allowedRoles) router.push(HOME_ROUTE);
  });
  if (!user || !allowedRoles) {
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
