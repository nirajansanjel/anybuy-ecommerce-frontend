import Loader from "@/app/components/Loader";
import React from "react";

const loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Loader className="h-16 w-16" />
    </div>
  );
};

export default loading;
