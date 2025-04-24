import LoginPage from "../pages/Login.page";

type RouteGuardProps = {
  children: React.ReactNode;
  isLoggedIn: boolean;
};

const RouteGuard = (props: RouteGuardProps) => {
  const { children, isLoggedIn } = props;

  // Check if the user is logged in
  // If not, redirect to the login page
  const content = isLoggedIn ? <>{children}</> : <LoginPage />;

  return content;
};

export default RouteGuard;
