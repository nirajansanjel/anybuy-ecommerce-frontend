import React from "react";
import Image from "next/image";
import ImagePlaceHolder from "@/assets/products/placeholder.webp";

 const LoadingCard = () => {
  return (
    <div className="border border-gray-100 shadow-md  m-4 rounded-xl animate-pulse duration-50 ease-in-out">
      <Image
        src={ImagePlaceHolder}
        className="rounded-t-lg  object-cover hover:scale-105 transition-all duration-300"
        alt=""
        height={300}
        width={500}
      />
      <div className="bg-gray-400  h-16 mt-6 mx-4">
      </div>
      <div className="flex">
        <div className="bg-yellow-300 h-6 mt-6 mx-2 w-1/2"></div>
        <div className="bg-slate-300 h-6 mt-6 mx-2 w-1/3"></div>
      </div>
       <div className="flex"> 
        <div className="bg-gray-400  h-6 mt-6 mx-4 w-1/2 my-3"></div>
        <div className="bg-zinc-400  h-6 mt-6 mx-4 w-1/4 my-3"></div>
      </div>
    
    </div>
  );
};

const ProductsLoader = () => {
  return (
    <div className="container mx-auto py-5 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    </div>
  );
};

export default ProductsLoader;
