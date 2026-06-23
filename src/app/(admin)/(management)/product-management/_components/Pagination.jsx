import { getProductsCount } from "@/api/products";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Pagination = ({ pageNumber, setPageNumber }) => {
  const [pages, setPages] = useState([]);

  async function getCount() {
    const response = await getProductsCount();
    const toatalProducts = response.data;
    const totalPage = Math.ceil(toatalProducts / 10);
    const pageArray = [];

    for (let i = 1; i <= totalPage; i++) {
      pageArray.push(i.toString());
    }
    setPages(pageArray);
  }

  useEffect(() => {
    getCount();
  }, []);

  return (
    <nav
      className="flex flex-col items-start justify-end p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
      aria-label="Table navigation"
    >
      <ul className="inline-flex items-stretch -space-x-px">
        <li>
          <button
            onClick={() => setPageNumber(pageNumber == 1 ? 1 : pageNumber - 1)}
            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <FaAngleLeft className="w-5 h-5" />
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => setPageNumber(page)}
              className="flex items-center justify-center text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span
                className={
                  page == pageNumber
                    ? "px-3 py-2  bg-secondary/50"
                    : "px-3 py-2 "
                }
              >
                {" "}
                {page}
              </span>
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() =>
              setPageNumber(
                pageNumber == pages.length ? pageNumber : pageNumber + 1,
              )
            }
            className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <FaAngleRight className="w-5 h-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
