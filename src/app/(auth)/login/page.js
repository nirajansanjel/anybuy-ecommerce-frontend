"use client";
import { login } from "@/api/auth";
import { EMAIL_REGEX } from "@/constants/regex";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { HOME_ROUTE } from "@/constants/route";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/auth/authActions";
import Loader from "@/app/components/Loader";
import Button from "@/app/components/Button";

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { user, error, loading } = useSelector((state) => state.auth);
  function submitForm(data) {
    dispatch(loginUser(data));
  }
  useEffect(() => {
    if (error) {
      toast.error(error);
      return;
    }
  }, [error]);

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-slate-700">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign in to your account
      </h1>
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(submitForm)}
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2  text-start font-bold text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@gmail.com"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid Email address.",
              },
            })}
          />
          <p className="text-red-500 text-sm">{errors.email?.message} </p>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-start font-bold text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 8,
                message:
                  "Password must be greater than or equal to 8 characters.",
              },
            })}
          />
          <p className="text-red-500 text-sm">{errors.password?.message} </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-primary hover:underline dark:text-primary"
          >
            Forgot password?
          </a>
        </div>

        <Button loading={loading} label="Sign in" />
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{" "}
          <Link
            href="register"
            className="font-medium text-primary hover:underline dark:text-primary"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
