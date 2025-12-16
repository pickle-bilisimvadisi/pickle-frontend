import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import { SignIn, SignUp, Logout, ForgotPassword } from "@/pages/auth";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />

      {/* Auth Routes */}
      <Route element={<SignIn />} path="/auth/sign-in" />
      <Route element={<SignUp />} path="/auth/sign-up" />
      <Route element={<Logout />} path="/auth/logout" />
      <Route element={<ForgotPassword />} path="/auth/forgot-password" />
    </Routes>
  );
}

export default App;
