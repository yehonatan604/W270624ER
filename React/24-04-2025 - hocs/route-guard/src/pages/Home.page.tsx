import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>

      <Link to="/login">Login</Link>
    </div>
  );
};

export default HomePage;
