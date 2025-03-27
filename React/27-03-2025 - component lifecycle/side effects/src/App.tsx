import { useEffect } from "react";
import Now from "./components/Now";

const App = () => {
  // This effect will run only once after the component is rendered
  useEffect(() => {
    console.log("Component rendered");
  }, []);

  return (
    <div>
      <h1>Side Effects</h1>
      <p>
        This example demonstrates how to use side effects in React components.
      </p>
      <Now />
    </div>
  );
};

export default App;
