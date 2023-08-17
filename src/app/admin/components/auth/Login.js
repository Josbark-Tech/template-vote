"use client";

import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useFormik, Form, FormikProvider } from "formik";
//import Link from "next/link";
//import * as Yup from "yup";
// import { signIn } from "next-auth/react";
// import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  //const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    /*
    const data = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });*/

    handleShowPassword();
    //console.log(data);
    console.log(email, password);
    router.push("/admin");

    /*
    if (data?.error) {
      toast.error(data?.error);
    }

    if (data?.ok) {
      router.push("/");
    }*/
  };


  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        style={{ maxWidth: "480px" }}
        className="mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
      >
        <h2 className="mb-5 text-2xl font-semibold">Login</h2>

        <div className="mb-4">
          <label className="block mb-1"> Email </label>
          <input
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // {...getFieldProps("email")}
            placeholder="Votre adresse email ou nom d'utilisateur"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1"> Password </label>
          <input
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type={showPassword ? "text" : "password"}
            // type="password"
            // {...getFieldProps("password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Votre mot de passe"
            minLength={6}
            required
          />
        </div>
        <button
          type="submit"
          className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          Login
        </button>
        <hr className="mt-4" />
      </div>
    </form>
  );
};

export default Login;
{/* <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div> */}
