import { useEffect } from "react";
import Now from "./components/Now";
import RandomNum from "./components/RandomNum";

const App = () => {
  // This effect will run only once after the component is rendered
  useEffect(() => {
    console.log("Component rendered");
  }, []);

  return (
    <div>
      <Now />
      <RandomNum />
    </div>
  );
};

export default App;
