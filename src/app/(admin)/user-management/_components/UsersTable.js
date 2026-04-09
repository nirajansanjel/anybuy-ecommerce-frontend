"use client";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Loader from "@/app/components/Loader";
import { IoSettingsOutline } from "react-icons/io5";
import Action from "./Action";
import { getAllUsers } from "@/api/users";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { toast } from "react-toastify";

const columns = [
  {
    label: "S.N.",
    key: "id",
  },
  {
    label: "User ",
    key: "user",
  },
  {
    label: "Email",
    key: "email",
  },
  {
    label: "Phone",
    key: "phone",
  },
  {
    label: "Roles ",
    key: "roles",
  },
  {
    label: "Created At",
    key: "createdAt",
  },
];
const UsersTable = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAllUsers()
      .then((response) => setUsers(response?.data))
      .catch((error) => {
        toast.error(error.response?.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div className="flex flex-col px-4 py-1 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
        <div className="flex items-center flex-1 space-x-4">
          <h5>
            <span className="text-gray-500">All users:</span>
            <span className="dark:text-white">{users.length} </span>
          </h5>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 m-4">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((column, index) => (
                <th
                  scope="col"
                  key={index}
                  className="px-4 py-3 cursor-pointer"
                >
                  <div className="flex items-center gap-2">{column.label}</div>
                </th>
              ))}

              <th scope="col" className="px-4 py-2 flex justify-center text-lg">
                <IoSettingsOutline />
              </th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <div className="flex justify-center items-center text-center p-4">
                <Loader className="h-12  w-12 fill-secondary" />
              </div>
            )}
            {!loading &&
              users.map((user, index) => (
                <tr
                  key={index}
                  className="bUser-b bUser-gray-300 dark:bUser-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <th className="px-4 py-2">{index + 1}.</th>
                  <th
                    scope="row"
                    className="flex items-center py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white gap-2"
                  >
                    {user.profileImage ? (
                      <Image
                        src={user.profileImage}
                        alt={"profile"}
                        width={100}
                        height={100}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <FaUser className="h-10 w-10 rounded-full p-2 bg-gray-200" />
                    )}
                    {user.name}
                  </th>
                  <td className="px-4 py-2">
                    <span className=" font-medium px-2 py-0.5 rounded  dark:text-white">
                      {user.email}
                    </span>
                  </td>

                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.phone}
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.roles.map((role, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary border border-primary/50 mx-0.5 p-1 rounded-md text-xs"
                      >
                        {role}
                      </span>
                    ))}
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {format(user.createdAt, "dd MMM, yyyy")}
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <Action id={user._id} userRoles={user.roles} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <nav
        className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing
          <span className="font-semibold text-gray-900 dark:text-white">
            1-10
          </span>
          of
          <span className="font-semibold text-gray-900 dark:text-white">
            1000
          </span>
        </span>
        <ul className="inline-flex items-stretch -space-x-px">
          <li>
            <a
              href="#"
              className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg bUser bUser-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:bUser-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white bUser bUser-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:bUser-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white bUser bUser-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:bUser-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight bUser text-primary-90 bg-primary/5 bUser-primary/50 hover:bg-primary/20 hover:text-primary dark:bUser-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white bUser bUser-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:bUser-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              ...
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white bUser bUser-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:bUser-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              100
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg bUser bUser-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:bUser-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UsersTable;
