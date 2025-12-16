import { create } from "zustand";
import { api } from "@/services/api";

interface AuthState {
  user: any | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  setAccessToken: (token: string) => void;
}

const useAuthStore = create<AuthState>((set, _) => ({
  user: null,
  accessToken: localStorage.getItem("accessToken") || null,
  isAuthenticated: !!localStorage.getItem("accessToken"),
  isLoading: false,
  error: null,

  signIn: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.post("/auth/login", { email, password });

      const { accessToken, user } = response.data;

      localStorage.setItem("accessToken", accessToken);
      set({
        user,
        accessToken,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Giriş başarısız",
        isLoading: false,
      });
      throw error;
    }
  },

  setAccessToken: (token: string) => {
    localStorage.setItem("accessToken", token);
    set({ accessToken: token, isAuthenticated: true });
  },

  signOut: async () => {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      console.error("Logout error", error);
    } finally {
      localStorage.removeItem("accessToken");
      set({
        user: null,
        accessToken: null,
        isAuthenticated: false,
      });
      window.location.href = "/login";
    }
  },
}));

export default useAuthStore;
