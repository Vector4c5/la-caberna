import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Fondo_bienvenida from "../public/img_inicio.jpeg";
import Fondo_interior_caverna from "../public/img_interior_caberna.jpeg";
import NeonButton from "@/components/common/NeonButton";
import SeccionButton from "@/components/common/SeccionButton"; // Importar el nuevo botón
import { Toaster } from 'react-hot-toast'; // Importar Toaster
import MessageButton from "@/components/common/MessageButton ";

export default function Home() {
  const [showFirst, setShowFirst] = useState(true);
  const containerRef = useRef(null);

  const toggleSection = () => setShowFirst(!showFirst);

  return (
    <div className="flex flex-col items-center relative w-full h-screen bg-black">
      <div
        className={`absolute transition-opacity duration-700 ${
          showFirst ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } min-w-full min-h-screen flex flex-col items-center justify-center`}
      >
        <Image
          src={Fondo_bienvenida}
          alt="Descripción de la imagen"
          className="relative opacity-25 h-screen z-2"
        />
        <div
          ref={containerRef}
          className="absolute flex flex-col items-center justify-center border-4 border-white rounded-full"
          style={{
            width: 'clamp(200px, 30vw, 500px)',
            aspectRatio: '1',
          }}
        >
          <h1 className="text-center font-bold text-white text-7xl">La Caverna</h1>
          <p className="text-center text-white">Un mundo de aventuras te espera.</p>
          <button
            onClick={toggleSection}
            className="mt-4 px-4 py-2 bg-white text-black rounded-lg h-max w-fit text-sm font-semibold 
            hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white 
            hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
          >
            ¡¡Inicia tu aventura!!
          </button>
        </div>
      </div>

      <div
        className={`absolute transition-opacity duration-700 ${
          !showFirst ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } flex flex-col items-center justify-center`}
      >
        <Image
          src={Fondo_interior_caverna}
          alt="Descripción de la imagen"
          className="relative opacity-25 h-screen z-2"
        />
        <div className="flex flex-col absolute object-center">
        <div>
            {/* Usando NeonButton */}
            <NeonButton href="https://www.ejemplo.com">
              Visitar Ejemplo
            </NeonButton>
          </div>

          <div>
            {/* Usando MessageButton con mensaje personalizado */}
            <MessageButton message="¡Bienvenido a la Caverna, aventura te espera!" >
              ¡Haz clic aquí para empezar!
            </MessageButton>
          </div>
          <div>
            {/* Usando SeccionButton con mensaje personalizado y enlace */}
            <SeccionButton 
              message="¡Bienvenido a la caverna! Estás a punto de embarcarte en una gran aventura." 
              link="https://www.ejemplo.com"
            >
              ¡Haz clic para empezar tu aventura!
            </SeccionButton>
          </div>

          <h1 className="text-4xl text-white">Segunda Sección</h1>
          <p className="text-lg text-white">Esta es la segunda sección visible.</p>
        </div>
      </div>

      {/* Toaster para mostrar los mensajes */}
      <Toaster position="top-center" />
    </div>
  );
}
