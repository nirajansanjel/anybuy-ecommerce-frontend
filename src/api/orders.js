import api from "./api";

async function createOrder(data) {
  return await api.post(`/api/orders/create`, data);
}

async function getOrdersByUser(status) {
  return await api.get(`/api/orders/user?status=${status}`);
}

async function orderDelete(id) {
  return await api.delete(`/api/orders/${id}`);
}

export { createOrder, getOrdersByUser, orderDelete };
