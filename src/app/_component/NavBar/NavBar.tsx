import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-yellow-300">
      <div className="flex justify-between max-w-6xl mx-auto md:px-5 px-4">
        <div>IT LOGIKO</div>

        <ul className="flex gap-4">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>Form</li>
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
