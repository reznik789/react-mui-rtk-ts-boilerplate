import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { logOut, selectToken } from "src/app/features/user/userSlice";
import { Box, Button } from "@mui/material";

const AuthOnlyRoutes: React.FC = () => {
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();
  return token ? (
    <Box>
      <Box sx={{ m: 3 }}>
        <Button variant={"contained"} onClick={() => dispatch(logOut())}>
          Выход
        </Button>
      </Box>
      <Outlet />
    </Box>
  ) : (
    <Navigate to="/login" />
  );
};

export default AuthOnlyRoutes;
