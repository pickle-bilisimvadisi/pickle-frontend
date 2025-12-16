import { IAuth } from "@/types/authStore";
import { create } from "zustand";

const useAuthStore = create<IAuth>((set) => ({
  setToken: (token) => set({ token, isAuthenticated: !!token }),
  setLoading: (loading) => set({ loading }),
  token: null,
  loading: false,
  isAuthenticated: false,
}));

export default useAuthStore;
