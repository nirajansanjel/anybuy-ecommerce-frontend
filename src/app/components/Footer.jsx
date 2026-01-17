import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";

import Image from "next/image";
import esewa from "@/assets/paymentModes/esewa.png";
import khalti from "@/assets/paymentModes/khalti.webp";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto p-4">
        <div className="aboutUs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center m-4">
          <div className="comapnyInfo mb-8">
            <h3 className="text-3xl font-bold shadow-lg"> Any Buy</h3>
            <p className="text-lg">
              {" "}
              AnyBuy is an online store offering a curated selection of quality
              products at great prices. We make shopping simple, secure, and
              fast—delivering what you need, right to your door.
            </p>
            <div className="flex gap-2 justify-center items-center">
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
              <FaLinkedin />
            </div>
          </div>
          <div className="shop h-64">
            <h2 className="text-3xl font-bold">Shop</h2>
            <div className="shopList ">
              <ul className="list-disc flex justify-center flex-col items-center text-xl font-semibold p-4">
                <li className="p-2">Groceries</li>
                <li className="p-2">Electronics</li>
                <li className="p-2">Fashion</li>
                <li className="p-2">Dresses</li>
              </ul>
            </div>
          </div>
          <div className="paymentMethods  flex flex-col  items-center ">
            <h2 className="text-3xl font-semibold pb-4">We Accept</h2>
            <div className="flex flex-row  mb-4">
              <div className="esewa mb-4  mr-4">
                <Image
                  src={esewa}
                  className="h-10 w-auto  rounded-2xl bg-white "
                  height={50}
                  width={100}
                  alt="esewa"
                />
              </div>
              <div className="khalti mb-4 mr-4">
                <Image src={khalti} className="h-10 w-auto  bg-white rounded-2xl " height={50}
                  width={100}
                  alt="khalti" />
              </div>
              <div className="bankTransfer flex text-3xl w-auto   rounded-2xl">
                <BsBank2 />

              </div>
            </div>
          </div>
          <div className="contactUs">
            <h3 className="text-3xl font-semibold mb-3">Contact Us</h3>
            <div className="flex flex-col justify-center items-center p-1">
              <MdEmail />

              <h2>anydesk@info.com</h2>
              <CiLocationOn />
              <h2>
                3<sup>rd</sup> street Hetauda,Makawanpur
              </h2>
              <FaPhoneAlt />
              <h2>+977-9845677890</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
