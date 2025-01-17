import { useSession, signIn, signOut } from "next-auth/react";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import imgUsuario from "@/public/img_usuario.jpg";

export default function LoginBtn() {
  const { data: session } = useSession();
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  return (
    <div className="flex flex-col z-50">
      {session ? (
        <>
          <div className="flex gap-2 group relative">
            <button
              onClick={() => setShowLoginOptions(!showLoginOptions)}
              className="flex transition-transform group-hover:-translate-x-3 gap-2 text-center h-full hover:text-teal-400"
            >
              <p>{session.user.name}</p>
            </button>
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
          </div>

          <div
            className={`flex justify-end mt-2 transition-all duration-500 ease-in-out overflow-hidden ${
              showLoginOptions ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
            }`}
          >
            <div
              className="flex flex-col justify-center items-center w-72 p-4 bg-black  text-white rounded absolute my-8 mx-0 gap-2 
          border-2 border-white botder-solid"
            >
              <img
                src={session.user.image}
                alt="Foto de usuario"
                className="relative h-auto w-28 rounded-full border-4 border-solid border-slate-800"
              />
              <p className="h-auto w-full text-sm text-center">
                {" "}
                {session.user.email}
              </p>
              <p className="text-center text-lg">
                Bienvenido {session.user.name}{" "}
              </p>

              <button
                onClick={() => signOut()}
                className="w-full h-auto px-4 py-2 text-lg border-b-2 border-white transition-transform duration-500 ease-out hover:scale-105
                hover:shadow-sm hover:shadow-white"
              >
                Salir
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2 group relative">
            <button
              onClick={() => setShowLoginOptions(!showLoginOptions)}
              className="flex transition-transform group-hover:-translate-x-3 gap-2 text-center h-full"
            >
              <FaUser /> Inicia Sesión
            </button>
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
          </div>
          <div
            className={`flex justify-end mt-2 transition-all duration-500 ease-in-out overflow-hidden ${
              showLoginOptions ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
            }`}
          >
            <div
              className="flex flex-col justify-center items-center w-72 p-4 bg-black  text-white rounded absolute my-8 
          border-2 border-white botder-solid"
            >
              <img
                src={imgUsuario.src}
                alt="Descripción de la imagen"
                className="relative h-auto w-28 rounded-full border-4 border-solid border-slate-800"
              />
              <p className="text-xl m-2 text-center">¡¡Unetre a nosotros!!</p>
              <button
                onClick={() => signIn()}
                className="w-full h-auto px-4 py-2 text-lg border-b-2 border-white transition-transform duration-500 ease-out hover:scale-105
                hover:shadow-sm hover:shadow-white"
              >
                Inicia secion con google
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
