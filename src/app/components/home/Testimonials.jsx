import Image from "next/image";
import bhola from "@/assets/customers/bhola.jpg";
import ronish from "@/assets/customers/ronish.jpg";
import sparsha from "@/assets/customers/sparsha.jpg";
import twins from "@/assets/customers/twins.jpg";

import { FaQuoteLeft, FaStar } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <section className="bg-gray-100  pt-8 " id="testimonials">
      <div className="container mx-auto px-4">
        <div>
          <div className="text-center">
            <h3 className="text-3xl font-semibold">What our Customer Say?</h3>
            <p className="text-sm text-slate-700">
              Hear from Our satisfied Customers what they have for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gris-cols-4">
            <div className="reviews bg-white m-8 p-6 m-3 gap-8 rounded-lg">
              <FaQuoteLeft />
              <p className="text-lg">
                Fantastic experience from start to finish! The website was easy
                to navigate, and the checkout process was smooth. I found
                exactly what I was looking for, and it arrived right on time.
                Highly recommend!
              </p>
              <div className="flex gap-1 text-yellow-600 text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="personInfo flex p-2 ">
                <Image
                  src={bhola}
                  alt=""
                  className="h-10 w-10 object-cover rounded-full border border-slate-400"
                />
                <h3 className="ml-2 text-lg font-semibold">Bhola Sapkota</h3>
                <p className="pt-2 ml-2">Satisfied Customer</p>
              </div>
            </div>
            <div className="reviews bg-white m-8 p-6 m-3 gap-8 rounded-lg">
              <FaQuoteLeft />
              <p className="text-lg">
                Incredible selection, unbeatable prices, and super responsive
                support. I had a small issue with my order and it was resolved
                within hours. You can tell they genuinely care about their
                customers. Shopping here is always a pleasure.
              </p>
              <div className="flex gap-1 text-yellow-600 text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="personInfo flex p-2 ">
                <Image
                  src={ronish}
                  alt=""
                  className="h-10 w-10 object-cover rounded-full border border-slate-400"
                />
                <h3 className="ml-2 text-lg font-semibold">Ronish Ghimire</h3>
                <p className="pt-2 ml-2">Satisfied Customer</p>
              </div>
            </div>
            <div className="reviews bg-white m-8 p-6 m-3 gap-8 rounded-lg">
              <FaQuoteLeft />
              <p className="text-lg">
                Ordering was a breeze, and I appreciated the real-time tracking
                updates. Everything arrived right on time and exactly as
                described. Great pricing, great packaging, and amazing customer
                care. This is how eCommerce should be done!
              </p>
              <div className="flex gap-1 text-yellow-600 text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="personInfo flex p-2 ">
                <Image
                  src={twins}
                  alt=""
                  className="h-10 w-10 object-cover rounded-full border border-slate-400"
                />
                <h3 className="ml-2 text-lg font-semibold">Twin Sisters</h3>
                <p className="pt-2 ml-2">Satisfied Customer</p>
              </div>
            </div>
            <div className="reviews bg-white m-8 p-6 m-3 gap-8 rounded-lg">
              <FaQuoteLeft />
              <p className="text-lg">
                This company has become my go-to for online shopping. Fast
                shipping, high-quality products, and trustworthy service every
                single time. You can shop with confidence here—they’ve never let
                me down!
              </p>
              <div className="flex gap-1 text-yellow-600 text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="personInfo flex p-2 ">
                <Image
                  src={sparsha}
                  alt=""
                  className="h-10 w-10 object-cover rounded-full border border-slate-400"
                />
                <h3 className="ml-2 text-lg font-semibold">
                  Sparsha Lamichhane
                </h3>
                <p className="pt-2 ml-2">Satisfied Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
