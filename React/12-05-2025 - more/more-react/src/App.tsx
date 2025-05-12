import { useRef } from "react";
import Father from "./components/Father";
import { Button, FloatingLabel } from "flowbite-react";

export default function App() {
  const number = useRef(100);

  const formRef = useRef<HTMLFormElement>(null);

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const printForm = () => {
    if (formRef.current) {
      console.log(formRef.current);
      console.log("email: " + formRef.current["email"].value);
      console.log("password" + formRef.current["password"].value);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24 text-white dark:bg-gray-900">
      <p>{number.current}</p>
      <Button
        onClick={() => {
          number.current += 1;
        }}
      >
        +1
      </Button>
      <Button
        onClick={() => {
          console.log(number.current);
        }}
      >
        Print
      </Button>
      <Father />

      <form ref={formRef} className="flex flex-col">
        <FloatingLabel
          label="email"
          className="mb-2 block"
          variant="standard"
          name="email"
          id="email"
        />
        <FloatingLabel
          label="password"
          className="mb-2 block"
          variant="standard"
          name="password"
          id="password"
        />

        <Button type="submit" className="mt-2">
          Submit
        </Button>
        <Button type="reset" className="mt-2" onClick={resetForm}>
          Reset
        </Button>
        <Button type="button" className="mt-2" onClick={printForm}>
          Print
        </Button>
      </form>
    </main>
  );
}
