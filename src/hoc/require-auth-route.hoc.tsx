import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isUserAdminSelector } from "../redux/user/user.slice";

const RequireAuthRoute = (): JSX.Element => {
  const location = useLocation();
  const isAdmin = useSelector(isUserAdminSelector);

  if(location.pathname.includes("dashboard") && !isAdmin) {
    return <Navigate to="/login" state={{ from: location }}/>;
  }

  if(location.pathname === "/login" && isAdmin) {
    return <Navigate to="/dashboard" state={{ from: location }}/>;
  }

  return <Outlet />;
};

export default RequireAuthRoute;
