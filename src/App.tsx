import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import { SignIn, SignUp, Logout } from "./pages/auth";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<SignIn />} path="/auth/sign-in" />
      <Route element={<SignUp />} path="/auth/sign-up" />
      <Route element={<Logout />} path="/auth/logout" />
    </Routes>
  );
}

export default App;
