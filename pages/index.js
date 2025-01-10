import Image from "next/image";
import React, { useState } from "react";
import Fondo_bienvenida from "../public/img_inicio.jpeg";
import Fondo_interior_caverna from "../public/img_interior_caverna.jpeg";
import NeonButton from "@/components/common/NeonButton";
import SeccionButton from "@/components/common/SeccionButton";
import StarAnimation from "@/components/common/StartAnimation"; // Importar el componente
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [showFirst, setShowFirst] = useState(true);

  const toggleSection = () => setShowFirst(!showFirst);

  return (
    <div className="flex flex-col items-center relative w-full h-screen bg-black overflow-hidden">
      {/* Primera Sección */}
      <div
        className={`absolute transition-opacity duration-700 ${
          showFirst ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } relative min-w-full min-h-screen flex flex-row`}
      >
        <StarAnimation />

        <Image
          src={Fondo_bienvenida}
          alt="Descripción de la imagen"
          className="absolute opacity-25 h-screen w-full"
        />

        {/* Parte Izquierda */}
        <div 
          id="Parte_izq"
          className="relative flex flex-col justify-end items-start w-1/2 h-screen p-8 z-10"
        > 
          <h1 className="text-justify font-extrabold text-white text-9xl font-dm-serif">
            La Caverna
          </h1>
          <p className="pl-3 pb-8 text-white text-4xl font-dm-serif">
            ¡¡Un mundo de aventuras te espera!!
          </p>
        </div>

        {/* Parte Derecha */}
        <div
          id="Parte_der"
          className="relative flex items-start justify-center w-1/2 h-screen z-10"
        >
          <button
            onClick={toggleSection}
            className="flex items-center justify-center mt-10 border-2 bg-slate-200 border-gray-400 shadow-[0_0_20px_10px_rgba(255,255,255,0.5)] 
             bg-opacity-50 rounded-full overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110"
            style={{
              width: "clamp(200px, 12vw, 500px)",
              aspectRatio: "1",
            }}
            >
            <p className="text-xl text-white text-center px-4">
              Viaja a tu nueva aventura
            </p>
          </button>
        </div> 
      </div>


      {/* Segunda Sección */}
      <div
        className={`absolute transition-opacity duration-700 ${
          !showFirst ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } flex flex-col items-center justify-center w-full  h-screen`}
      >
        <div 
          className="relative h-screen w-full bg-cover bg-fixed bg-center overflow-y-auto"
          style={{
            backgroundImage: `url(${Fondo_interior_caverna.src})`,
            opacity: 0.5, // Aplicando opacidad solo al fondo
          }}
        >
          <div 
            className="flex flex-col absolute w-full h-screen justify-start items-center"
          >
            <div 
              className="flex justify-center w-4/5 mt-7"
            >
              <div 
                className="m-4 w-1/2"
              >
                <NeonButton 
                  href="https://www.ejemplo.com"
                >
                  Jugadores
                </NeonButton>
              </div>

              <div 
                className="m-4 w-1/2"
              >
                <NeonButton 
                  href="https://www.ejemplo.com"
                >
                  Masters
                </NeonButton>
              </div>

            </div>

            <div className="flex w-4/6 h-auto justify-center mt-5 px-4">
              <div className="flex flex-col m-4 w-full">
                <SeccionButton
                  message="¡Bienvenido a la caverna! Estás a punto de embarcarte en una gran aventura."
                  link="https://www.ejemplo.com"
                >
                  Aprende A Jugar
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
                  Descubre hechizos
                </SeccionButton>
                <SeccionButton
                  message="¡Bienvenido a la caverna! Estás a punto de embarcarte en una gran aventura."
                  link="https://www.ejemplo.com"
                >
                  Sección 4
                </SeccionButton>
                <SeccionButton
                  message="¡Bienvenido a la caverna! Estás a punto de embarcarte en una gran aventura."
                  link="https://www.ejemplo.com"
                >
                  Sección 4
                </SeccionButton>
                <SeccionButton
                  message="¡Bienvenido a la caverna! Estás a punto de embarcarte en una gran aventura."
                  link="https://www.ejemplo.com"
                >
                  Sección 4
                </SeccionButton>
              </div>

              <div className="m-4 w-full">
                <SeccionButton
                  message="¡Bienvenido a la caverna! Estás a punto de embarcarte en una gran aventura."
                  link="https://www.ejemplo.com"
                >
                  Sección 3
                </SeccionButton>
              
                <SeccionButton
                  message="¡Bienvenido a la caverna! Estás a punto de embarcarte en una gran aventura."
                  link="https://www.ejemplo.com"
                >
                  Sección 4
                </SeccionButton>
                <SeccionButton
                  message="¡Bienvenido a la caverna! Estás a punto de embarcarte en una gran aventura."
                  link="https://www.ejemplo.com"
                >
                  Sección 4
                </SeccionButton>
                <SeccionButton
                  message="¡Bienvenido a la caverna! Estás a punto de embarcarte en una gran aventura."
                  link="https://www.ejemplo.com"
                >
                  Sección 4
                </SeccionButton>
                <SeccionButton
                  message="¡Bienvenido a la caverna! Estás a punto de embarcarte en una gran aventura."
                  link="https://www.ejemplo.com"
                >
                  Sección 4
                </SeccionButton>
                <SeccionButton
                  message="¡Bienvenido a la caverna! Estás a punto de embarcarte en una gran aventura."
                  link="https://www.ejemplo.com"
                >
                  Sección 4
                </SeccionButton>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Toaster para mostrar los mensajes */}
      <Toaster position="top-center" />
    </div>
  );
}
