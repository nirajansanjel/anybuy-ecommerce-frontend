"use client";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { CiExport } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { PRODUCT_MANAGEMENT_ROUTE } from "@/constants/route";
import { getProducts } from "@/api/products";
import PlaceHolder from "@/assets/products/placeholder.png";
import DeleteButton from "./DeleteButton";
import { useDispatch, useSelector } from "react-redux";
import { refreshList } from "@/redux/product/productSlice";
import Loader from "@/app/components/Loader";
import { IoSettingsOutline } from "react-icons/io5";
import {
  HiArrowSmallDown,
  HiArrowSmallUp,
  HiMiniArrowsUpDown,
} from "react-icons/hi2";
import Pagination from "./Pagination";

const columns = [
  {
    label: "S.N.",
    key: "id",
    sortable: false,
  },
  {
    label: "Product",
    key: "name",
    sortable: true,
  },
  {
    label: "Brand",
    key: "brand",
    sortable: true,
  },
  {
    label: "Category",
    key: "category",
    sortable: true,
  },
  {
    label: "Price",
    key: "price",
    sortable: true,
  },
  {
    label: "Stock",
    key: "stock",
    sortable: true,
  },
  {
    label: "Created At",
    key: "createdAt",
    sortable: true,
  },
];
const ProductsTable = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(-1);
  const [pageNumber, setPageNumber] = useState(1);

  const { refresh } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const PAGE_LIMIT = 10;
  useEffect(() => {
    setLoading(true);
    const query = {};
    if (sortBy) {
      query.sort = JSON.stringify({ [sortBy]: sortOrder });
    }
    query.limit = PAGE_LIMIT;
    query.offset = PAGE_LIMIT * (pageNumber - 1);
    getProducts(query)
      .then((response) => setProducts(response?.data))
      .finally(() => {
        setLoading(false);
        dispatch(refreshList(false));
      });
  }, [refresh, dispatch, sortBy, sortOrder, pageNumber]);
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
      {loading && (
        <div className="flex justify-center items-center">
          <Loader className="h-12  w-12 fill-secondary" />
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 m-4">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((column, index) => (
                <th
                  scope="col"
                  key={index}
                  className="px-4 py-3 cursor-pointer"
                  onClick={() => {
                    if (!column.sortable) return;
                    setSortBy(column.key);
                    setSortOrder(sortOrder == 1 ? -1 : 1);
                  }}
                >
                  <div className="flex items-center gap-2">
                    {column.label}
                    {column.sortable ? (
                      column.key == sortBy ? (
                        sortOrder == 1 ? (
                          <HiArrowSmallUp />
                        ) : (
                          <HiArrowSmallDown />
                        )
                      ) : (
                        <HiMiniArrowsUpDown />
                      )
                    ) : null}
                  </div>
                </th>
              ))}

              <th scope="col" className="px-4 py-2 flex justify-center text-lg">
                <IoSettingsOutline />
              </th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              products.map((product, index) => (
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
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex">
                      <Link
                        href={`${PRODUCT_MANAGEMENT_ROUTE}/edit/${product._id}`}
                      >
                        <span className="px-6 text-lg hover:text-green-600 ">
                          <MdEdit />
                        </span>
                      </Link>
                      <DeleteButton id={product._id} />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
};

export default ProductsTable;
