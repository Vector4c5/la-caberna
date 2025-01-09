import Image from "next/image";
import React, { useState, useRef } from "react";
import Fondo_bienvenida from "../public/img_inicio.jpeg";
import Fondo_interior_caverna from "../public/img_interior_caberna.jpeg";
import NeonButton from "@/components/common/NeonButton";
import SeccionButton from "@/components/common/SeccionButton";
import MessageButton from "@/components/common/MessageButton";
import StarAnimation from "@/components/common/StartAnimation"; // Importar el componente
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";


export default function Home() {
  const [showFirst, setShowFirst] = useState(true);
  const containerRef = useRef(null);

  const toggleSection = () => setShowFirst(!showFirst);

  return (
    <div className="flex flex-col items-center relative w-full h-screen bg-black overflow-hidden">

      {/* Primera Sección */}
      <div
        className={`absolute transition-opacity duration-700 ${
          showFirst ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } relative min-w-full min-h-screen flex flex-col items-center justify-center`}
      >
        <StarAnimation />
        <Image
          src={Fondo_bienvenida}
          alt="Descripción de la imagen"
          className="relative opacity-25 h-screen z-2"
        />
        <button
        onClick={toggleSection}
        className="absolute flex flex-col items-center justify-center bg-white rounded-full overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110"
        style={{
          width: "clamp(200px, 25vw, 500px)",
          aspectRatio: "1",
        }}
      >
          <h1 className="text-center font-extrabold text-black text-6xl font-mono">
            La Caverna
          </h1>
          <p className="text-center text-black text-xl font-mono">
            Un mundo de aventuras te espera.
          </p>
      </button>
      </div>

      {/* Segunda Sección */}
      <div
        className={`absolute transition-opacity duration-700 ${
          !showFirst ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } flex flex-col items-center justify-center w-full  h-screen`}
      >
        <Image
          src={Fondo_interior_caverna}
          alt="Descripción de la imagen"
          className="relative opacity-25 h-screen z-2"
        />
        <div className="flex flex-col absolute w-full h-screen justify-center items-center">
          <div className="flex justify-center w-screen">
            <NeonButton href="https://www.ejemplo.com">Visitar Ejemplo</NeonButton>
            <NeonButton href="https://www.ejemplo.com">Visitar Ejemplo</NeonButton>
          </div>
          <div>
            <MessageButton message="¡Bienvenido a la Caverna, aventura te espera!">
              ¡Haz clic aquí para empezar!
            </MessageButton>
          </div>
          <div>
            <SeccionButton
              message="¡Bienvenido a la caverna! Estás a punto de embarcarte en una gran aventura."
              link="https://www.ejemplo.com"
            >
              ¡Haz clic para empezar tu aventura!
            </SeccionButton>
          </div>
          <h1 className="text-4xl text-white font-mono">Segunda Sección</h1>
          <p className="text-lg text-white font-mono">Esta es la segunda sección visible.</p>
        </div>
      </div>

      {/* Toaster para mostrar los mensajes */}
      <Toaster position="top-center" />
    </div>
  );
}




