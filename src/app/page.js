// react server component
import React from "react";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import Newsletter from "./components/home/Newsletter";
import Category from "./components/home/Category";
import Testimonials from "./components/home/Testimonials";
import Image from "next/image";
import bg from "@/assets/parallax_bg.jpg";
import ProductSpotlight from "./components/home/Spotlight";
import NewArrivalsCarousel from "./components/home/NewArrivals";

const home = () => {
  return (
    <div>
      <main>
        <Hero />
        <Category />
        <Features />
        <ProductSpotlight />
        <NewArrivalsCarousel />
        <Newsletter />
        <Testimonials />
        {/* <Image
        height={1200}
        width={1400}
        src={bg}
        alt=""
        className="h-svh w-full object-cover fixed top-0 left-0 -z-50"
      /> */}
      </main>
    </div>
  );
};

export default home;
