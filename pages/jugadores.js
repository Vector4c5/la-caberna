import Header from "@/components/common/Header";
import BookPreview from "@/components/common/BookPreview";


export default function jugadores() {
  const books = [
    {
      id: 1,
      title: "Clases",
      image: "/Portada_clases.jpeg",
      description: "Descubre tu clase y vive una aventura unica.",
      link: "/clases/j_clases",
    },
    {
      id: 2,
      title: "Raza",
      image: "/Potada_razas.jpeg",
      description: "¿Te apetece seguir siendo humano? ¿no? Entonces ven y descubre tu verdadera naturaleza.",
      link: "/razas/j_razas",
    },
    {
      id: 3,
      title: "Hechizos",
      image: "/Portada_Hechizos.jpeg",
      description: "Descubre todos los hechizos disponibles para tu aventura..",
      link: "/hechizos/hechizos",
    },
    {
      id: 4,
      title: "Equipo",
      image: "/placeholder-book.jpg",
      description: "Elige tus armas y equipo para la aventura.",
      link: "/equipamiento/j_equipamiento",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full h-full bg-black p-10 px-32">
      <Header/>
       <img
                src="/Fondo_Biblioteca.jpeg"
                alt="Fondo bienvenida"
                className="fixed top-0 left-0 w-full h-full object-cover opacity-15 z-0"
              />
      <div
        className="container flex flex-col items-center gap-3 w-10/12 h-auto border-solid border-white border-b-2 border-t-2 p-5 
        animate-fade-in-down"
        style={{
          boxShadow: "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 -10px 15px -3px rgba(255, 255, 255, 0.1)",
          fontFamily: "'Press Start 2P', cursive"
        }}
      >
        <h1 className="text-center text-4xl w-full text-white">Welcome Player</h1>
        <h2 className="text-xl text-center text-cyan-400">Take a look at our collection.</h2>
      </div>

      {/* Grid de libros */}
      <div className="grid grid-cols-3 gap-8 mt-12 w-full">
        {books.map((book, index) => (
          <div
            key={book.id}
          >
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
