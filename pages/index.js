import Image from "next/image";
import React, { useState } from "react";
import Fondo_bienvenida from "../public/img_inicio.jpeg";
import Fondo_interior_caverna from "../public/img_interior_caverna.jpeg";
import NeonButton from "@/components/common/NeonButton";
import SeccionButton from "@/components/common/SeccionButton";
import StarAnimation from "@/components/common/StartAnimation"; 
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import MessageButton from "@/components/common/MessageButton";

export default function Home() {
  const [showFirst, setShowFirst] = useState(true);

  const toggleSection = () => setShowFirst(!showFirst);

  return (
    <div className="flex flex-col items-center relative w-full h-screen bg-black overflow-hidden">
      {/* Primera Sección */}
      <div
        className={`absolute transition-opacity duration-700 ${
          showFirst
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } relative w-full h-screen flex flex-row`}
      >
        <StarAnimation />

        <img
          src={Fondo_bienvenida.src}
          alt="Descripción de la imagen"
          className="absolute opacity-25 h-screen w-full"
        />

        {/* Parte Izquierda */}
        <div
          id="Parte_izq"
          className="relative flex flex-col justify-center items-center w-full h-screen p-8 z-10"
        >
          <h1 className="text-justify font-extrabold text-white text-9xl font-dm-serif text-shadow-xl">
            La Caverna
          </h1>
          <p className="pl-3 pb-4 text-white text-4xl font-dm-serif text-shadow-xl">
            ¡¡Un mundo de aventuras te espera!!
          </p>

          <button
            className="w-2/6 h-12 px5 py2.5 mt-2 relative rounded group overflow-hidden font-medium
              bg-black bg-opacity-30 text-white border-8 border-double border-teal-500 inline-block transition-all duration-500 shadow-lg shadow-teal-300
              ease-out transform hover:scale-95"
            onClick={toggleSection}
          >
            <span
              className="absolute bottom-0 left-0 h-0 w-full transition-all duration-700
                ease-out transform translate-x-0 bg-teal-400 group-hover:h-full opacity-90"
            ></span>
            <span className="relative group-hover:text-black font-mono text-2xl">
              ¡¡Inicia tu aventura!!
            </span>
          </button>
        </div>
      </div>

      {/* Segunda Sección */}
      <div
        className={`absolute transition-opacity duration-700 ${
          !showFirst
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } w-full h-screen flex flex-col items-center overflow-y-auto`}
      >
        <img
          src={Fondo_interior_caverna.src}
          alt="Descripción de la imagen"
          className="fixed top-0 left-0 w-full h-full opacity-25 z-0"
        />

        <div className="relative container flex flex-col items-center w-11/12 h-full z-10 mt-8">
          <div className="flex justify-between items-center w-full h-20 border-t-2 border-b-2 border-white border-solid">
            <h1 className="text-5xl font-serif m-2">La Caverna</h1>
            <div className="bg-white rounded-full text-black px-4 py-2">
              Usuario
            </div>
          </div>

          <div className="flex flex-col items-start w-full h-auto mt-6">
            <h2 className="text-5xl text-white text-shadow-lg shadow-purple-100 mb-4">
              ¡Bienvenido a la caverna!
            </h2>
            <h3 className="text-2xl text-white text-shadow-lg shadow-purple-100 mb-8">
              Ven, y prepárate para tu próxima aventura
            </h3>
          </div>

          <div className="flex w-full justify-center gap-4">
            <NeonButton>Jugadores</NeonButton>
            <NeonButton>Masters</NeonButton>
          </div>

          <div className="flex flex-col w-10/12 mt-8 mb-8 gap-4">
            <SeccionButton
              message="¡Bienvenido a la caverna! Estás a punto de embarcarte en una gran aventura."
              link="https://www.ejemplo.com"
            >
              Descubre Tu Raza
            </SeccionButton>
            <SeccionButton
              message="¡Bienvenido a la caverna! Estás a punto de embarcarte en una gran aventura."
              link="https://www.ejemplo.com"
            >
              Descubre Tu Raza
            </SeccionButton>
            <SeccionButton
              message="¡Bienvenido a la caverna! Estás a punto de embarcarte en una gran aventura."
              link="https://www.ejemplo.com"
            >
              Descubre Tu Raza
            </SeccionButton>
            <SeccionButton
              message="¡Bienvenido a la caverna! Estás a punto de embarcarte en una gran aventura."
              link="https://www.ejemplo.com"
            >
              Descubre Tu Raza
            </SeccionButton>
            
          </div>
          <div className="flex w-full h-auto m-4 gap-4">
            <MessageButton></MessageButton>

            <MessageButton></MessageButton>

            <MessageButton></MessageButton>

            <MessageButton></MessageButton>

          </div>
          <div className="w-full flex flex-row-reverse">
            <button className="text-2xl border-b-2 border-white mb-5">Mostrar mas:</button>

          </div>
          <div className="flex w-full h-auto m-4 gap-4">
            <MessageButton></MessageButton>

            <MessageButton></MessageButton>

            <MessageButton></MessageButton>

            <MessageButton></MessageButton>

          </div>
          <div className="w-full flex flex-row-reverse">
            <button className="text-2xl border-b-2 border-white mb-5">Mostrar mas:</button>

          </div>
        </div>
      </div>

      {/* Toaster para mostrar los mensajes */}
      <Toaster position="top-center" />
    </div>
  );
}
