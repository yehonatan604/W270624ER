import { Button, FloatingLabel, HelperText } from "flowbite-react";

import { ChangeEvent, useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const onSubmit = () => {
    console.log(formData);
  };

  const onChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    isFormValid();
  };

  const isFormValid = () => {
    const errors = {
      email: "",
      password: "",
    };

    if (!formData.email.includes("@")) {
      errors.email = "Email is invalid";
    }

    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setFormErrors(errors);

    const isAllFieldsValid =
      formErrors.email === "" && formErrors.password === "";
    setIsDisabled(!isAllFieldsValid);
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
          color={formErrors.email === "" ? "default" : "error"}
        />
        <HelperText className="text-left" color="failure">
          {formErrors.email}
        </HelperText>

        <FloatingLabel
          variant="standard"
          label="password"
          id="password"
          type="password"
          onInput={onChanges}
          color={formErrors.password === "" ? "default" : "error"}
        />
        <HelperText className="text-left" color="failure">
          {formErrors.password}
        </HelperText>

        <Button disabled={isDisabled} onClick={onSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
}
