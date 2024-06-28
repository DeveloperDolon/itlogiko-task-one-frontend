"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { ReactNode } from "react";
import { useToken } from "../../../localstoratge/getTokens";

export type TContext = {
  name: string;
  isAdminUser: string | null;
  adminToken: boolean;
  setToken: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<TContext | undefined>(undefined);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const token = useToken();

  const [adminToken, setToken] = useState(token ? true : false);

  const values: TContext = {
    name: "dolon",
    isAdminUser: token,
    adminToken,
    setToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default ContextProvider;
