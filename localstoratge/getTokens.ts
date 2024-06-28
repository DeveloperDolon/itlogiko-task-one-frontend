import { useState, useEffect } from "react";

export const useToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const token = localStorage.getItem("token");
      setToken(token as string);
    }
  });
  setTimeout(() => {}, 2000);

  return token;
};
