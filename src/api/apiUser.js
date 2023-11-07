import { API_ROUTE } from "@/constant/apiRoute";
import api from "@/lib/axios";

export const signUp = (payload) => {
  return api.post(API_ROUTE.USER, payload);
};
