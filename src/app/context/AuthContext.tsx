import { createContext } from "react";
import { ReactNode } from "react";

export const AuthContext = createContext({});

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const values = {
    name: "dolon",
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default ContextProvider;
