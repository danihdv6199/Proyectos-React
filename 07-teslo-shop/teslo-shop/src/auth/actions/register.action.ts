import { tesloApi } from "@/api/teslo-api";
import type { AuthResponse } from "../interfaces/auth.response";

export const RegisterAction = async (
  email: string,
  password: string,
  fullName: string
): Promise<AuthResponse> => {
  const { data } = await tesloApi.post<AuthResponse>("/auth/register", {
    email,
    password,
    fullName,
  });

  return data;
};
