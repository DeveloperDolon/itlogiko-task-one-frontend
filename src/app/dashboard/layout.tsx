"use client";
import React, { ReactNode, useContext, useEffect } from "react";
import "./style.css";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AuthContext } from "../context/AuthContext";

const layout = ({ children }: { children: ReactNode }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const authContext = useContext(AuthContext);

  if (!authContext) {
    // Handle the case where context is not available
    console.error("AuthContext is undefined");
    return null; // Or a fallback UI
  }

  const { isAdminUser } = authContext;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!isAdminUser) {
      setTimeout(() => {
        redirect("/login");
      }, 3000);
    }
  }, [isAdminUser]);

  return (
    <div className="grid grid-cols-12 ">
      <div className="md:col-span-3 col-span-2 p-5 bar-container h-[calc(100vh-56px)] overflow-y-scroll bg-yellow-200">
        <ul>
          <li className="md:text-xl text-lg font-medium">
            <Link href={"/dashboard"}>Home</Link>
          </li>
        </ul>
      </div>
      <div className="md:col-span-9 col-span-10 p-6">{children}</div>
    </div>
  );
};

export default layout;
