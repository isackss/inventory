import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white mb-4">
      <div>Project Inventory</div>
      <ul className="flex space-x-4">
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
    </nav>
  );
};

export default Navbar;
