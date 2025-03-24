import { Button } from "flowbite-react";
import { useState } from "react";

const App2 = () => {
  const [person, setPerson] = useState({
    name: "John",
    age: 25,
    email: "john@email.com",
    country: "USA",
    city: "New York",
    address: "5th Avenue",
    phone: "123-456-7890",
  });

  return (
    <>
      {/* <h1>{person.name}</h1>
      <h1>{person.age}</h1> */}

      {Object.keys(person).map((item, index) => {
        // ["name", "age", "email", "country", "city", "address", "phone"]
        return (
          <h1 key={index}>
            {index}: {person[item as keyof typeof person]}
          </h1>
        );
      })}

      <Button
        onClick={() =>
          //   setPerson({
          //     ...person,
          //     age: person.age + 1,
          //   })

          setPerson((prev) => {
            return {
              ...prev,
              age: prev.age + 1,
            };
          })
        }
      >
        Increase Age
      </Button>
    </>
  );
};

export default App2;
