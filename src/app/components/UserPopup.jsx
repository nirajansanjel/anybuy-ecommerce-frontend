"use client";
import { DASHBOARD_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from "@/constants/route";
import { logoutUser } from "@/redux/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const UserPopup = ({ user, setShowPopup }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  function logout() {
    dispatch(logoutUser());
    setShowPopup(false);
    router.push(LOGIN_ROUTE); // FIX: LOGIN_ROUTE was used but never imported — caused ReferenceError on logout
  }

  return (
    // FIX: removed the fixed full-screen overlay div — that approach
    // intercepted page events unpredictably. Click-outside is now
    // handled cleanly by the useEffect in AuthMenu instead.
    <div className="absolute right-0 top-12 z-50 w-64 rounded-2xl bg-surface-container-lowest dark:bg-surface-container border border-outline-variant/40 shadow-xl overflow-hidden">

      {/* User info header */}
      <div className="px-4 py-4 border-b border-outline-variant/40">
        <p className="font-display font-semibold text-on-surface truncate">
          {user.name}
        </p>
        <p className="text-sm text-on-surface-variant truncate">{user.email}</p>
      </div>

      {/* Navigation links */}
      <div className="flex flex-col p-2">
        <Link
          href={DASHBOARD_ROUTE}
          onClick={() => setShowPopup(false)}
          className="px-3 py-2 rounded-xl text-sm text-on-surface hover:bg-primary/10 hover:text-primary transition-colors"
        >
          Dashboard
        </Link>
        <Link
          href={PROFILE_ROUTE}
          onClick={() => setShowPopup(false)}
          className="px-3 py-2 rounded-xl text-sm text-on-surface hover:bg-primary/10 hover:text-primary transition-colors"
        >
          Profile
        </Link>
      </div>

      {/* Logout */}
      <div className="p-2 border-t border-outline-variant/40">
        <button
          onClick={logout}
          className="w-full text-sm px-3 py-2 rounded-xl text-error hover:bg-error/10 transition-colors text-left"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserPopup;
