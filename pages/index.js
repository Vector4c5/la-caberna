import Image from "next/image";
import React, { useState } from "react";
import Fondo_bienvenida from "../public/img_inicio.jpeg";
import Fondo_interior_caverna from "../public/img_interior_caverna.jpeg";
import Flecha from "../public/flecha-derecha.png";
import Header from "@/components/common/Header";
import NeonButton from "@/components/common/NeonButton";
import SeccionButton from "@/components/common/SeccionButton";
import StarAnimation from "@/components/common/StartAnimation";
import MessageButton from "@/components/common/MessageButton";
import Link from "next/link";

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
          alt="Fondo bienvenida"
          className="absolute object-cover w-full h-screen opacity-25"
        />

        <div className="relative flex flex-col justify-center items-center w-full h-screen p-8 z-10">
          <h1 className="text-justify font-extrabold text-white text-9xl font-dm-serif text-shadow-xl">
            La Caverna
          </h1>
          <p className="pl-3 pb-4 text-white text-4xl font-dm-serif text-shadow-xl">
            ¡Un mundo de aventuras te espera!
          </p>

          <button
            className="w-2/6 h-12 px5 py2.5 mt-2 relative rounded group overflow-hidden font-medium
              bg-black bg-opacity-30 text-white border-8 border-double border-teal-500 inline-block transition-all duration-500 shadow-lg shadow-teal-300
              ease-out transform hover:scale-95"
            onClick={toggleSection}
          >
            <span className="absolute bottom-0 left-0 h-0 w-full transition-all duration-700
                ease-out transform translate-x-0 bg-teal-400 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-black font-mono text-2xl">
              ¡Inicia tu aventura!
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
          alt="Fondo interior caverna"
          className="fixed top-0 left-0 w-full h-full object-cover opacity-15 z-0"
        />

        <div className="relative container flex flex-col items-center w-11/12 h-full z-10 mt-8 ">
          <Header />

          <div className="flex flex-col items-start w-full h-auto mt-6">
            <h2 className="text-5xl text-white text-shadow-lg shadow-purple-100 mb-4">
              ¡Bienvenido a la caverna!
            </h2>
            <h3 className="text-2xl text-white text-shadow-lg shadow-purple-100 mb-8">
              Ven, y prepárate para tu próxima aventura
            </h3>
          </div>

          {/* <div className="flex w-full justify-center gap-4">
            <NeonButton>Jugadores</NeonButton>
            <NeonButton>Masters</NeonButton>
          </div> */}

          <div className="flex flex-col w-10/12 mt-8 mb-8 gap-4">
            <SeccionButton link="/personaje">
              <div className="flex w-full h-full justify-between items-center m-0 p-0 text-white">
                <div className="flex flex-col h-full w-full justify-end">
                  <h2 className="text-start text-4xl font-serif mn-2">
                    Crea tu personaje
                  </h2>
                  <p className="text-start">
                    Utiliza nuestras guías y crea tu próximo personaje
                  </p>
                </div>
                <img
                  src={Flecha.src}
                  alt="Descripción de la imagen"
                  className="opacity-80 h-16 w-16 mr-0"
                />
              </div>
            </SeccionButton>

            <SeccionButton link="https://www.ejemplo.com">
              <div className="flex w-full h-full justify-between items-center m-0 p-0">
                <div className="flex flex-col h-full w-full justify-end">
                  <h2 className="text-start text-4xl font-serif mn-2 text-white">
                    Crea tu personaje
                  </h2>
                  <p className="text-white text-start">
                    Utiliza nuestras guías y crea tu próximo personaje
                  </p>
                </div>
                <img
                  src={Flecha.src}
                  alt="Descripción de la imagen"
                  className="opacity-80 h-16 w-16 mr-0"
                />
              </div>
            </SeccionButton>
            <SeccionButton link="https://www.ejemplo.com">
              <div className="flex w-full h-full justify-between items-center m-0 p-0">
                <div className="flex flex-col h-full w-full justify-end">
                  <h2 className="text-start text-4xl font-serif mn-2 text-white">
                    Crea tu personaje
                  </h2>
                  <p className="text-white text-start">
                    Utiliza nuestras guías y crea tu próximo personaje
                  </p>
                </div>
                <img
                  src={Flecha.src}
                  alt="Descripción de la imagen"
                  className="opacity-80 h-16 w-16 mr-0"
                />
              </div>
            </SeccionButton>
            <SeccionButton link="https://www.ejemplo.com">
              <div className="flex w-full h-full justify-between items-center m-0 p-0">
                <div className="flex flex-col h-full w-full justify-end">
                  <h2 className="text-start text-4xl font-serif mn-2 text-white">
                    Crea tu personaje
                  </h2>
                  <p className="text-white text-start">
                    Utiliza nuestras guías y crea tu próximo personaje
                  </p>
                </div>
                <img
                  src={Flecha.src}
                  alt="Descripción de la imagen"
                  className="opacity-80 h-16 w-16 mr-0"
                />
              </div>
            </SeccionButton>
          </div>
          <div className="flex w-11/12 h-auto my-6 mx-10 gap-5">
            <MessageButton>
              <div className="h-full w-full flex flex-col justify-between items-center">
                <img
                  src={Flecha.src}
                  alt="Descripción de la imagen"
                  className="opacity-80 h-2/3 w-full mr-0"
                />
                <div className="h-1/3 w-full border-t-4 border-purple-900">
                  <p className="text-2xl text-start p-4">Aquin ira un titulo</p>
                </div>
              </div>
            </MessageButton>

            <MessageButton>
              <div className="h-full w-full flex flex-col justify-between items-center">
                <img
                  src={Flecha.src}
                  alt="Descripción de la imagen"
                  className="opacity-80 h-2/3 w-full mr-0"
                />
                <div className="h-1/3 w-full border-t-4 border-purple-900">
                  <p className="text-2xl text-start p-4">Aquin ira un titulo</p>
                </div>
              </div>
            </MessageButton>

            <MessageButton>
              <div className="h-full w-full flex flex-col justify-between items-center">
                <img
                  src={Flecha.src}
                  alt="Descripción de la imagen"
                  className="opacity-80 h-2/3 w-full mr-0"
                />
                <div className="h-1/3 w-full border-t-4 border-purple-900">
                  <p className="text-2xl text-start p-4">Aquin ira un titulo</p>
                </div>
              </div>
            </MessageButton>

            <MessageButton>
              <div className="h-full w-full flex flex-col justify-between items-center">
                <img
                  src={Flecha.src}
                  alt="Descripción de la imagen"
                  className="opacity-80 h-2/3 w-full mr-0"
                />
                <div className="h-1/3 w-full border-t-4 border-purple-900">
                  <p className="text-2xl text-start p-4">Aquin ira un titulo</p>
                </div>
              </div>
            </MessageButton>
          </div>
          <div className="w-full flex flex-row-reverse">
            <button className="text-2xl border-b-2 border-white mb-5">
              Mostrar mas:
            </button>
          </div>
          <div className="flex w-11/12 h-auto my-6 mx-10 gap-5">
            <MessageButton>
              <div className="h-full w-full flex flex-col justify-between items-center">
                <img
                  src={Flecha.src}
                  alt="Descripción de la imagen"
                  className="opacity-80 h-2/3 w-full mr-0"
                />
                <div className="h-1/3 w-full border-t-4 border-purple-900">
                  <p className="text-2xl text-start p-4">Aquin ira un titulo</p>
                </div>
              </div>
            </MessageButton>

            <MessageButton>
              <div className="h-full w-full flex flex-col justify-between items-center">
                <img
                  src={Flecha.src}
                  alt="Descripción de la imagen"
                  className="opacity-80 h-2/3 w-full mr-0"
                />
                <div className="h-1/3 w-full border-t-4 border-purple-900">
                  <p className="text-2xl text-start p-4">Aquin ira un titulo</p>
                </div>
              </div>
            </MessageButton>

            <MessageButton>
              <div className="h-full w-full flex flex-col justify-between items-center">
                <img
                  src={Flecha.src}
                  alt="Descripción de la imagen"
                  className="opacity-80 h-2/3 w-full mr-0"
                />
                <div className="h-1/3 w-full border-t-4 border-purple-900">
                  <p className="text-2xl text-start p-4">Aquin ira un titulo</p>
                </div>
              </div>
            </MessageButton>

            <MessageButton>
              <div className="h-full w-full flex flex-col justify-between items-center">
                <img
                  src={Flecha.src}
                  alt="Descripción de la imagen"
                  className="opacity-80 h-2/3 w-full mr-0"
                />
                <div className="h-1/3 w-full border-t-4 border-purple-900">
                  <p className="text-2xl text-start p-4">Aquin ira un titulo</p>
                </div>
              </div>
            </MessageButton>
          </div>
          <div className="w-full flex flex-row-reverse">
            <button className="text-2xl border-b-2 border-white mb-5">
              Mostrar mas:
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
