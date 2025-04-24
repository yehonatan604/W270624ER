import { Link } from "react-router-dom";

type RouteGuardProps = {
  children: React.ReactNode;
  isLoggedIn: boolean;
};

const RouteGuard = (props: RouteGuardProps) => {
  const { children, isLoggedIn } = props;

  const content = isLoggedIn ? (
    <>{children}</>
  ) : (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24 dark:bg-gray-900">
      <h1 className="text-2xl font-bold">You are not logged in</h1>
      <p className="mt-4 text-lg">Please log in to access this page.</p>
      <Link to="/login" className="mt-4 text-blue-500 hover:underline">
        Login
      </Link>
    </div>
  );

  return content;
};

export default RouteGuard;
