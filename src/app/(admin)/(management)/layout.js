"use client"
import { HOME_ROUTE } from "@/constants/route";
import allowedAdminRoles from "@/helpers/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const allowedRoles = allowedAdminRoles(user?.roles);
  const router = useRouter();

  useEffect(() => {
    if (!allowedRoles) router.push(HOME_ROUTE);
  }, []);

  return <div>{children}</div>;
};

export default Layout;
