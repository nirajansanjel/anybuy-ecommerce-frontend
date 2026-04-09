"use client";
import { resetPassword } from "@/api/auth";
import Button from "@/app/components/Button";
import { LOGIN_ROUTE } from "@/constants/route";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ResetPasswordPage = () => {
  const [loading, setLoading] = useState();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const passwordCheck = watch("password");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const userId = searchParams.get("userId");

  function submitForm(data) {
    setLoading(true);

    resetPassword(token, userId, data)
      .then(() => {
        toast.success("Password reset successfull.", { autoClose: 1500 });
        reset();
      })
      .catch((error) => {
        toast.error(error.response?.data, { autoClose: 1500 });
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-slate-700">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Reset Password
      </h1>
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(submitForm)}
      >
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
        <div>
          <label
            htmlFor="confirm-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("confirmPassword", {
              required: "Confirm Password is required.",
              minLength: {
                value: 8,
                message:
                  "Confirm Password Password must be greater than or equal to 8 characters.",
              },
              validate: (value) =>
                value === passwordCheck || "Passwords do not match.",
            })}
          />
          <p className="text-red-500 text-sm">
            {errors.confirmPassword?.message}{" "}
          </p>
        </div>
        <Button loading={loading} label="Submit" />
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Please login in continue!{" "}
          <Link
            href={LOGIN_ROUTE}
            className="font-medium text-primary hover:underline dark:text-primary"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
