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
import Featured from "./components/home/Featured";

const home = () => {
  return (
     <main className="dark:bg-surface-container">
      <Hero />
      <Category />
      <Features />
      <ProductSpotlight />
      <Featured />
      <Newsletter />
      <Testimonials />
    </main>
  );
};

export default home;
