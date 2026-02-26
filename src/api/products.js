import config from "@/config";
import axios from "axios";
import api from "./api";
import formatParams from "@/helpers/formatParams";
async function getProducts(searchParams) {
  const query = formatParams(searchParams);

  return await axios.get(`${config.apiUrl}/api/products?${query}`);
}
async function getProductById(id) {
  return await axios.get(`${config.apiUrl}/api/products/${id}`);
}

async function createProduct(data) {
  return await api.post(`/api/products/create`, data);
}
async function updateProduct(data, id) {
  return await api.put(`/api/products/update/${id}`, data);
}
async function deleteProduct(id) {
  return await api.delete(`/api/products/${id}`);
}
async function getBrands() {
  return await axios.get(`${config.apiUrl}/api/products/brands`);
}
async function getCategories() {
  return await axios.get(`${config.apiUrl}/api/products/categories`);
}

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getBrands,
  getCategories,
};
