import { ReactNode } from "react";

const MyContainer = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-6xl md:px-5 px-4 mx-auto">{children}</div>;
};

export default MyContainer;
