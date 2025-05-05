import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { TRootState } from "../store/store";
import { Navigate } from "react-router-dom";

type RouteGuardProps = {
  children: ReactNode;
  isBiz?: boolean;
  isAdmin?: boolean;
};

const RouteGuard = (props: RouteGuardProps) => {
  const { children, isBiz, isAdmin } = props;

  const user = useSelector((state: TRootState) => {
    return state.userSlice.user;
  });

  if (!user) {
    return <Navigate to="/signin" />;
  }
  if (isBiz && !user.isBusiness) {
    return <Navigate to="/" />;
  }
  if (isAdmin && !user.isAdmin) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default RouteGuard;
