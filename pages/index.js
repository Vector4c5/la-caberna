import React, { useState } from "react";
import Header from "@/components/common/Header";
import SeccionButton from "@/components/common/SeccionButton";
import StarAnimation from "@/components/common/StartAnimation";
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
        } relative w-full h-screen flex flex-col sm:flex-row`}
      >
        <StarAnimation />

        <img
          src="/img_inicio.jpeg"
          alt="Fondo bienvenida"
          className="absolute object-cover w-full h-screen opacity-25"
        />

        <div className="relative flex flex-col justify-center items-center w-full h-screen p-8 z-10">
          <h1 className="text-center font-extrabold text-white text-4xl sm:text-6xl md:text-9xl font-dm-serif text-shadow-xl">
            La Caverna
          </h1>
          <p className="pl-3 pb-4 text-white text-xl sm:text-2xl md:text-4xl font-dm-serif text-shadow-xl">
            ¡Un mundo de aventuras te espera!
          </p>

          <button
            className="w-3/4 sm:w-2/6 h-12 px5 py2.5 mt-2 relative rounded group overflow-hidden font-medium
              bg-black bg-opacity-30 text-white border-8 border-double border-teal-500 inline-block transition-all duration-500 shadow-lg shadow-teal-300
              ease-out transform hover:scale-95"
            onClick={toggleSection}
          >
            <span
              className="absolute bottom-0 left-0 h-0 w-full transition-all duration-700
                ease-out transform translate-x-0 bg-teal-400 group-hover:h-full opacity-90"
            ></span>
            <span className="relative group-hover:text-black font-mono text-lg sm:text-2xl">
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
        src="/img_interior_caverna.jpeg"
        alt="Welcome background"
        className="fixed top-0 left-0 w-full h-full object-cover opacity-15 z-0"
      />

        <div className="relative container flex flex-col items-center w-11/12 h-full z-10 mt-8 ">
          <div className="w-full h-28">
            <Header />
          </div>
          <StarAnimation />

          <div className="flex flex-col items-center w-full h-auto mt-6">
            <div
              className="container flex flex-col items-center w-11/12 h-auto bg-gray-800 bg-opacity-50 rounded-2xl p-5 
            border-dashed border-4 border-orange-900"
            >
              <h2 className="text-2xl sm:text-3xl text-center w-full text-white text-shadow-lg shadow-purple-100 font-['Press_Start_2P'] p-5">
                ¡Bienvenido a la caverna!
              </h2>
              <p className="text-justify text-white  text-2xl sm:text-xl mb-5 p-4">
                Si eres un aventurero novato o un Dungeon Master en busca de
                recursos, has llegado al lugar correcto. En **La Caverna**,
                encontrarás guías, herramientas y consejos para comenzar tu
                viaje en Dungeons & Dragons. Desde reglas básicas hasta ideas
                para crear tu propia campaña, aquí tienes todo lo necesario para
                adentrarte en el mundo del rol. ¡Toma tu dado, reúne a tu grupo
                y prepárate para la aventura!
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-11/12 h-auto justify-center gap-4 my-6">
            <div
              className="flex flex-col w-full sm:w-1/2 h-auto p-5 m-2 bg-gray-800 bg-opacity-50 rounded-2xl
          border-dashed border-4 border-blue-900"
            >
              <h2
                className="text-2xl text-white  sm:text-3xl text-center w-full text-whit font-['Press_Start_2P']
            p-5"
              >
                ¿Buscas con quién jugar?{" "}
              </h2>
              <p className="text-justify text-white text-2xl">
                Dungeons & Dragons (D&D) es un juego de rol donde las historias
                cobran vida en mundos de fantasía épica. Para disfrutar la
                aventura, un buen grupo es clave. Únete a nuestro Grupo Cerrado
                de Facebook, conecta con jugadores y DMs, y encuentra partidas
                tanto en línea como presenciales. ¡Vive la magia de D&D junto a
                la comunidad!
              </p>
              <div className="w-full h-autp flex justify-center my-4">
                <Link
                  className="group w-auto h-auto p-4 m-2 bg-red-700 border-solid border-2 border-white hover:scale-105 hover:bg-red-600 transition-all ease-out 
            duration-500"
                  href="https://discord.gg/YzqMRypkYz"
                >
                  <h3 className="text-center text-lg text-white  font-['Press_Start_2P']">
                    !Unete a la comunidad¡
                  </h3>
                </Link>
              </div>
            </div>
            <div
              className="flex flex-col w-full sm:w-1/2 h-auto p-5 m-2 bg-gray-800 bg-opacity-50 rounded-2xl
          border-dashed border-4 border-green-900"
            >
              <h2
                className="text-2xl sm:text-3xl text-white  text-center w-full text-whit font-['Press_Start_2P']
            p-5"
              >
                ¿Te interesa saber mas de nosotros?{" "}
              </h2>
              <p className="text-justify text-white  text-2xl">
                La caverna es proyecto creado para ayudar a los jugadores de rol
                inexpwrtos a adentrarse en el mundo de D&D, ademas de ayudar a
                los masters a crear sus propias campañas y a mejorar su
                experiencia en el juego. si quieres saber mas de nosotros
                siguenos en nuestras redes sociales.
              </p>
              <div className="w-full h-autp flex justify-center my-4">
                <Link
                  className="group w-auto h-auto p-4 m-2 bg-pink-700 border-solid border-2 border-white hover:scale-105 hover:bg-pink-600 transition-all ease-out 
            duration-500"
                  href="https://www.instagram.com/vector4c57/"
                >
                  <h3 className="text-center text-white  text-lg font-['Press_Start_2P']">
                    !Siguenos en instagram¡
                  </h3>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-11/12 h-auto my-6 bg-gray-800 bg-opacity-50 rounded-2xl p-5 border-dashed border-4 border-red-900">
            <h1 className="text-center text-xl sm:text-2xl w-full text-white font-['Press_Start_2P'] my-5">
              Bueno basta de charla, inicia tu aventura o crea tu propia
              historia, hechale un vistaso a nuestras colecciones
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-7 w-8/12 h-auto pb-10">
            <Link
              className="group relative container row-span-2 w-full h-72 sm:h-144 bg-orange-950 bg-opacity-55 border-amber-800 border-4
            border-solid hover:scale-105 transition-all ease-out duration-700"
              href="/jugadores"
            >
              <div
                className="absolute w-full h-full bg-cover bg-center opacity-60 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(/Escudo_espada.jpeg)`,
                }}
              />
              <div className="relative h-full w-full flex justify-center items-end z-40">
                <h3 className="text-2xl text-white  sm:text-3xl text-center font-['Press_Start_2P'] w-full p-2 bg-black bg-opacity-50">
                  jugadores
                </h3>
              </div>
            </Link>

            <Link
              className="group relative w-full h-72 sm:h-144 bg-green-950 bg-opacity-55 
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
              <div className="relative h-full w-full flex justify-center items-end z-40">
                <h3 className="text-2xl text-white  sm:text-3xl text-center font-['Press_Start_2P'] w-full p-2 bg-black bg-opacity-50">
                  Masters
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
