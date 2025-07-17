import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`sm:hidden absolute top-0 right-0 bg-gray-900 text-white w-64 h-full shadow-lg z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <ul className="flex flex-col space-y-4 bg-gray-800 text-white p-4 rounded-lg">
        <div>
          <Image
            src="/assets/img/logo.png"
            alt="Project Logo"
            width={50}
            height={50}
          />
        </div>
        <Link href="/" onClick={toggleSidebar}>
          <li className="hover:bg-gray-700 p-4 rounded">Home</li>
        </Link>
        <Link href="/departments" onClick={toggleSidebar}>
          <li className="hover:bg-gray-700 p-4 rounded">Departments</li>
        </Link>
        <Link href="/inventory" onClick={toggleSidebar}>
          <li className="hover:bg-gray-700 p-4 rounded">Inventory</li>
        </Link>
        <Link href="/clients" onClick={toggleSidebar}>
          <li className="hover:bg-gray-700 p-4 rounded">Clients</li>
        </Link>
      </ul>
      <button
        className="absolute top-2 right-2 px-4 py-2 bg-gray-700 rounded-full "
        onClick={toggleSidebar}
      >
        X
      </button>
    </div>
  );
};

export default Sidebar;
