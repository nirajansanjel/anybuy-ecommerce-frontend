import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BsBank2 } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import config from "@/config";
import khaltiLogo from "@/assets/paymentModes/khaltilogo.png";
import { PRODUCTS_ROUTE } from "@/constants/route";

const shopLinks = [
  { label: "Laptop & PC", query: "Laptop" },
  { label: "Electronics", query: "Electronics" },
  { label: "SmartPhone", query: "Phone" },
  { label: "Miscellaneous", query: "" },
];

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-outline-variant">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-6 lg:px-16 py-20 max-w-[1200px] mx-auto">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="font-display text-2xl font-bold text-primary block mb-6">
            {config.appName}
          </Link>
          <p className="text-on-surface-variant mb-8 max-w-xs">
          Curating a world where technology and soul coexist in perfect harmony.
          </p>
          <div className="flex gap-4 text-on-surface-variant text-lg">
            <FaFacebook className="hover:text-primary transition-colors cursor-pointer" />
            <FaInstagram className="hover:text-primary transition-colors cursor-pointer" />
            <FaYoutube className="hover:text-primary transition-colors cursor-pointer" />
            <FaLinkedin className="hover:text-primary transition-colors cursor-pointer" />
          </div>
        </div>

        <div>
          <h5 className="text-secondary font-semibold mb-6 text-lg">Shop</h5>
          <ul className="space-y-4">
            {shopLinks.map(({ label, query }) => (
              <li key={label}>
                <Link
                  href={query ? `${PRODUCTS_ROUTE}?category=${query}` : PRODUCTS_ROUTE}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-secondary font-semibold mb-6 text-lg">We Accept</h5>
          <div className="flex items-center gap-4">
            <Image
              src={khaltiLogo}
              height={32}
              width={64}
              alt="Khalti"
              className="h-8 w-auto rounded-lg bg-white p-1 soft-shadow dark:bg-surface-container-high"
            />
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white dark:bg-surface-container-high  text-primary soft-shadow">
              <BsBank2 />
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-secondary font-semibold mb-6 text-lg">Contact Us</h5>
          <ul className="space-y-3 text-on-surface-variant">
            <li className="flex items-center gap-2">
              <MdEmail /> anydesk@info.com
            </li>
            <li className="flex items-center gap-2">
              <CiLocationOn /> 3rd street, Hetauda, Makawanpur
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +977-9845677890
            </li>
          </ul>
        </div>
      </div>

      <div className="px-6 lg:px-16 py-8 border-t border-outline-variant/60 text-center">
        <p className="text-on-surface-variant text-xs tracking-wide">
          © {new Date().getFullYear()} {config.appName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
