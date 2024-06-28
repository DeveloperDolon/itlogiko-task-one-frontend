"use client";
import React, { useEffect, useState } from "react";
import { baseURL } from "../_utils/baseUrl";
import Link from "next/link";
import { LuDownloadCloud } from "react-icons/lu";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [applicationData, setApplicationData] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const jwtToken = localStorage.getItem("token");

    const fetchData = async () => {
      const response = await fetch(`${baseURL}/api/application`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      const result = await response.json();

      setApplicationData(result?.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className=" md:text-4xl sm:text-3xl text-xl font-semibold">
        Welcome to Admin Dashboard!
      </h1>

      <h2 className="md:mt-12 mt-8 md:text-xl text-base font-semibold">
        View all documents
      </h2>

      <div className="md:mt-24 sm:mt-20 mt-16">
        <div className="w-full sm:px-6">
          <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
            <table className="w-full whitespace-nowrap border">
              <thead>
                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                  <th className="font-semibold text-center pl-4">Serial No</th>
                  <th className="font-semibold text-center">Name</th>
                  <th className="font-semibold text-center">Email</th>
                  <th className="font-semibold text-center">Phone Number</th>
                  <th className="font-semibold text-center">Address</th>
                  <th className="font-semibold text-center pr-4">CV</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {applicationData?.length > 0 ? (
                  applicationData?.map((item, idx) => (
                    <tr
                      key={item?._id}
                      className="h-20 text-sm border leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                    >
                      <td className="text-center cursor-pointer">{idx + 1}</td>
                      <td className="text-center px-4">{item?.name}</td>
                      <td className="text-center px-4">{item?.email}</td>
                      <td className="text-center px-4">{item?.phoneNumber}</td>
                      <td className="text-center px-4">{item?.address}</td>
                      <td className="text-center pr-4">
                        <Link href={item?.cv} target="_blank">
                          <LuDownloadCloud className="md:text-xl text-base" />
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>There are no data available!</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
