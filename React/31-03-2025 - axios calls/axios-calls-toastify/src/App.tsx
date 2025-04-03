import axios from "axios";
import { useEffect, useState } from "react";
import { Tcountry } from "./types/TCountry";
import { Button, Card } from "flowbite-react";
import { toast } from "react-toastify";

const App = () => {
  const [countries, setCountries] = useState<Tcountry[]>([]);

  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
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

  useEffect(() => {
    getCountries();
    toast("Welcome to the app!");
    toast.success("Success!!!!");
    toast.error("Error!!!!");
  }, []);

  useEffect(() => {
    console.log("Countries data:", countries);
  }, [countries]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button onClick={login} className="mb-4">
          Login
        </Button>
        {countries.map((country) => (
          <Card className="max-w-sm" imgSrc={country.flags.png}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {country.name.common}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Capital: {country.capital}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Region: {country.region}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default App;
