import { Navigate, useLocation } from "react-router-dom";
import { useSelectUser } from "../../app/store/features/auth/authSlice";
import { getAbsoluteRoute } from "../../routes/getAbsoluteRoute";
import { LOGIN_ROUTE } from "../../routes/loginRoute";

const RequireAuth = ({ children }: { readonly children: React.ReactNode }) => {
  const user = useSelectUser();
  const location = useLocation();

  if (false && !user) {
    return (
      <Navigate
        to={getAbsoluteRoute(LOGIN_ROUTE.path)}
        state={{ from: location }}
        replace={true}
      />
    );
  }
  return <>{children}</>;
};

export default RequireAuth;
