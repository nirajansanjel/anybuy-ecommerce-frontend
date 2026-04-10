import Image from "next/image";
import home from "@/assets/homepageImage.jpg"
import Link from "next/link";
import { PRODUCTS_ROUTE } from "@/constants/route";
const Hero = () => {
  return (
    <section
      className="offerpage  h-[90svh] bg-gradient-to-r from-primary  to-secondary md:flex md:justify-center md:items-center "
      id="home"
    >
      <div className="container mx-auto px-4  ">
        <div className="flex flex-col md:flex-row items-center md:justify-evenly">
          <div className="flex md:flex flex-col mt-8">
            <div className="offerPage md:w-1/2 md:flex md:flex-col">
              <h2 className="text-4xl font-semibold md:text-5xl  lg:text-6xl">
                New Amazing Products
              </h2>
              <p className="text-xl  md:flex md:flex-row  md:text-slate-700 md:w-80 ">
                Shop today and get upto 40% off
              </p>
            </div>
            <div className="offerButton   flex flex-col md:justify-end items-center">
              <Link
                href={PRODUCTS_ROUTE}
                className="bg-white text-black p-2  text-lg my-2 hover:bg-secondary  min-w-full hover:text-white hover:transition  rounded text-center"
              >
                Shop Now
              </Link>
              <Link
                href="#categories"
                className="bg-primary text-white text-lg p-2  my-2  min-w-full hover:bg-secondary rounded text-center"
              >
                View Categories
              </Link>
            </div>
          </div>
          <div className="flex justify-center text-center md:ml-20">
            <Image
              src={home}
              alt=""
              className="mt-8 md:mt-0 rounded-xl md:float-right w-3/4 h-auto md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
