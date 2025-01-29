import Header from "@/components/common/Header";
import BookPreview from "@/components/common/BookPreview";
import StarAnimation from "@/components/common/StartAnimation";

export default function jugadores() {
  const books = [
    {
      id: 1,
      title: "Monsters",
      image: "/Portada_monstruos.jpeg",
      description: "Choose your monsters and make your players suffer",
      link: "/monsters/m_monsters",
    },
    {
      id: 2,
      title: "Rules",
      image: "/Portada_Reglas.jpeg",
      description: "Chaos causes war, order brings peace",
      link: "/reglas/m_reglas",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full h-screen bg-black p-4 md:p-10 md:px-32 overflow-y-auto">
      <Header />
      <div className="fixed w-full h-screen z-10 opacity-40">
        <StarAnimation />
      </div>
      <img
        src="/Fondo_Biblioteca.jpeg"
        alt="Fondo bienvenida"
        className="fixed top-0 left-0 w-full h-full object-cover opacity-15 z-0"
      />
      <div
        className="container flex flex-col items-center gap-3 w-full md:w-10/12 h-auto border-solid border-white border-b-2 border-t-2 p-5 
        animate-fade-in-down"
        style={{
          boxShadow: "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 -10px 15px -3px rgba(255, 255, 255, 0.1)",
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        <h1 className="text-center text-2xl md:text-4xl w-full text-white">Welcome Master</h1>
        <h2 className="text-lg md:text-xl text-center text-cyan-400">Take a look at our collection.</h2>
      </div>

      {/* Grid de libros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 w-full">
        {books.map((book) => (
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
