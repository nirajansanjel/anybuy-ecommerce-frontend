"use client";
import { useState } from "react";
import AddToCart from "./AddToCart";
import Image from "next/image";
import { FaImage, FaUser } from "react-icons/fa";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useSelector } from "react-redux";

const Description = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const thumbnails = product?.imageUrls;

  const {theme} = useSelector((state)=> state.userPreferences)

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background: "#f7f8fa",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* Inject Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');
        :root {
          --primary: #53ace3;
          --secondary: #e2e444;
        }
        .btn-primary {
          background: var(--primary);
          color: #fff;
          transition: all 0.2s ease;
        }
        .btn-primary:hover { background: #3a96d0; transform: translateY(-1px); }
        .btn-secondary {
          background: var(--secondary);
          color: #1a1a1a;
          transition: all 0.2s ease;
        }
        .btn-secondary:hover { background: #cfd030; transform: translateY(-1px); }
        .tag-pill {
          background: var(--secondary);
          color: #1a1a1a;
        }
        .accent-bar {
          background: linear-gradient(90deg, var(--primary), var(--secondary));
        }
        .thumb-active { border-color: var(--primary); }
        .size-active {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
        }
        .tab-active {
          border-bottom: 3px solid var(--primary);
          color: var(--primary);
        }
        .star-filled { color: var(--secondary); }
        .badge { background: var(--secondary); }
        .wishlist-active { color: #e84a5f; }
      `}</style>

      {/* Navbar strip */}
      <div className="accent-bar h-1 w-full" />

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT — Images */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {thumbnails.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                  activeImage === i
                    ? "thumb-active shadow-md"
                    : "border-gray-200"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  height={100}
                  width={100}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="relative flex-1 rounded-2xl overflow-hidden bg-white shadow-xl">
            {/* Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="badge text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                New Drop
              </span>
            </div>
            <div className="">
              {thumbnails.length > 0 ? (
                <Image
                  height={600}
                  width={800}
                  className="h-full w-auto object-cover"
                  src={thumbnails[activeImage]}
                  alt="thumbnail"
                />
              ) : (
                <FaImage className="text-gray-500 h-64 w-auto" />
              )}
            </div>
            {/* Wishlist */}
            <button
              onClick={() => setWishlist(!wishlist)}
              className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md text-xl transition-transform hover:scale-110"
            >
              <span className={wishlist ? "wishlist-active" : "text-gray-300"}>
                ♥
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT — Details */}
        <div className="flex flex-col gap-5">
          {/* Category + Title */}
          <div>
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "var(--primary)" }}
            >
              {product.category}
            </span>
            <h1
              className="text-4xl font-extrabold text-gray-900 mt-1 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {product.name}
            </h1>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex text-lg">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="star-filled">
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500 font-medium">
              4.9 · 128 reviews
            </span>
            <span className="tag-pill text-xs font-bold px-2 py-0.5 rounded-full">
              Top Rated
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-xl font-extrabold">Rs. {product.price}</span>
            <span className="text-lg text-gray-400 line-through">
              {product.price * 1.3}
            </span>
            <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">
              30% OFF
            </span>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100" />

          {/* Color selector */}
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-gray-700 uppercase tracking-widest">
              Brand:
            </p>
            <div className="text-md p-1 rounded btn-primary font-semibold text-">
              {product.brand}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Add to Cart */}
            <div className="text-center flex justify-center items-center py-4 px-5 rounded-xl shadow-md text-2xl w-20 btn-primary">
              <AddToCart product={product} />
            </div>

            {/* Buy Now */}
            <button className="btn-secondary font-bold text-sm tracking-widest uppercase py-4 px-5 rounded-xl shadow-md">
              Buy Now
            </button>
          </div>

          {/* Perks */}
          <div className="grid grid-cols-3 gap-3 mt-1">
            {[
              { icon: "🚀", label: "Free Shipping" },
              { icon: "↩️", label: "30-Day Returns" },
              { icon: "🛡️", label: "2-Year Warranty" },
            ].map((p) => (
              <div
                key={p.label}
                className="flex flex-col items-center gap-1 bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100"
              >
                <span className="text-xl">{p.icon}</span>
                <span className="text-xs font-semibold text-gray-600">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="max-w-7xl mx-auto px-6 mt-4">
        {/* Tab Headers */}
        <div className="flex gap-8 border-b border-gray-200">
          <div className="text-gray-400 hover:text-gray-600">Description </div>
        </div>
        <div>
             <MarkdownPreview
      source={product.description}
      style={{
        background: "#0000",
      }}
      wrapperElement={{
        "data-color-mode": theme,
      }}
    />
        </div>
      </div>

      {/* Footer strip */}
      <div className="accent-bar h-1 w-full mt-10" />
    </div>
  );
};

export default Description;
