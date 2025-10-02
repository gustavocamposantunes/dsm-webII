'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../components/FormInput";
import loginSchema from "@/schemas/loginSchema";

interface IFormValues {
  username: string;
  password: string;
}

export default function LoginPage() {
  const { register, handleSubmit, formState } = useForm<IFormValues>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data: IFormValues) => {
    console.log(data);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold">Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm bg-white p-8 rounded shadow-md">
        <FormInput
          id="username"
          label="Username"
          type="text"
          placeholder="Enter your username"
          register={register}
          errors={formState.errors}
          helperText="Enter a username with at least 3 characters"
        />
        <FormInput
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={register}
          errors={formState.errors}
          helperText="Enter a password with at least 6 characters"
          className="mb-6"
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500"
            type="submit"
            disabled={!formState.isValid}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
