import Link from "next/link";
import { FaHome, FaUser, FaBook } from "react-icons/fa";
import LoginBtn from "./Login-Btn";

const navLinks = [
  { href: "/", label: "Inicio", icon: <FaHome /> },
  { href: "/jugadores", label: "Jugadores", icon: <FaUser /> },
  { href: "/masters", label: "Masters", icon: <FaBook /> },
];

export default function Header() {
  return (
    <nav className="w-full h-full mb-8 text-2xl text-white py-2 px-0 container flex justify-between items-center
          border-t-2 border-b-2 border-white border-solid z-40">
            <h1 className="text-5xl font-serif m-5">
              La Caverna
            </h1>
      <ul className="flex justify-around items-center gap-4">
        {navLinks.map(({ href, label, icon }) => (
          <li key={href} className="flex items-center gap-2 group relative">
            <Link href={href} className="flex transition-transform group-hover:-translate-x-3 gap-2">
              {icon}
              {label}
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 4.5l7.5 7.5-7.5 7.5m6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </li>
        ))}
        <LoginBtn/>
      </ul>
    </nav>
  );
}
