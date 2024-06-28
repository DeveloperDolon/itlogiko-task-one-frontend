"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const router = usePathname();

  return (
    <div className="bg-yellow-300">
      <div className="flex justify-between items-center max-w-6xl mx-auto md:px-5 px-4">
        <div>IT LOGIKO</div>

        <ul className="flex gap-4">
          <li className="md:py-4 py-3 ">
            <Link
              className={`duration-100 transition-all hover:border-b border-black ${
                router === "/" && "border-b"
              }`}
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li className="md:py-4 py-3 ">
            <Link
              href={"/dashboard"}
              className={`duration-100 transition-all hover:border-b border-black ${
                router === "/dashboard" && "border-b"
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li className="md:py-4 py-3 ">
            <Link
              href={"/login"}
              className={`duration-100 transition-all hover:border-b border-black ${
                router === "/login" && "border-b"
              }`}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
