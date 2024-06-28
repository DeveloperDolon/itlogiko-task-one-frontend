"use client";
import React, { ReactNode } from "react";
import "./style.css";
import Link from "next/link";
import { redirect } from "next/navigation";
const layout = ({ children }: { children: ReactNode }) => {
  const isAdmin = localStorage.getItem("token");

  if (!isAdmin) {
    redirect("/login");
  }

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
