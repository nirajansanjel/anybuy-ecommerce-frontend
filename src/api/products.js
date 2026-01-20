import config from "@/config";
import axios from "axios";
import api from "./api";
async function getProducts() {
  return await axios.get(`${config.apiUrl}/api/products`);
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

export { getProducts, getProductById, createProduct, updateProduct,deleteProduct };
