"use client";
import { forgotPassword } from "@/api/auth";
import Button from "@/app/components/Button";
import { EMAIL_REGEX } from "@/constants/regex";
import { LOGIN_ROUTE } from "@/constants/route";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitForm(data) {
    setLoading(true);
    forgotPassword(data)
      .then((res) => {
        toast.success(res?.data.message, {
          autoClose: 1500,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data, { autoClose: 1500 });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-slate-700">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Find your account
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

export default ForgotPasswordPage;
