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
            The Cavern
          </h1>
          <p className="pl-3 pb-4 text-white text-xl sm:text-2xl md:text-4xl font-dm-serif text-shadow-xl">
            A world of adventure awaits you!
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
              Start your adventure!
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
                Welcome to The Cavern!
              </h2>
              <p className="text-justify text-white  text-2xl sm:text-xl mb-5 p-4">
                If you are a novice adventurer or a Dungeon Master looking for
                resources, you have come to the right place. In The Cavern, you
                will find guides, tools, and tips to start your journey in
                Dungeons & Dragons. From basic rules to ideas for creating your
                own campaign, everything you need to dive into the world of
                role-playing is right here. Grab your dice, gather your party,
                and get ready for adventure!
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
                Looking for someone to play with?
              </h2>
              <p className="text-justify text-white text-2xl">
                Dungeons & Dragons (D&D) is a role-playing game where stories
                come to life in epic fantasy worlds. To enjoy the adventure, a
                great group is key. Join our Closed Facebook Group, connect with
                players and DMs, and find games both online and in person.
                Experience the magic of D&D with the community!
              </p>
              <div className="w-full h-autp flex justify-center my-4">
                <Link
                  className="group w-auto h-auto p-4 m-2 bg-red-700 border-solid border-2 border-white hover:scale-105 hover:bg-red-600 transition-all ease-out 
            duration-500"
                  href="https://discord.gg/YzqMRypkYz"
                >
                  <h3 className="text-center text-lg text-white  font-['Press_Start_2P']">
                    Join the community!
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
                Are you interested in learning more about us?
              </h2>
              <p className="text-justify text-white  text-2xl">
                La Caverna is a project created to help inexperienced
                role-players dive into the world of D&D, as well as assist
                Dungeon Masters in creating their own campaigns and enhancing
                their game experience. If you want to learn more about us,
                follow us on our social media!
              </p>
              <div className="w-full h-autp flex justify-center my-4">
                <Link
                  className="group w-auto h-auto p-4 m-2 bg-pink-700 border-solid border-2 border-white hover:scale-105 hover:bg-pink-600 transition-all ease-out 
            duration-500"
                  href="https://www.instagram.com/vector4c57/"
                >
                  <h3 className="text-center text-white  text-lg font-['Press_Start_2P']">
                  Follow us on Instagram!
                  </h3>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-11/12 h-auto my-6 bg-gray-800 bg-opacity-50 rounded-2xl p-5 border-dashed border-4 border-red-900">
            <h1 className="text-center text-xl sm:text-2xl w-full text-white font-['Press_Start_2P'] my-5">
            Enough talk, start your adventure or create your own story, take a look at our collections!
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
                players
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
