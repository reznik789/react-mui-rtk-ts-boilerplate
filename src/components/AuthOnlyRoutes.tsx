import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "src/app/hooks";
import { selectToken } from "src/features/user/userSlice";

const AuthOnlyRoutes: React.FC = () => {
  const token = useAppSelector(selectToken);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthOnlyRoutes;
