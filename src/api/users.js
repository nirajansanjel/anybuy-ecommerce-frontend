"use client";
import config from "@/config";
import axios from "axios";
import api from "./api";

async function getAllUsers() {
  return await api.get(`${config.apiUrl}/api/users`);
}
async function updateUserRoles(id,data) {
  return await api.put(`${config.apiUrl}/api/user/${id}/roles`,data);
}
export { getAllUsers ,updateUserRoles};
