"use client";
import { createProduct } from "@/api/products";
import Button from "@/app/components/Button";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ProductForm = () => {
  const [loading, setLoading] = useState(false);
  const [productImages, setProductImages] = useState([]);
  const [localImageUrls, setLocalImageUrls] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function prepareData(data) {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("brand", data.brand);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("stock", data.stock ?? 1);

    if (data.description) formData.append("description", data.description);

    if (productImages.length > 0) {
      productImages.map((image) => {
        formData.append("images", image);
      });
    }

    return formData;
  }

  async function submitForm(data) {
    setLoading(true);
    const authToken = localStorage.getItem("authToken");

    const inputData = prepareData(data);

    try {
      await createProduct(inputData, authToken);

      reset();
      toast.success("Product Created Successfully.", { autoClose: 1000 });
    } catch (error) {
      toast.error(error.response?.data, { autoClose: 1000 });
    } finally {
      setLoading(false);
      setLocalImageUrls([]);
      setProductImages([]);
    }
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Type product name"
            {...register("name", { required: "Product name is required" })}
          />
          <p className="text-red-500 text-sm m-1">{errors.name?.message}</p>
        </div>
        <div className="w-full">
          <label
            htmlFor="brand"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Brand
          </label>
          <input
            type="text"
            name="brand"
            id="brand"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Product brand"
            {...register("brand", { required: "Product brand is required" })}
          />
          <p className="text-red-500 text-sm m-1">{errors.brand?.message}</p>
        </div>
        <div className="w-full">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Rs.2999"
            {...register("price", { required: "Product price is required" })}
          />
          <p className="text-red-500 text-sm m-1">{errors.price?.message}</p>
        </div>
        <div className="w-full">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="ELectronics"
            {...register("category", {
              required: "Product category is required",
            })}
          />
          <p className="text-red-500 text-sm m-1">{errors.category?.message}</p>
        </div>

        <div>
          <label
            htmlFor="stock"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stock
          </label>
          <input
            type="number"
            name="stock"
            id="stock"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder={12}
            {...register("stock")}
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={8}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Your description here"
            defaultValue={""}
            {...register("description")}
          />
        </div>

        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="images"
            className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs">SVG, PNG, JPG (MAX. 800x400px)</p>
            </div>
            <input
              id="images"
              type="file"
              className="hidden"
              multiple
              accept=".svg,.png,.jpg"
              onChange={(event) => {
                const files = [];
                const urls = [];

                Array.from(event.target.files).map((file) => {
                  files.push(file);
                  urls.push(URL.createObjectURL(file));
                });
                setLocalImageUrls(urls);
                setProductImages(files);
              }}
            />
          </label>
        </div>
        {localImageUrls.length > 0 && (
          <div className="flex items-center gap-3">
            {localImageUrls.map((url, index) => (
              <Image
                key={index}
                height={50}
                width={50}
                src={url}
                alt=""
                className="h-16 w-16 object-cover p-1 rounded-md bg-slate-300 dark:bg-slate-600"
              />
            ))}
          </div>
        )}
      </div>

      <Button
        label="Add Product"
        className="mt-4 px-12 text-center sm:mt-6 bg-primary hover:bg-secondary transition hover:text-white"
        loading={loading}
      />
    </form>
  );
};

export default ProductForm;
