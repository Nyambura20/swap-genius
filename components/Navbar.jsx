import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 shadow-md bg-white">
      <ul className="flex justify-between max-w-4xl mx-auto">
        <li>
          <Link href="/" className="text-lg font-semibold">
            SwapGenius
          </Link>
        </li>
        <li>
          <Link href="/explore" className="text-blue-500">
            Explore Skills
          </Link>
        </li>
      </ul>
    </nav>
  );
}
