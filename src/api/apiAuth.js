import { API_ROUTE } from "@/constant/apiRoute";
import api from "@/lib/axios";

export const signIn = async (payload) => {
  try {
    const response = await api.post(API_ROUTE.AUTH, JSON.stringify(payload));
    return response;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (payload) => {
  try {
    const response = await api.post(API_ROUTE.SIGN_UP, JSON.stringify(payload));
    return response;
  } catch (error) {
    throw error;
  }
}