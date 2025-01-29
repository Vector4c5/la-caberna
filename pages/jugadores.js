import Header from "@/components/common/Header";
import BookPreview from "@/components/common/BookPreview";
import StarAnimation from "@/components/common/StartAnimation";

export default function jugadores() {
  const books = [
    {
      id: 1,
      title: "Classes",
      image: "/Portada_clases.jpeg",
      description: "Discover your class and live a unique adventure.",
      link: "/clases/j_clases",
    },
    {
      id: 2,
      title: "Race",
      image: "/Potada_razas.jpeg",
      description:
        "Do you want to remain human? No? Then come and discover your true nature.",
      link: "/razas/j_razas",
    },
    {
      id: 3,
      title: "Spells",
      image: "/Portada_Hechizos.jpeg",
      description: "Discover all the spells available for your adventure.",
      link: "/hechizos/hechizos",
    },
    {
      id: 4,
      title: "Equipment",
      image: "/Portada_Equipamiento.jpeg",
      description: "Choose your weapons and equipment for the adventure.",
      link: "/equipamiento/j_equipamiento",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full h-full bg-black p-10 px-32">
      <div className="w-full h-auto flex justify-center mb-5">
        <Header />
      </div>
      <div className="fixed w-full h-screen z-10 opacity-40">
        <StarAnimation />
      </div>
      <img
        src="/Fondo_Biblioteca.jpeg"
        alt="Welcome background"
        className="fixed top-0 left-0 w-full h-full object-cover opacity-15 z-0"
      />
      <div
        className="container flex flex-col items-center gap-3 w-10/12 h-auto border-solid border-white border-b-2 border-t-2 p-5 
        animate-fade-in-down z-20"
        style={{
          boxShadow:
            "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 -10px 15px -3px rgba(255, 255, 255, 0.1)",
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        <h1 className="text-center text-4xl w-full text-white">
          Welcome Player
        </h1>
        <h2 className="text-xl text-center text-cyan-400">
          Take a look at our collection.
        </h2>
      </div>

      {/* Grid of books */}
      <div className="grid grid-cols-3 gap-8 mt-12 w-full z-20">
        {books.map((book, index) => (
          <div key={book.id}>
            <BookPreview
              title={book.title}
              image={book.image}
              description={book.description}
              link={book.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
