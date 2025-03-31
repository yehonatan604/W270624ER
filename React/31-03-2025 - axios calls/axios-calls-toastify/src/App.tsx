import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);

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
    <div className="App">
      <h1>Axios Calls with Toastify</h1>
      <p>This is a simple example of using Axios with Toastify in React.</p>
    </div>
  );
};

export default App;
