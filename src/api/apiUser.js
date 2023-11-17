import { API_ROUTE } from "@/constant/apiRoute";
import api from "@/lib/axios";
import { data } from "autoprefixer";

export const signUp = (payload) => {
  return api.post(API_ROUTE.USER, payload);
};

export const getUserInfo = async (userID) => {
  const response = await fetch(('http://192.168.1.123:3000/api/users/' + userID))
  return await response.json()
}