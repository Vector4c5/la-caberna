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
            <span
              className="absolute bottom-0 left-0 h-0 w-full transition-all duration-700
                ease-out transform translate-x-0 bg-teal-400 group-hover:h-full opacity-90"
            ></span>
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
          <div className="w-full h-28">
            <Header />
          </div>

          <div className="flex flex-col items-center w-full h-auto mt-6">
            <h2 className="text-3xl text-center w-full text-white text-shadow-lg shadow-purple-100 font-['Press_Start_2P']
            bg-black bg-opacity-40 rounded-2xl p-5">
              ¡Bienvenido a la caverna!
            </h2>
            <p className="text-center text-xl mb-5 p-5 font-['Press_Start_2P'] 
            bg-black bg-opacity-40 rounded-2xl">
              Si eres un aventurero novato o un Dungeon Master en busca de
              recursos, has llegado al lugar correcto. En **La Caverna**,
              encontrarás guías, herramientas y consejos para comenzar tu viaje
              en Dungeons & Dragons. Desde reglas básicas hasta ideas para
              crear tu propia campaña, aquí tienes todo lo necesario para
              adentrarte en el mundo del rol. ¡Toma tu dado, reúne a tu grupo y
              prepárate para la aventura!
            </p>
          </div>

          {/* <div className="flex w-full justify-center gap-4">
            <NeonButton>Jugadores</NeonButton>
            <NeonButton>Masters</NeonButton>
          </div> */}

          <div className="flex justify-center gap-7 w-8/12 h-auto pb-10">
            <Link
              className="group relative container row-span-2 w-full h-144 bg-orange-950 bg-opacity-55 border-amber-800 border-4
            border-solid hover:scale-105 transition-all ease-out duration-700"
              href="/jugadores"
            >
              <div
                className="absolute w-full h-full bg-cover bg-center opacity-60 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(/Escudo_espada.jpeg)`,
                }}
              />
              <div className="relative h-full w-full flex justify-center items-end z-50">
                <h3 className="text-3xl font-['Press_Start_2P']">jugadores</h3>
              </div>
            </Link>

            <Link
              className="group relative w-full h-144 bg-green-950 bg-opacity-55 
            border-emerald-700 border-4 border-solid
            hover:scale-105 transition-all ease-out duration-700"
              href="/masters"
            >
              <div
                className="absolute w-full h-full bg-cover bg-center opacity-60 transition-all
                group-hover:opacity-100"
                style={{
                  backgroundImage: `url(/Mago.jpeg)`,
                }}
              />
              <div className="relative h-full w-full flex justify-center items-end z-50">
                <h3 className="text-3xl font-['Press_Start_2P']">Masters</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
