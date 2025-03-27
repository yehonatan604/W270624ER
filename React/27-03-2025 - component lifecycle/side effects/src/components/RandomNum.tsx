import { Button } from "flowbite-react";
import { useEffect, useState } from "react";

const RandomNum = () => {
  const [num, setNum] = useState<number>(0);
  const [numColor, setNumColor] = useState<"green" | "red">("green");

  const randomize = () => {
    setNum(Math.floor(Math.random() * 100) + 1);
  };

  useEffect(() => {
    const isEven: boolean = num % 2 === 0;
    console.log(`Number is ${isEven ? "even" : "odd"}`);
    setNumColor(isEven ? "green" : "red");
  }, [num]);

  return (
    <div className="mt-4">
      <h1>Random Number</h1>
      <p style={{ color: numColor }}>{num}</p>
      <Button onClick={randomize}>Randomize</Button>
    </div>
  );
};

export default RandomNum;
