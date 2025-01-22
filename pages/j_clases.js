import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BookPreview from "@/components/common/BookPreview";

export default function Clases() {
  const router = useRouter();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch("https://www.dnd5eapi.co/api/classes");
        const data = await response.json();
        const formattedClasses = data.results.map((classItem, index) => ({
          id: index + 1,
          title: classItem.name,
          description: `Descubre los secretos y habilidades de la clase ${classItem.name}`,
          link: `/clases/${classItem.index}`,
        }));
        setClasses(formattedClasses);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, []);

  const handleClaseClick = (index) => {
    router.push(`/clases/${index}`);
  };

  return (
    <div className="flex flex-col w-full h-full bg-black p-10 px-32">
      <div
        className="container flex flex-col items-center gap-3 w-full h-auto border-solid border-white border-b-2 border-t-2 p-5 
        animate-fade-in-down"
        style={{
          boxShadow:
            "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 -10px 15px -3px rgba(255, 255, 255, 0.1)",
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        <h1 className="text-center text-5xl w-full text-white">Clases D&D</h1>
        <h2 className="text-2xl text-center text-cyan-400">Elige tu destino</h2>
      </div>

      {/* Grid de clases */}
      <div className="grid grid-cols-3 gap-8 mt-12 w-full">
        {classes.map((classItem, index) => (
          <div
            key={classItem.id}
            className="animate-fade-in-up flex justify-center"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <button
              onClick={() => handleClaseClick(classItem.link.split("/").pop())}
              className="w-full h-32 px5 py2.5 mt-2 relative group overflow-hidden font-medium
              bg-slate-700 bg-opacity-30 text-white inline-block transition-all duration-500
              rounded-lg shadow-md shadow-white
              ease-out transform hover:scale-105"
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center transition-all duration-500 transform group-hover:-translate-y-full">
                <h3
                  className="text-2xl"
                  style={{
                    fontFamily: "'Press Start 2P', cursive",
                  }}
                >
                  {classItem.title}
                </h3>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center transition-all duration-500 
              transform translate-y-full group-hover:translate-y-0">
                <span className="w-full h-full absolute opacity-90"></span>
                <p
                  className="relative bg-white bg-opacity-80 rounded-lg m-6 p-4 text-center text-sm text-black font-['Press_Start_2P']"
                >
                  {classItem.description}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
