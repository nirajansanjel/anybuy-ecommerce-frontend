import Link from "next/link";
import React from "react";
import config from "../../config";
import { Tangerine } from "next/font/google";

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["700"],
});

const Logo = () => {
  const { appName } = config;
  const appNameParts = appName.split(" ");
  return (
    <Link href="#">
      <div
        className={`companyLogo ${tangerine.className}  flex justify-end justify-center pl-16`}
      >
        <div>
          <span className="text-5xl font-bold text-primary">
            {appNameParts[0]}{" "}
          </span>
          <span className="text-4xl font-semibold text-secondary">
            {appNameParts[1]}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
