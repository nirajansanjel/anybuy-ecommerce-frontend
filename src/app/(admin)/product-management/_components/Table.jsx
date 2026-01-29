"use client";
import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { CiExport } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { PRODUCT_MANAGEMENT_ROUTE } from "@/constants/route";
import { deleteProduct } from "@/api/products";
import PlaceHolder from "@/assets/products/placeholder.webp";
import DeleteButton from "./DeleteButton";

const ProductsTable = ({ products }) => {
  return (
    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div className="flex flex-col px-4 py-1 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
        <div className="flex items-center flex-1 space-x-4">
          <h5>
            <span className="text-gray-500">All Products:</span>
            <span className="dark:text-white">123456</span>
          </h5>
          <h5>
            <span className="text-gray-500">Total sales:</span>
            <span className="dark:text-white">$88.4k</span>
          </h5>
        </div>
        <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
          <Link
            href={`${PRODUCT_MANAGEMENT_ROUTE}/add`}
            type="button"
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-black rounded-lg bg-secondary hover:bg-secondary/80  dark:bg-primary-90 focus:outline-none dark:focus:ring-primary"
          >
            <FaPlus className="h-3.5 w-3.5 mr-2" />
            Add new product
          </Link>
          <button
            type="button"
            className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <TfiReload className="w-4 h-4 mr-2" />
            Update stocks 1/250
          </button>
          <button
            type="button"
            className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <CiExport className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 m-4">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                S.N
              </th>
              <th scope="col" className="px-4 py-3">
                Product
              </th>
              <th scope="col" className="px-4 py-3">
                Brand
              </th>
              <th scope="col" className="px-4 py-3">
                Category
              </th>
              <th scope="col" className="px-4 py-3">
                Price
              </th>
              <th scope="col" className="px-4 py-3">
                Stock
              </th>
              <th scope="col" className="px-4 py-3">
                Created At
              </th>
              <th scope="col" className="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <th className="px-4 py-2">{index + 1}</th>
                <th
                  scope="row"
                  className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Image
                    height={20}
                    width={20}
                    alt={product.name}
                    src={product.imageUrls[0] ?? PlaceHolder}
                    className="w-8 h-8 mr-3 object-cover"
                  />
                  {product.name}
                </th>
                <td className="px-4 py-2">
                  <span className="bg-primary/20 text-green-400 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary dark:text-white">
                    {product.brand}
                  </span>
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className="flex items-center">
                    <div className="inline-block w-4 h-4 mr-2" />
                    {product.category}
                  </div>
                </td>

                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Rs.{product.price}
                </td>

                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className="flex items-center">
                    {product.stock > 10 ? (
                      <div className="inline-block w-4 h-4 mr-2 bg-green-500 rounded-full" />
                    ) : product.stock > 5 ? (
                      <div className="inline-block w-4 h-4 mr-2 bg-orange-500 rounded-full" />
                    ) : (
                      <div className="inline-block w-4 h-4 mr-2 bg-red-500 rounded-full" />
                    )}
                    {product.stock ?? 1}
                  </div>
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {format(product.createdAt, "dd MMM, yyyy")}
                </td>
                <Link href={`${PRODUCT_MANAGEMENT_ROUTE}/edit/${product._id}`}>
                  <td className="px-4 py-2 font-md text-lg hover:text-green-600 text-gray-900 whitespace-nowrap dark:text-white">
                    <MdEdit />
                  </td>
                </Link>
               <DeleteButton id={product._id} />
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
              className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-90 bg-primary/5 border-primary/50 hover:bg-primary/20 hover:text-primary dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              ...
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              100
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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

export default ProductsTable;
