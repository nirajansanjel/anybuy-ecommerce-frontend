import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_ROUTE } from "@/constants/route";
import spotlight from "@/assets/spotlight/spotlight.png"

const ProductSpotlight = ({
  eyebrow = "Product Spotlight",
  title = "This Week's Pick",
  description = "A closer look at the product our team can't stop recommending — built for everyday use, priced for everyday people.",
  image = spotlight,
  primaryHref = PRODUCTS_ROUTE,
  primaryLabel = "Shop Now",
  secondaryHref = "#",
  secondaryLabel = "Learn More",
}) => {
  return (
    <section className="px-6 lg:px-16 max-w-[1200px] mx-auto py-12">
      <div className="flex flex-col md:flex-row bg-secondary-fixed/30 rounded-3xl min-h-[500px] overflow-hidden">
        <div className="w-full md:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
          <span className="block mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-on-surface mb-6">
            {title}
          </h2>
          <p className="text-on-surface-variant mb-10 leading-relaxed max-w-md">
            {description}
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href={primaryHref}
              className="px-8 py-3 bg-primary text-on-primary rounded-full font-medium hover:scale-105 transition-transform"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[320px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
