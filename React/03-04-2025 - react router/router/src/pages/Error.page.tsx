import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };

  return (
    <>
      <h1 className="text-3xl">404!!!!</h1>
      <p>Page not found</p>
      {/* <Link to="/">Go Home</Link> */}
      <Button onClick={navHome}>Go Home</Button>
    </>
  );
};

export default ErrorPage;
