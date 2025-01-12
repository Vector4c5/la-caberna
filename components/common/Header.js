import Link from "next/link";
import { FaHome, FaUser, FaBook } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="w-full bg-black bg-opacity-70 text-white py-4 px-8 fixed top-0 z-50">
      <ul className="flex justify-around items-center">
        <li className="flex items-center gap-2">
          <FaHome />
          <Link href="/">Inicio</Link>
        </li>
        <li className="flex items-center gap-2">
          <FaUser />
          <Link href="/jugadores">Jugadores</Link>
        </li>
        <li className="flex items-center gap-2">
          <FaBook />
          <Link href="/masters">Masters</Link>
        </li>
        <li className="flex items-center gap-2">
          <FaBook />
          <Link href="/aventuras">Aventuras</Link>
        </li>
      </ul>
    </nav>
  );
}
