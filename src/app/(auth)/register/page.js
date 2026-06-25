"use client";
import { EMAIL_REGEX } from "@/constants/regex";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/redux/auth/authActions";
import Loader from "@/app/components/Loader";

// Shared style tokens
const inputClass =
  "w-full bg-surface-container-low border border-outline-variant text-on-surface rounded-xl px-4 py-3 text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";

const labelClass = "block mb-2 text-sm font-medium text-on-surface";

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
      toast.error(error, { autoClose: 1000 });
    }
  }, [error]);

  return (
    <div className="w-full max-w-sm">
      {/* Heading */}
      <h1 className="font-display text-3xl font-bold text-on-surface mb-2">
        Create account.
      </h1>
      <p className="text-sm text-on-surface-variant mb-8">
        Join us — it only takes a minute.
      </p>

      <form className="space-y-5" onSubmit={handleSubmit(submitForm)}>
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Harry Brook"
            className={inputClass}
            {...register("name", { required: "Name is required." })}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-error">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="name@company.com"
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

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="9876543210"
            className={inputClass}
            {...register("phone", { required: "Phone number is required." })}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-error">{errors.phone.message}</p>
          )}
        </div>

        {/* Province + City — side by side on all screens */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="province" className={labelClass}>
              Province
            </label>
            <select
              id="province"
              className={inputClass}
              defaultValue=""
              {...register("province", { required: "Province is required." })}
            >
              <option value="" disabled>Select</option>
              <option value="Koshi">Koshi</option>
              <option value="Madesh">Madesh</option>
              <option value="Bagmati">Bagmati</option>
              <option value="Karnali">Karnali</option>
              <option value="Lumbini">Lumbini</option>
              <option value="Gandaki">Gandaki</option>
              <option value="Sudurpashim">Sudurpashim</option>
            </select>
            {errors.province && (
              <p className="mt-1 text-xs text-error">{errors.province.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="city" className={labelClass}>
              City
            </label>
            <input
              type="text"
              id="city"
              placeholder="Hetauda"
              className={inputClass}
              {...register("city", { required: "City is required." })}
            />
            {errors.city && (
              <p className="mt-1 text-xs text-error">{errors.city.message}</p>
            )}
          </div>
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

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirm-password" className={labelClass}>
            Confirm password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="••••••••"
            className={inputClass}
            {...register("confirmPassword", {
              required: "Please confirm your password.",
              validate: (value) =>
                value === passwordCheck || "Passwords do not match.",
            })}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-xs text-error">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Terms */}
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            id="terms"
            type="checkbox"
            required
            className="mt-0.5 w-4 h-4 rounded border-outline-variant accent-primary shrink-0"
          />
          <span className="text-sm text-on-surface-variant">
            I accept the{" "}
            <Link href="#" className="font-medium text-primary hover:opacity-75 transition-opacity">
              Terms and Conditions
            </Link>
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="relative w-full flex items-center justify-center bg-primary text-on-primary rounded-full py-3 font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {loading ? (
            <Loader className="w-5 h-5 fill-on-primary" />
          ) : (
            "Create account"
          )}
        </button>

        <p className="text-sm text-center text-on-surface-variant">
          Already have an account?{" "}
          <Link
            href="login"
            className="font-medium text-primary hover:opacity-75 transition-opacity"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
