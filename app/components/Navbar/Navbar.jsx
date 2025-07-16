import Image from "next/image";
import Link from "next/link";
import Sidebar from "../Sidebar/Sidebar";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white mb-4">
      <div className="flex items-center space-x-2">
        <Image
          src="/assets/img/logo.png"
          alt="Project Logo"
          width={50}
          height={50}
        />
        <div>
          <div>Project Inventory</div>
          <div className="text-xs text-gray-300">
            Manage your inventory efficiently
          </div>
        </div>
      </div>
      <ul className="sm:flex space-x-4 hidden">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/departments">
          <li>Departments</li>
        </Link>
        <Link href="/inventory">
          <li>Inventory</li>
        </Link>
        <Link href="/clients">
          <li>Clients</li>
        </Link>
      </ul>
      <Sidebar />
    </nav>
  );
};
