import Link from "next/link";
import { FaHome, FaUser, FaBook, FaBars } from "react-icons/fa";
import { useState } from "react";
import LoginBtn from "./Login-Btn";

const navLinks = [
  { href: "/", label: "Inicio", icon: <FaHome /> },
  { href: "/jugadores", label: "Jugadores", icon: <FaUser /> },
  { href: "/masters", label: "Masters", icon: <FaBook /> },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-full mb-8 text-2xl text-white py-2 px-0 container flex justify-between items-center
          border-t-2 border-b-2 border-white border-solid z-40 relative">
      <h1 className="text-5xl font-serif m-5">
        La Caverna
      </h1>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          <FaBars className="w-8 h-8" />
        </button>
      </div>
      <ul className={`flex-col md:flex-row md:flex justify-around items-center gap-4 transition-all duration-300 ease-in-out 
        ${menuOpen ? 'flex flex-col items-center justify-center absolute top-full right-0 w-2/3 bg-black p-10' : 'hidden'} md:flex flex-col`}>
        {navLinks.map(({ href, label, icon }) => (
          <li key={href} className="flex text-center items-center gap-2 group relative">
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
            <Link href={href} className="flex text-center transition-transform group-hover:translate-x-2 gap-2">
              {icon}
              {label}
            </Link>
            
          </li>
        ))}
        <LoginBtn/>
      </ul>
    </nav>
  );
}
