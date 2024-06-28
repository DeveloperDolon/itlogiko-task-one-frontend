"use client";

import React from "react";
import MyContainer from "../_component/MyContainer/MyContainer";
import toast from "react-hot-toast";
import { baseURL } from "../_utils/baseUrl";
import { redirect } from "next/navigation";

const page = () => {
  const handleLogin = async (data: any) => {
    data.preventDefault();
    try {
      const loadingToast = toast.loading("Login....");

      const loginData = {
        email: data?.target?.email?.value,
        password: data?.target?.password?.value,
      };

      const response = await fetch(`${baseURL}/api/login`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (result?.success) {
        localStorage.setItem("token", result?.token);
        toast.success("Logged in successful!", { id: loadingToast });
        redirect("/dashboard");
      } else {
        toast.error("Something wrong!", { id: loadingToast });
      }
    } catch (err: unknown) {
      console.log(err);
    }
  };

  return (
    <MyContainer>
      <h1 className="md:mt-10 mt-6 text-center md:text-2xl text-xl font-semibold">
        Admin Login
      </h1>

      <form
        onSubmit={handleLogin}
        className="max-w-96 flex flex-col mx-auto md:mt-20 mt-16 gap-6"
      >
        <input
          className="md:px-4 md:text-sm text-xs px-3 md:py-2 py-1 bg-gray-100 rounded-lg"
          type="email"
          placeholder="Enter your email"
          name="email"
          required={true}
        />

        <input
          className="md:px-4 md:text-sm text-xs px-3 md:py-2 py-1 bg-gray-100 rounded-lg"
          type="password"
          placeholder="Enter your password"
          name="password"
          required={true}
        />
        <div className="flex justify-center">
          <button
            className="w-fit bg-green-300 md:text-base text-sm md:px-5 px-4 md:py-2 py-1  font-medium rounded-md"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </MyContainer>
  );
};

export default page;
