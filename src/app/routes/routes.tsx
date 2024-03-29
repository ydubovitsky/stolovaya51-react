import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/main.layout";
import MainPage from "../pages/main/main.page";
import LoginPage from "../pages/login/login.page";
import DashboardPage from "../pages/dashboard/dashboard.page";
import MealSubpage from "../pages/dashboard/subpages/meal/meal.subpage";
import MenuSubpage from "../pages/dashboard/subpages/menu/menu.subpage";
import RequireAuthRoute from "../../hoc/require-auth-route.hoc";
import PrivacyPolicyPage from "../pages/privacy-policy/privacy-policy.page";
import TermOfUsePage from "../pages/term-of-use/term-of-use.page";

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<MainPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/term-of-use" element={<TermOfUsePage />} />
      <Route element={<RequireAuthRoute />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />}>
          <Route path="meal" element={<MealSubpage />} />
          <Route path="menu" element={<MenuSubpage />} />
        </Route>
      </Route>
    </Route>
    {/* //! Default Redirect */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default RoutesComponent;
