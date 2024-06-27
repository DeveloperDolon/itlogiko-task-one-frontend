import React from "react";
import MyContainer from "../_component/MyContainer/MyContainer";

const page = () => {
  return (
    <>
      <MyContainer>
        <h1 className=" md:my-7 my-5 md:text-4xl sm:text-3xl text-xl font-semibold">
          Welcome to Admin Dashboard!
        </h1>
      </MyContainer>
    </>
  );
};

export default page;
