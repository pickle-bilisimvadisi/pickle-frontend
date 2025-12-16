import { api, END_POINTS } from "./api";

export const signUp = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<any> => {
  const response = await api.post(END_POINTS.AUTH.SIGN_UP, { email, password });
  return response;
};

const forgotPassword = async (email: string): Promise<any> => {
  const response = await api.post(END_POINTS.AUTH.FORGOT_PASSWORD, {
    email,
  });
  return response;
};

export const AUTH_SERVICE = {
  signUp,
  forgotPassword,
};
