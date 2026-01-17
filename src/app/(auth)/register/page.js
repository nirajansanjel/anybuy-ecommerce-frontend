"use client";
import { EMAIL_REGEX } from "@/constants/regex";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/redux/auth/authActions";
import Button from "@/app/components/Button";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const passwordCheck = watch("password");

  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);

  function submitForm(data) {
    dispatch(
      registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        phone: data.phone,
        address: {
          province: data.province,
          city: data.city,
        },
      })
    );
  }
  useEffect(() => {
    if (error) {
      toast.error(error, {
        autoClose: 1000,
      });
    }
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto dark:bg-gray-600 rounded-r-xl">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(submitForm)}
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Harry Brook"
                {...register("name", {
                  required: "Name is required.",
                })}
              />
              <p className="text-red-500 text-sm">{errors.name?.message} </p>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
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
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="9876543210"
                {...register("phone", {
                  required: "Phone Number is required.",
                })}
              />
              <p className="text-red-500 text-sm">{errors.phone?.message} </p>
            </div>
            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address : Province
              </label>
              <select
                id="province"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                {...register("province", {
                  required: "Province is required.",
                })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Province
                </option>
                <option value="Koshi">Koshi</option>
                <option value="Madesh">Madesh</option>
                <option value="Bagmati">Bagmati</option>
                <option value="Karnali">Karnali</option>
                <option value="Lumbini">Lumbini</option>
                <option value="Gandaki">Gandaki</option>
                <option value="Sudurpashim">Sudurpashim</option>
              </select>
              <p className="text-red-500 text-sm">
                {errors.province?.message}{" "}
              </p>
            </div>
            <div>
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Hetauda"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("city", {
                  required: "City is required.",
                })}
              />
              <p className="text-red-500 text-sm">{errors.city?.message} </p>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 8,
                    message:
                      "Password must be greater than or equal to 8 characters.",
                  },
                })}
              />
              <p className="text-red-500 text-sm">
                {errors.password?.message}{" "}
              </p>
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
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <Link
                    className="font-medium text-primary hover:underline dark:text-primary"
                    href="#"
                  >
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>

            <Button loading={loading} label="Create an account" />
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="login"
                className="font-medium text-primary hover:underline dark:text-primary"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
