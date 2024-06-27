import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-yellow-300">
      <div className="flex justify-between items-center max-w-6xl mx-auto md:px-5 px-4">
        <div>IT LOGIKO</div>

        <ul className="flex gap-4">
          <li className="md:py-4 py-3 ">
            <Link
              className="duration-100 transition-all hover:border-b border-black"
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li className="md:py-4 py-3 ">
            <Link
              href={"/dashboard"}
              className="duration-100 transition-all hover:border-b border-black"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
