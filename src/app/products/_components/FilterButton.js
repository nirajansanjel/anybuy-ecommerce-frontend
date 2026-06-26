"use client";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import FilterDrawer from "./FilterDrawer";

const FilterButton = ({ brands, categories }) => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowFilter(!showFilter)}
        className="bg-primary text-white px-4 py-1 rounded-md flex items-center gap-1 hover:bg-primary/90 dark:text-slate-800"
      >
        <div className="flex ">
          <div className="p-1">
            <h2>Filter</h2>
          </div>
          <div className="p-1">
            <CiFilter />
          </div>
        </div>
      </button>
      <FilterDrawer
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        brands={brands}
        categories={categories}
      />
    </>
  );
};

export default FilterButton;
