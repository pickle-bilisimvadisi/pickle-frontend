import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import { SignIn, SignUp, Logout, ForgotPassword } from "@/pages/auth";
import NotFound from "@/pages/NotFound";
import { siteConfig } from "./config/site";
import Dashboard from "./pages/dashboard";
import FilesPage from "./pages/dashboard/files";


const routerPaths = siteConfig.routerPaths;

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />

      {/* Auth Routes */}
      <Route element={<SignIn />} path={routerPaths.auth.signIn} />
      <Route element={<SignUp />} path={routerPaths.auth.signUp} />
      <Route element={<Logout />} path={routerPaths.auth.logout} />
      <Route
        element={<ForgotPassword />}
        path={routerPaths.auth.forgotPassword}
      />

      {/* Dashboard Routes */}
      <Route element={<Dashboard />} path={routerPaths.dashboard.index} />
      <Route element={<FilesPage />} path={routerPaths.dashboard.files} />

      {/* 404 Not Found */}
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
