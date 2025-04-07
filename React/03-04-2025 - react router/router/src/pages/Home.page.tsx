import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("Home page mounted");

    return () => {
      console.log("Home page unmounted");
    };
  }, []);

  return <h1>Home Page</h1>;
};

export default Home;
