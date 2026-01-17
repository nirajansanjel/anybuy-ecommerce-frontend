import config from "@/config";
import axios from "axios";
import api from "./api";
async function getProducts() {
  return await axios.get(`${config.apiUrl}/api/products`);
}
async function getProductById(id) {
  return await axios.get(`${config.apiUrl}/api/products/${id}`);
}

async function createProduct(data, authToken) {
  return await api.post(`/api/products/create`, data);
}

export { getProducts, getProductById, createProduct };
