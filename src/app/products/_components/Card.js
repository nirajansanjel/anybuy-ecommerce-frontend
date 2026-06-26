import Image from "next/image";
import Link from "next/link";
import ImagePlaceHolder from "@/assets/products/placeholder.png";
import AddToCart from "./AddToCart";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

/**
 * Renders a row of 5 stars based on a 0-5 rating.
 * Falls back to 5 filled stars if no rating is provided.
 */
const StarRating = ({ rating = 5, count }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i + 1 <= Math.floor(rating)) return "full";
    if (i < rating) return "half";
    return "empty";
  });

  return (
    <div className="flex items-center gap-0.5">
      {stars.map((type, i) =>
        type === "full" ? (
          <FaStar key={i} className="text-secondary dark:text-primary text-xs" />
        ) : type === "half" ? (
          <FaStarHalfAlt key={i} className="text-secondary dark:text-primary text-xs" />
        ) : (
          <FaRegStar key={i} className="text-secondary dark:text-primary text-xs" />
        )
      )}
      {count !== undefined && (
        <span className="ml-1.5 text-xs text-on-surface-variant">({count})</span>
      )}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const imageUrl = product.imageUrls?.[0] ?? ImagePlaceHolder;
  const originalPrice = product.discount
    ? Math.round(product.price / (1 - product.discount / 100))
    : null;

  return (
    <div className="group relative flex flex-col rounded-2xl bg-surface-container-lowest soft-shadow overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:glass-card dark:glow-hover">

      {/* ── Image ── */}
      <Link href={`/products/${product._id}`} className="relative block aspect-[4/5] w-full overflow-hidden bg-surface-container-low">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay — makes text overlay readable in dark mode */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Discount badge — only renders if product has a discount field */}
        {product.discount && (
          <span className="absolute top-3 left-3 bg-error text-on-error text-xs font-semibold px-2.5 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}
      </Link>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-4 gap-2">

        {/* Category pill */}
        {product.category && (
          <span className="text-xs font-medium uppercase tracking-widest text-on-surface-variant">
            {product.category}
          </span>
        )}

        {/* Product name */}
        <Link
          href={`/products/${product._id}`}
          className="font-display text-base font-semibold text-on-surface line-clamp-2 leading-snug hover:text-primary transition-colors"
        >
          {product.name}
        </Link>

        {/* Stars */}
        <StarRating rating={product.rating} count={product.reviewCount} />

        {/* Price row + Add to cart */}
        <div className="flex items-end justify-between mt-auto pt-3 border-t border-outline-variant/40">
          <div className="flex flex-col">
            <span className="text-base font-semibold text-on-surface">
              Rs. {product.price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-xs text-on-surface-variant line-through">
                Rs. {originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
