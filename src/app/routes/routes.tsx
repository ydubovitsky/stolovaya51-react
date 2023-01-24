import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/main.layout";
import MainPage from "../pages/main/main.page";
import LoginPage from "../pages/login/login.page";

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<MainPage />} />
      <Route path="login" element={<LoginPage />} />
    </Route>
    {/* //! Default Redirect */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default RoutesComponent;