import React from "react";
import MyContainer from "../_component/MyContainer/MyContainer";

const page = () => {
  return (
    <MyContainer>
      <h1 className="md:mt-10 mt-6 text-center md:text-2xl text-xl font-semibold">
        Admin Login
      </h1>

      <form className="max-w-96 flex flex-col mx-auto md:mt-20 mt-16 gap-6">
        <input
          className="md:px-4 md:text-sm text-xs px-3 md:py-2 py-1 bg-gray-100 rounded-lg"
          type="email"
          placeholder="Enter your email"
        />

        <input
          className="md:px-4 md:text-sm text-xs px-3 md:py-2 py-1 bg-gray-100 rounded-lg"
          type="password"
          placeholder="Enter your password"
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
