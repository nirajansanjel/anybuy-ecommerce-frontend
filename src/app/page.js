// react server component
import React from "react";
import Hero from "./components/home/Hero";
import Featured from "./components/home/Featured";
import Features from "./components/home/Features";
import Newsletter from "./components/home/Newsletter";
import Category from "./components/home/Category";
import Contact from "./components/home/Contact";
import Testimonials from "./components/home/Testimonials";
import Image from "next/image";
import bg from "@/assets/parallax_bg.jpg"

const home = () => {
  return (
  <div>
  <main>
    {/*home Section */}
   <Hero/>
    {/* Why choose Any Buy */}
   <Features/>
    {/* featured sections */}
    <Featured/>
    {/* Join our Newsletter */}
    <Newsletter/>
    {/* Shop by Category */}
    <Category/>
    {/* contact section */}
    <Contact/>
    <Testimonials/>
     <Image
        height={1200}
        width={1400}
        src={bg}
        alt=""
        className="h-svh w-full object-cover fixed top-0 left-0 -z-50"
      />
    </main>
</div>
 

  );
};

export default home;
