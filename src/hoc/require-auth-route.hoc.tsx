import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { userSelector } from "../redux/user/user.slice";

const ROLES = ["ADMIN", "SUPER_ADMIN", "OWNER"];

const RequireAuthRoute = (): JSX.Element => {
  const location = useLocation();
  const { userEntity } = useSelector(userSelector);

  //if user has not role from ROLES than he will go to /login page
  if (userEntity.role?.some(role => ROLES.includes(role)) && userEntity.token == null) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default RequireAuthRoute;
