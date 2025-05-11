import { Navigate, Outlet } from "react-router";

type ProtectedRouteProps = {
  isAuthenticated: boolean;
};

export const ProtectedRoute = ({ isAuthenticated }: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};