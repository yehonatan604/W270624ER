import { joiResolver } from "@hookform/resolvers/joi";
import { Button, FloatingLabel } from "flowbite-react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../validations/login.joi";
import axios from "axios";

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: joiResolver(loginSchema),
  });

  const submitForm = async (data: FormData) => {
    console.log("Form submitted", data);
    try {
      const res = await axios.post(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login",
        data,
      );
      console.log("Success");
      localStorage.setItem("token", res.data);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24 dark:bg-gray-900">
      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-4">
        <FloatingLabel
          {...register("email")}
          variant="outlined"
          label="Email address"
          type="email"
          color={errors.email ? "error" : "success"}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}

        <FloatingLabel
          {...register("password")}
          variant="outlined"
          label="Password"
          type="password"
          color={errors.password ? "error" : "success"}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}

        <Button type="submit" className="w-full" disabled={!isValid}>
          Submit
        </Button>
      </form>
    </main>
  );
}
