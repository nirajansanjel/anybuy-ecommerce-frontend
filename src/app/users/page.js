"use client";
import { getAllUsers } from "@/api/users";
import React from "react";

const usersPage = () => {
  getAllUsers()
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  return <div>Users Page</div>;
};

export default usersPage;
