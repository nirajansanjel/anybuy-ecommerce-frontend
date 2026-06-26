"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cart/cartSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FiPackage, FiRefreshCw, FiShield } from "react-icons/fi";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { PRODUCTS_CART_ROUTE } from "@/constants/route";

/* ── Star rating row ─────────────────────────────────────────────── */
const StarRating = ({ rating = 5, count }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i + 1 <= Math.floor(rating)) return "full";
    if (i < rating) return "half";
    return "empty";
  });
  return (
    <div className="flex items-center gap-1.5">
      {stars.map((type, i) =>
        type === "full" ? (
          <FaStar key={i} className="text-secondary dark:text-primary text-base" />
        ) : type === "half" ? (
          <FaStarHalfAlt key={i} className="text-secondary dark:text-primary text-base" />
        ) : (
          <FaRegStar key={i} className="text-secondary dark:text-primary text-base" />
        )
      )}
      {count !== undefined && (
        <span className="ml-1 text-sm text-on-surface-variant">
          {rating} · {count} reviews
        </span>
      )}
    </div>
  );
};

/* ── Trust perks strip ────────────────────────────────────────────── */
const perks = [
  { icon: FiPackage,   label: "Free Shipping" },
  { icon: FiRefreshCw, label: "30-Day Returns" },
  { icon: FiShield,    label: "2-Year Warranty" },
];

/* ── Main component ───────────────────────────────────────────────── */
const Description = ({ product }) => {
  const [activeImage, setActiveImage]   = useState(0);
  const [wishlisted,  setWishlisted]    = useState(false);
  const thumbnails = product?.imageUrls ?? [];
  const dispatch   = useDispatch();
  const router     = useRouter();
  const { theme }  = useSelector((state) => state.userPreferences);

  // Derived price data — only show discount UI if field exists on product
  const hasDiscount    = Boolean(product?.discount);
  const originalPrice  = hasDiscount
    ? Math.round(product.price / (1 - product.discount / 100))
    : null;

  function handleAddToCart() {
    const { description, ...productData } = product;
    dispatch(addToCart(productData));
    toast.success(`${product.name} added to cart.`, { autoClose: 750 });
  }

  function handleBuyNow() {
    const { description, ...productData } = product;
    dispatch(addToCart(productData));
    router.push(PRODUCTS_CART_ROUTE);
  }

  return (
    <section className="bg-surface min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 py-12 lg:py-20">

        {/* ── Breadcrumb ── */}
        <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-10">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          {product?.category && (
            <>
              <span>/</span>
              <span className="text-on-surface">{product.category}</span>
            </>
          )}
        </nav>

        {/* ── Main 2-col grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* ── LEFT: Image gallery ── */}
          <div className="flex gap-4">

            {/* Thumbnail strip */}
            {thumbnails.length > 1 && (
              <div className="flex flex-col gap-3 shrink-0">
                {thumbnails.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      activeImage === i
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-outline-variant hover:border-primary/50"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${product.name} view ${i + 1}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Main image */}
            <div className="relative flex-1 aspect-square rounded-2xl overflow-hidden bg-surface-container-low soft-shadow dark:glass-card">
              {thumbnails.length > 0 ? (
                <Image
                  src={thumbnails[activeImage]}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover transition-opacity duration-300"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
                  No image
                </div>
              )}

              {/* Discount badge */}
              {hasDiscount && (
                <span className="absolute top-4 left-4 z-10 bg-error text-on-error text-xs font-semibold px-3 py-1 rounded-full">
                  -{product.discount}% OFF
                </span>
              )}

              {/* Wishlist button */}
              <button
                onClick={() => setWishlisted(!wishlisted)}
                aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface-container-lowest/80 dark:bg-surface-container/80 backdrop-blur-sm flex items-center justify-center shadow-md transition-transform hover:scale-110"
              >
                {wishlisted ? (
                  <FaHeart className="text-error text-lg" />
                ) : (
                  <FaRegHeart className="text-on-surface-variant text-lg" />
                )}
              </button>
            </div>
          </div>

          {/* ── RIGHT: Product details ── */}
          <div className="flex flex-col gap-6">

            {/* Category + Title */}
            <div>
              {product?.category && (
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                  {product.category}
                </span>
              )}
              <h1 className="font-display text-4xl md:text-5xl font-bold text-on-surface leading-tight">
                {product?.name}
              </h1>
            </div>

            {/* Rating */}
            <StarRating
              rating={product?.rating}
              count={product?.reviewCount}
            />

            {/* Price */}
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-on-surface">
                Rs. {product?.price?.toLocaleString()}
              </span>
              {originalPrice && (
                <>
                  <span className="text-lg text-on-surface-variant line-through">
                    Rs. {originalPrice.toLocaleString()}
                  </span>
                  <span className="bg-error/10 text-error text-xs font-semibold px-2.5 py-1 rounded-full">
                    {product.discount}% OFF
                  </span>
                </>
              )}
            </div>

            <div className="h-px bg-outline-variant/40" />

            {/* Brand */}
            {product?.brand && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-on-surface-variant uppercase tracking-widest">
                  Brand
                </span>
                <span className="bg-primary-fixed text-on-primary-fixed text-sm font-semibold px-4 py-1.5 rounded-full">
                  {product.brand}
                </span>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-2 px-8 py-3.5 bg-primary text-on-primary rounded-full font-medium hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex items-center gap-2 px-8 py-3.5 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-all"
              >
                Buy Now
              </button>
            </div>

            {/* Trust perks */}
            <div className="grid grid-cols-3 gap-3 mt-2">
              {perks.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-xl bg-surface-container-low dark:glass-card p-4 text-center border border-outline-variant/40"
                >
                  <Icon className="text-primary text-xl" />
                  <span className="text-xs font-medium text-on-surface-variant">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Description tab ── */}
        <div className="mt-20">
          <div className="border-b border-outline-variant mb-10">
            <span className="inline-block font-display text-lg font-semibold text-primary pb-3 border-b-2 border-primary -mb-px">
              Description
            </span>
          </div>

          {/* MarkdownPreview respects the Redux theme toggle via data-color-mode */}
          <div className="prose max-w-none">
            <MarkdownPreview
              source={product?.description}
              style={{ background: "transparent" }}
              wrapperElement={{ "data-color-mode": theme }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Description;