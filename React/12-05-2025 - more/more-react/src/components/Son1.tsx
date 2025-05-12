import { Button } from "flowbite-react";
import useAge from "../hooks/useAge";

const Son1 = () => {
  const { age, changeAge } = useAge(35);

  return (
    <div>
      <h1>Ofir</h1>
      <p>age: {age}</p>
      <Button onClick={() => changeAge("+")}>+</Button>
      <Button onClick={() => changeAge("-")}>-</Button>
    </div>
  );
};

export default Son1;
