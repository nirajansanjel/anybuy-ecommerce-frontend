import { DASHBOARD_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from "@/constants/route";
import { logoutUser } from "@/redux/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const UserPopup = ({ user, setShowPopup }) => {
     const dispatch = useDispatch();
      const router = useRouter();
    
      function logout() {
        dispatch(logoutUser());
        router.push(LOGIN_ROUTE);
      }
  return (
    <div className="absolute -right-2 top-12">
      <div
        className="fixed bg-black/10 top-0 left-0 h-full w-full z-10"
        onClick={() => setShowPopup(false)}
      ></div>
      <div className="relative bg-slate-100 p-4 rounded-md shadow min-w-64 z-50 dark:text-black">
        <div className="flex flex-col p-1">
          <h3 className="font-semibold">{user.name}</h3>
          <h2 className="text-sm">{user.email} </h2>
        </div>
        <div className="flex flex-col">
          <Link
            href={DASHBOARD_ROUTE}
            className="bg-zinc-100 shadow  w-full p-1 mt-2 hover:bg-primary hover:text-white rounded"
          >
            Dashboard
          </Link>
          <Link
            href={PROFILE_ROUTE}
            className="bg-zinc-100 shadow  w-full p-1 mt-2 hover:bg-primary hover:text-white rounded"
          >
            Profile
          </Link>
        </div>
        <button className="text-sm w-full mt-4 text-red-600  border-red-300 border-2 rounded-3xl px-4 py-1 hover:bg-red-500 hover:text-white transition"
        onClick={logout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserPopup;
