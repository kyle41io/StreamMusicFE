import { API_ROUTE } from "@/constant/apiRoute";
import api from "@/lib/axios";
import { data } from "autoprefixer";

export const getUserInfo = async (userID) => {
  const res = await api.get(API_ROUTE.USER_INFO + userID);
  return res.data;
};
