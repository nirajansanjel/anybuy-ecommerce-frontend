"use client";
import Button from "@/app/components/Button";
import { updateUserProfile } from "@/redux/auth/authActions";
import { resetSuccess } from "@/redux/auth/authSlice";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ProfileImage from "./_components/ProfileImage";

const ProfileUpdate = () => {
  const { error, loading, user, success } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      city: user?.address.city,
      province: user?.address.province,
    },
  });

  const dispatch = useDispatch();

  function submitForm(data) {
      dispatch(
        updateUserProfile({
            id: user._id,
          name: data.name,
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
      toast.error(error, { autoClose: 1000 });
    }
    if (success) {
      toast.success("User Updated successfully.", { autoClose: 1000 });
    }
    dispatch(resetSuccess())
  }, [error, success]);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto dark:bg-gray-600 rounded-r-xl">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Update Profile
          </h1>
         <ProfileImage user={user}/>
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
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="disabled:bg-gray-200 disabled:text-gray-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                disabled
                {...register("email", {
                  required: "Email is required.",
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
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("city", {
                  required: "City is required.",
                })}
              />
              <p className="text-red-500 text-sm">{errors.city?.message} </p>
            </div>
            <Button loading={loading} label="Update your account" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
