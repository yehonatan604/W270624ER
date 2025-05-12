import { Button } from "flowbite-react";
import useAge from "../hooks/useAge";

const Son2 = () => {
  const { age, changeAge } = useAge(31);

  return (
    <div>
      <h1>Simcha</h1>
      <p>age: {age}</p>
      <Button onClick={() => changeAge("+")}>+</Button>
      <Button onClick={() => changeAge("-")}>-</Button>
    </div>
  );
};

export default Son2;
