import React from "react";

/**
 * Skeleton card that mirrors ProductCard's exact structure:
 *   image area → badge → title (2 lines) → star row → price + button
 *
 * Colors use the Aetheric design tokens from globals.css so this
 * automatically inherits any future palette changes.
 */
const LoadingCard = () => {
  return (
    <div className="rounded-lg shadow-md bg-surface-container-lowest relative m-1 overflow-hidden animate-pulse">
      {/* Image area — same height as md:h-48 on the real card */}
      <div className="w-full h-48 bg-surface-container" />

      {/* Discount badge placeholder */}
      <div className="absolute top-2 left-2 w-10 h-6 rounded-full bg-surface-container-high" />

      {/* Product name — two lines like the real h-10 title */}
      <div className="px-2 mt-4 space-y-2">
        <div className="h-4 w-3/4 rounded-full bg-surface-container-high" />
        <div className="h-4 w-1/2 rounded-full bg-surface-container" />
      </div>

      {/* Star rating row */}
      <div className="flex items-center gap-1 px-2 mt-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-3 h-3 rounded-full bg-surface-container-high" />
        ))}
        <div className="h-3 w-10 rounded-full bg-surface-container ml-1" />
      </div>

      {/* Price + add-to-cart row */}
      <div className="flex justify-between items-center px-2 py-4 mt-1">
        <div className="space-y-1">
          <div className="h-5 w-20 rounded-full bg-surface-container-high" />
          <div className="h-3 w-14 rounded-full bg-surface-container" />
        </div>
        <div className="h-8 w-8 rounded-full bg-primary/20 mr-2" />
      </div>
    </div>
  );
};

const ProductsLoader = () => {
  return (
    <div className="container mx-auto py-5 px-4">
      {/* Page header skeleton — mirrors "Popular Products" heading + search bar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-2 mb-2">
        <div className="h-8 w-52 rounded-full bg-surface-container animate-pulse" />
        <div className="flex gap-4 mt-4 md:mt-0">
          <div className="h-10 w-48 rounded-full bg-surface-container animate-pulse" />
          <div className="h-10 w-24 rounded-full bg-surface-container animate-pulse" />
        </div>
      </div>

      {/* Card grid — same grid-cols as the real products page */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {[...Array(8)].map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductsLoader;
