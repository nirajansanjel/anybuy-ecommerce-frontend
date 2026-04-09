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
async function updateUser(id,data) {
  return await api.put(`${config.apiUrl}/api/user/${id}`,data);
}
async function updateProfileImage(id,data) {
  return await api.patch(`${config.apiUrl}/api/user/${id}/profile-image`,data);
}

export { getAllUsers ,updateUserRoles,updateUser,updateProfileImage};
