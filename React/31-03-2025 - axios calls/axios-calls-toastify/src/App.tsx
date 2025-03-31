import axios from "axios";
import { useEffect, useState } from "react";
import { Tcountry } from "./types/TCountry";
import { Card } from "flowbite-react";

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

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    console.log("Countries data:", countries);
  }, [countries]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {countries.map((country) => (
        <Card
          className="max-w-sm"
          imgSrc={country.flags.png}
          key={country.cca3}
        >
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
  );
};

export default App;
