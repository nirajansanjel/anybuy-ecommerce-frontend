import React from "react";

const LoadingCard = () => {
  return (
    <div className="rounded-2xl bg-surface-container-lowest soft-shadow overflow-hidden animate-pulse">
      {/* Image area — matches aspect-[4/5] from the real card */}
      <div className="aspect-[4/5] w-full bg-surface-container" />

      <div className="p-4 flex flex-col gap-3">
        {/* Category pill */}
        <div className="h-3 w-16 rounded-full bg-surface-container-high" />

        {/* Product name — two lines */}
        <div className="space-y-2">
          <div className="h-4 w-4/5 rounded-full bg-surface-container-high" />
          <div className="h-4 w-3/5 rounded-full bg-surface-container" />
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-sm bg-surface-container-high" />
          ))}
          <div className="h-3 w-8 rounded-full bg-surface-container ml-1" />
        </div>

        {/* Price row + cart button */}
        <div className="flex items-end justify-between pt-3 border-t border-outline-variant/40">
          <div className="space-y-1.5">
            <div className="h-4 w-24 rounded-full bg-surface-container-high" />
            <div className="h-3 w-16 rounded-full bg-surface-container" />
          </div>
          <div className="w-9 h-9 rounded-full bg-primary/20" />
        </div>
      </div>
    </div>
  );
};

const ProductsLoader = () => {
  return (
    <div className="container mx-auto py-6 px-4">
      {/* Page header skeleton */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-2 mb-4">
        <div className="h-9 w-52 rounded-full bg-surface-container animate-pulse" />
        <div className="flex gap-4 mt-4 md:mt-0">
          <div className="h-10 w-48 rounded-full bg-surface-container animate-pulse" />
          <div className="h-10 w-24 rounded-full bg-surface-container animate-pulse" />
        </div>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {[...Array(8)].map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductsLoader;
