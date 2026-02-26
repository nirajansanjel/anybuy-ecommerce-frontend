"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";

const SearchBar = () => {
  const [productName, setProductName] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams()

  function searchProduct(e) {
    if (e.key != "Enter") return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("name", productName);
    router.push(`?${params.toString()}`);
  }

  function clearSearch(){
    setProductName("")
    const params = new URLSearchParams();
    params.set("name", "");
    router.push(`?${params.toString()}`);


  }

  return (
    <div className="relative">
      <div className=" absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <CiSearch />
      </div>
      <input
        type="text"
        id="search"
        className="block w-full p-3 ps-9 rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
        placeholder="Search"
        onChange={(e) => setProductName(e.target.value)}
        onKeyDown={searchProduct}
        value={productName}
      />
      <div className="absolute top-1 right-3">
        {productName != "" && ( <button className="text-red-500 w-4 h-4 p-1" onClick={clearSearch}>
            <MdClose />
          </button>)}
      </div>
    </div>
  );
};

export default SearchBar;
