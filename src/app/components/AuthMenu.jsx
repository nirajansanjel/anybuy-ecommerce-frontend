"use client";
import { LOGIN_ROUTE } from "@/constants/route";
import { logoutUser } from "@/redux/auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import UserPopup from "./UserPopup";
import { FaRegUserCircle } from "react-icons/fa";

// const router = useRouter()
const AuthMenu = () => {
  const { user } = useSelector((state) => state.auth);

  const [showPopup,setShowPopup] = useState(false)

  if (user)
    return (
      <div className="flex justify-start items-center m-2 relative ">
       <button onClick={()=>setShowPopup(true)}>
         {user.profileImage ? (
          <Image
            src={user.profileImage}
            alt={""}
            height={64}
            width={64}
            className="h-8 w-8 rounded-full object-cover"
          />
        ) : (
          <FaUser className="h-8 w-8 rounded-full p-1 bg-gray-200 text-gray-700" />
        )}
       </button>
       {showPopup && <UserPopup user={user} setShowPopup={setShowPopup}/>}
      </div>
    );

  return (
    <div className="flex justify-start items-center">
      <Link
        className="text-2xl p-2 transition ml-6"
        href={LOGIN_ROUTE}
      >
        <FaRegUserCircle />
      </Link>
    </div>
  );
};

export default AuthMenu;
