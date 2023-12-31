import { useState } from "react";
import Head from "next/head";
import Layout from "@/layouts/Main";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@/components/Button";
import axios from "axios";
import { urls } from "@/utils/urls";
import Toast from "awesome-toast-component";
import { Divider } from "@/components/Divider";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
  });
  const [clearPassword, setClearPassword] = useState("password");

  async function handleSubmit(e) {
    e.preventDefault();
    const { password } = formData;
    if(password.length < 8) {
      return new Toast("Password is less than 8 characters");
    }
    new Toast("Registering User...");
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  return (
    <Layout>
      <Head>
        <title>MiData | Login</title>
      </Head>

      <section className="flex justify-center py-10 flex-col items-center bg-[#5D43A9] text-white">
        <div className="flex flex-col items-center text-center gap-3">
          <h1 className="text-5xl font-bold">Create your account.</h1>
          <p className="text-sm mx-auto sm:w-[65%] w-full">
            Create your first checklist in seconds. Fast, flexible, and
            user-friendly, so you can focus on what matters most: your data.
          </p>
          <p className="font-bold text-xl">
            Already a user?{" "}
            <Link href="/login" className="underline leading-5">
              Login
            </Link>
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="my-2 space-y-3 sm:w-[380px] w-full p-2"
        >
          <div className="flex flex-col items-center w-full">
            <label htmlFor="emailAddress" className="font-bold text-xl">
              Email
            </label>
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              className="w-full border rounded-full text-center p-2 text-black"
              onChange={handleChange}
              value={formData.emailAddress}
              required
            />
          </div>
          <div className="relative flex flex-col items-center w-full">
            <label htmlFor="password" className="font-bold text-xl">
              Create Password
            </label>
            <input
              type={clearPassword}
              name="password"
              id="password"
              className="p-2 w-full border rounded-full text-center text-black"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {clearPassword === "password" ? (
              <FiEyeOff
                size={25}
                className="mr-3 hover:cursor-pointer absolute right-0 top-9"
                onClick={() => setClearPassword("text")}
              />
            ) : (
              <FiEye
                size={25}
                className="mr-3 hover:cursor-pointer absolute right-0 top-9"
                onClick={() => setClearPassword("password")}
              />
            )}
          </div>
          <div className="flex justify-center">
            <Button type="submit">Create Account</Button>
          </div>
          <div className="flex justify-end">
            <Link href="/forgot_password" className="text-sm underline">
              Forgot Password?
            </Link>
          </div>
          <Divider color="text-white" />
          <div className="flex w-full justify-center">
            <button
              className="bg-white rounded-full w-full text-black inline-flex justify-center items-center p-2 gap-1 font-semibold"
              type="button"
            >
              <FcGoogle size={25} />
              Sign Up with Google
            </button>
          </div>
          <p className="text-center text-sm">
            By signing up, you are creating a MiData account, and you agree to
            MiData{" "}
            <Link href="/terms" className="underline">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
          </p>
        </form>
      </section>
    </Layout>
  );
}
