import { Button } from "flowbite-react";
import { useState } from "react";

function App() {
  //let count = 0;
  const [count, updateCount] = useState(0);
  const [name, updateName] = useState("John Doe");
  const [nameColor, updateNameColor] = useState("blue");

  const increase = () => {
    updateCount(count + 1);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-sky-200 dark:bg-slate-700">
      <h1>{count}</h1>
      <Button onClick={increase}>+</Button>
      <Button
        onClick={() => {
          updateCount(count + 1);
        }}
      >
        reset
      </Button>
      <h1 style={{ color: nameColor }}>{name}</h1>
      <Button
        onClick={() => {
          updateName("Ofir Dayan");
          updateNameColor("red");
        }}
      >
        Change Name
      </Button>
    </div>
  );
}

export default App;
