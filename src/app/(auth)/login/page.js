"use client";
import { EMAIL_REGEX } from "@/constants/regex";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FORGOT_PASSWORD_ROUTE } from "@/constants/route";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/auth/authActions";
import Loader from "@/app/components/Loader";

// Shared input class — Aetheric design tokens
const inputClass =
  "w-full bg-surface-container-low border border-outline-variant text-on-surface rounded-xl px-4 py-3 text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";

const labelClass = "block mb-2 text-sm font-medium text-on-surface";

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);

  function submitForm(data) {
    dispatch(loginUser(data));
  }

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="w-full max-w-sm">
      {/* Heading */}
      <h1 className="font-display text-3xl font-bold text-on-surface mb-2">
        Welcome back.
      </h1>
      <p className="text-sm text-on-surface-variant mb-8">
        Sign in to continue to your account.
      </p>

      <form className="space-y-5" onSubmit={handleSubmit(submitForm)}>
        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="name@gmail.com"
            className={inputClass}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid email address.",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-error">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className={labelClass}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className={inputClass}
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters.",
              },
            })}
          />
          {errors.password && (
            <p className="mt-1 text-xs text-error">{errors.password.message}</p>
          )}
        </div>

        {/* Remember me + Forgot password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 rounded border-outline-variant accent-primary"
            />
            <span className="text-sm text-on-surface-variant">Remember me</span>
          </label>
          <Link
            href={FORGOT_PASSWORD_ROUTE}
            className="text-sm font-medium text-primary hover:opacity-75 transition-opacity"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="relative w-full flex items-center justify-center bg-primary text-on-primary rounded-full py-3 font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {loading ? <Loader className="w-5 h-5 fill-on-primary" /> : "Sign in"}
        </button>

        <p className="text-sm text-center text-on-surface-variant">
          Don&apos;t have an account?{" "}
          <Link
            href="register"
            className="font-medium text-primary hover:opacity-75 transition-opacity"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
