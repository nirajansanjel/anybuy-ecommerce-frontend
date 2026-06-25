"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/assets/products/placeholder.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { PRODUCTS_ROUTE } from "@/constants/route";

// Client Component: receives products as a prop from the Server Component
// (Featured.jsx) and owns the interactive scrolling/button behavior.
const NewArrivalsCarousel = ({ products = [] }) => {
  const scrollRef = useRef(null);

  const scrollBy = (distance) => {
    scrollRef.current?.scrollBy({ left: distance, behavior: "smooth" });
  };

  // if (!products.length) return null;

  return (
    <section className="py-24" id="featuredSection">
      <div className="px-6 lg:px-16 max-w-[1200px] mx-auto mb-10 flex justify-between items-end">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-on-surface">
          New Arrivals
        </h2>
        <div className="flex items-center gap-4">
          <Link
            href={PRODUCTS_ROUTE}
            className="hidden sm:inline-block text-sm font-medium text-primary hover:opacity-80 transition-opacity"
          >
            View all
          </Link>
          <div className="hidden md:flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-400)}
              aria-label="Scroll left"
              className="p-2 border border-outline rounded-full hover:bg-primary hover:text-on-primary transition-colors"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(400)}
              aria-label="Scroll right"
              className="p-2 border border-outline rounded-full hover:bg-primary hover:text-on-primary transition-colors"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-6 lg:px-16 pb-4 snap-x scrollbar-hide"
      >
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/products/${product._id}`}
            className="min-w-[260px] md:min-w-[320px] snap-start group"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 soft-shadow relative bg-surface-container-low">
              <Image
                src={product.imageUrls?.[0] || placeholder}
                alt={product.name}
                fill
                sizes="(min-width: 768px) 320px, 260px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="font-display text-lg text-on-surface">{product.name}</h4>
            <span className="text-on-surface-variant">Rs. {product.price}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewArrivalsCarousel;
