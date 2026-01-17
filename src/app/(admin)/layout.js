"use client";
import { HOME_ROUTE, LOGIN_ROUTE } from "@/constants/route";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import allowedAdminRoles from "@/helpers/auth";

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
  if (!user || !allowedRoles)
    return (
      <div className="flex justify-center py-20">
        <Loader className="h-24 w-24" />
      </div>
    );
  return <div>{children}</div>;
};

export default AdminLayout;
