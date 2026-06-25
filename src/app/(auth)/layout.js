"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { HOME_ROUTE } from "@/constants/route";
import { useEffect } from "react";
import Link from "next/link";
import config from "@/config";

const trustPoints = [
  { icon: "", text: "Free delivery on all orders" },
  { icon: "", text: "30-day hassle-free returns" },
  { icon: "", text: "Secure, encrypted checkout" },
];

function AuthLayout({ children }) {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (user) return router.push(HOME_ROUTE);
  }, [user, router]);

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-surface py-12 px-4">
      <div className="w-full max-w-5xl rounded-[32px] overflow-hidden shadow-xl flex flex-col md:flex-row">

        {/* ── Left panel: brand editorial ── */}
        <div className="relative hidden md:flex md:w-5/12 bg-primary flex-col justify-between p-12 overflow-hidden">
          {/* Organic blob decoration */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-on-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />

          {/* Logo */}
          <Link href="/" className="relative z-10">
            <span className="font-display text-3xl font-bold text-on-primary">
              {config.appName}
            </span>
          </Link>

          {/* Headline */}
          <div className="relative z-10">
            <h2 className="font-display text-4xl font-bold text-on-primary leading-tight mb-6">
              Shop smarter,{" "}
              <span className="italic font-normal">live better.</span>
            </h2>
            <p className="text-on-primary/70 mb-10 leading-relaxed">
              Join thousands of happy customers who shop quality products at
              honest prices — delivered right to their door.
            </p>
            <ul className="space-y-4">
              {trustPoints.map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-on-primary/90">
                  <span className="text-lg">{icon}</span>
                  <span className="text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer quote */}
          <p className="relative z-10 text-xs text-on-primary/40 tracking-wide">
            © {new Date().getFullYear()} {config.appName}
          </p>
        </div>

        {/* ── Right panel: form ── */}
        <div className="flex-1 bg-surface-container-lowest flex items-center justify-center p-8 md:p-12">
          {children}
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;
