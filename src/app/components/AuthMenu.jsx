"use client";
import { LOGIN_ROUTE } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import UserPopup from "./UserPopup";

const AuthMenu = () => {
  const { user } = useSelector((state) => state.auth);
  const [showPopup, setShowPopup] = useState(false);

  // Ref on the wrapper div — used to detect clicks outside the popup
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // If the click is outside the wrapper, close the popup
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Always clean up the listener when popup closes or component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  if (user)
    return (
      <div ref={wrapperRef} className="relative flex items-center">
        <button
          // FIX: was setShowPopup(true) — always opened, never closed via button
          onClick={() => setShowPopup((prev) => !prev)}
          aria-label="Toggle user menu"
          aria-expanded={showPopup}
          className="flex items-center justify-center"
        >
          {user.profileImage ? (
            <Image
              src={user.profileImage}
              alt={user.name ?? ""}
              height={64}
              width={64}
              className="h-9 w-9 rounded-full object-cover ring-2 ring-primary/30"
            />
          ) : (
            <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <FaUser className="text-sm" />
            </div>
          )}
        </button>

        {showPopup && (
          <UserPopup user={user} setShowPopup={setShowPopup} />
        )}
      </div>
    );

  return (
    <Link
      href={LOGIN_ROUTE}
      className="text-sm font-medium px-5 py-2 rounded-full bg-primary text-on-primary hover:opacity-90 transition-opacity"
    >
      Login
    </Link>
  );
};

export default AuthMenu;
