import { API_ROUTE } from "@/constant/apiRoute";
import api from "@/lib/axios";
import { data } from "autoprefixer";

export const signUp = (payload) => {
  return api.post(API_ROUTE.USER, payload);
};

export const getUserInfo = async (userID) => {
  const res = await api.get(API_ROUTE.USER_INFO + userID);
  return res.data;
};
