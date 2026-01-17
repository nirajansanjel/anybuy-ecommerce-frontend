"use client";
import { useSelector } from "react-redux";

import { useRouter } from "next/navigation";
import { HOME_ROUTE, LOGIN_ROUTE } from "@/constants/route";
import { useEffect } from "react";

function AuthLayout({ children }) {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (!user) return router.push(LOGIN_ROUTE);
    if (user) return router.push(HOME_ROUTE);
  }, [user, router]);

  return (
    <section className="flex py-16 md:items-center justify-center bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1  md:grid-cols-2  bg-white rounded-2xl">
          <div className="hidden  rounded-l-2xl md:flex  bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 text-white  flex-col justify-center  item-center">
            <div className="text-4xl font-bold m-4 text-center">
              <h1>Welcome!</h1>
            </div>
            <div className="text-zinc-200 p-4 text-lg">
              <p>
                Great News! Your favorite is back in stock. Dont miss out, order
                now before it sells out again.
              </p>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
export default AuthLayout;
