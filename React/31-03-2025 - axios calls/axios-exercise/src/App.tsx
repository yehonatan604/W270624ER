import axios from "axios";
import { Button } from "flowbite-react";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  console.log("Users:", users);

  const getAllUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["x-auth-token"] = token;

      const resposnse = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users",
      );
      console.log("Response:", resposnse.data);
      setUsers(resposnse.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const login = async () => {
    try {
      const response = await axios.post(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login",
        {
          email: "admin@gmail.com",
          password: "Abc!123Abc",
        },
      );
      console.log("Login successful:", response.data);
      localStorage.setItem("token", response.data);
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };

  return (
    <>
      <Button onClick={login}>Login</Button>
      <Button onClick={getAllUsers}>Get All Users</Button>
    </>
  );
};

export default App;
