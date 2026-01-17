"use client";
import { LOGIN_ROUTE } from "@/constants/route";
import { logoutUser } from "@/redux/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

// const router = useRouter()
const AuthMenu = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  function logout() {
    dispatch(logoutUser());
    router.push(LOGIN_ROUTE);
  }

  if (user)
    return (
      <div className="flex justify-start items-center">
        <button
          onClick={logout}
          className="text-xs  bg-blue-600 p-2 rounded-2xl text-white mr-4 hover:bg-red-500  transition"
        >
          LOGOUT
        </button>
      </div>
    );

  return (
    <div className="flex justify-start items-center">
      <Link
        className="text-xs  bg-blue-600 p-2 rounded-2xl text-white mr-4 hover:bg-red-500  transition"
        href={LOGIN_ROUTE}
      >
        LOGIN
      </Link>
    </div>
  );
};

export default AuthMenu;
