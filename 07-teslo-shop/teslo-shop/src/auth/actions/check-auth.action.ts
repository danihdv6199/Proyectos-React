import { tesloApi } from "@/api/teslo-api";
import type { AuthResponse } from "../interfaces/auth.response";

export const CheckAuthAction = async (): Promise<AuthResponse> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Not token found");

  try {
    const { data } = await tesloApi.get<AuthResponse>("/auth/check-status");
    const token = localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    localStorage.removeItem("token");
    throw new Error("token expired");
  }
};
