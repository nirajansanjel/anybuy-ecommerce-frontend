import Image from "next/image";
import Link from "next/link";
import config from "@/config";
import { PRODUCTS_ROUTE } from "@/constants/route";
import heroImage from "@/assets/hero/heroImage.png";

const Hero = () => {
  return (
    <section
      className="relative px-6 lg:px-16 max-w-[1200px] mx-auto pt-16 pb-24 lg:pt-24 lg:pb-32 dark:bg-surface-container"
      id="home"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="w-full lg:w-1/2">
          <span className="block mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            The New Standard
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[72px] font-bold leading-[1.1] tracking-tight text-on-surface mb-8">
           <span className="block">Precision</span>
           <span className="block">crafted for</span>
           <span className="block italic text-primary">the intentional</span>
            <span className="italic text-primary">home.</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md mb-10 leading-relaxed">
            {config.appName} curates quality products at honest prices — simple,
            secure shopping delivered right to your door.
          </p>
          <Link
            href={PRODUCTS_ROUTE}
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-on-primary rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            Explore Collection
          </Link>
        </div>

        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          {/* Organic blob backdrop from the Stitch design */}
          <div className="absolute w-[120%] h-[120%] bg-primary-container organic-blob -translate-y-10" />
          <div className="relative w-full aspect-square rounded-[28px] overflow-hidden soft-shadow bg-white">
            <Image
              src={heroImage}
              alt="Featured product"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
