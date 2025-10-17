import type { User } from "@/interfaces/user.interface";
import { create } from "zustand";
import { LoginAction } from "../actions/login.action";
import { CheckAuthAction } from "../actions/check-auth.action";
import { RegisterAction } from "../actions/register.action";

type AuthStatus = "authenticated" | "not-authenticated" | "checking";

type AuthState = {
  user: User | null;
  token: string | null;

  authStatus: AuthStatus;
  isAdmin: () => boolean;

  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (
    email: string,
    password: string,
    fullName: string
  ) => Promise<boolean>;

  checkAuthStatus: () => Promise<void>;
};

export const useAuthStore = create<AuthState>()((set, get) => ({
  user: null,
  token: null,
  authStatus: "checking",

  isAdmin: () => {
    const roles = get().user?.roles ?? [];
    return roles.includes("admin");
  },

  login: async (email: string, password: string) => {
    try {
      const data = await LoginAction(email, password);
      localStorage.setItem("token", data.token);
      set({
        user: data.user,
        token: data.token,
        authStatus: "authenticated",
      });
    } catch (error) {
      localStorage.removeItem("token");
      set({ user: null, token: null, authStatus: "not-authenticated" });
      return false;
    }

    return true;
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null, authStatus: "not-authenticated" });
  },
  register: async (email: string, password: string, fullName: string) => {
    try {
      const data = await RegisterAction(email, password, fullName);
      localStorage.setItem("token", data.token);
      set({
        user: data.user,
        token: data.token,
        authStatus: "authenticated",
      });
    } catch {
      localStorage.removeItem("token");
      set({ user: null, token: null, authStatus: "not-authenticated" });
      return false;
    }
    return false;
  },

  checkAuthStatus: async () => {
    try {
      const { user, token } = await CheckAuthAction();
      set({ user: user, token: token, authStatus: "authenticated" });
    } catch (error) {
      set({ user: null, token: null, authStatus: "not-authenticated" });
    }
  },
}));
