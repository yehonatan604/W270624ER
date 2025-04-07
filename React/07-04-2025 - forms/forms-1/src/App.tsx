import { Button, FloatingLabel } from "flowbite-react";
import { ChangeEvent, useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    console.log(formData);
  };

  const onChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>React Forms</h1>
      <form className="flex w-1/4 flex-col gap-2">
        <FloatingLabel
          variant="standard"
          label="email"
          id="email"
          onInput={onChanges}
        />

        <FloatingLabel
          variant="standard"
          label="password"
          id="password"
          type="password"
          onInput={onChanges}
        />

        <Button disabled onClick={onSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
}
