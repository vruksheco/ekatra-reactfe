import axios from "axios";
import { API_BASE } from "../API.config";

export const signIn = async (formData) => {
  const data = await axios.post(`${API_BASE}auth/login`, formData);
  return data.data;
};

export const signUp = async (formData) => {
  try {
    const data = await axios.post(`${API_BASE}auth/signup`, formData);
    return data.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response.data;
    }
  }
};
