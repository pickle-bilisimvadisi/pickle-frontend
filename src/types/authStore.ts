export interface IAuth {
  loading: boolean;
  token: string | null;
  setLoading: (loading: boolean) => void;
  setToken: (token: string | null) => void;
  isAuthenticated: boolean;
}
