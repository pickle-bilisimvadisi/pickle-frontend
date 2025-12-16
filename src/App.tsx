import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import NotFound from "@/pages/Notfound";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
