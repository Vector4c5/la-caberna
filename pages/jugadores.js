import Header from "@/components/common/Header";
import BookPreview from "@/components/common/BookPreview";
import img_interior_caverna from "../public/Portada_clases.jpeg";


export default function jugadores() {
  const books = [
    {
      id: 1,
      title: "Clases",
      image: img_interior_caverna.src,
      description: "Descubre tu clase y vive una aventura unica.",
      link: "/clases/j_clases",
    },
    {
      id: 2,
      title: "Raza",
      image: "/placeholder-book.jpg",
      description: "¿Te apetece seguir siendo humano? ¿no? Entonces ven y descubre tu verdadera naturaleza.",
      link: "/razas/j_razas",
    },
    {
      id: 3,
      title: "Trasfondos",
      image: "/placeholder-book.jpg",
      description: "Crea tu propia historia y cuenta tus grandes hazañas."
    },
    {
      id: 4,
      title: "Guía de Hechizos",
      image: "/placeholder-book.jpg",
      description: "Descubre todos los hechizos disponibles para tu aventura.",
      link: "/personaje",
    },
    {
      id: 5,
      title: "Guía de Hechizos",
      image: "/placeholder-book.jpg",
      description: "Descubre todos los hechizos disponibles para tu aventura.",
      link: "/personaje",
    },
    {
      id: 6,
      title: "Guía de Hechizos",
      image: "/placeholder-book.jpg",
      description: "Descubre todos los hechizos disponibles para tu aventura.",
      link: "/personaje",
    }
  ];

  return (
    <div className="flex flex-col items-center w-full h-full bg-black p-10 px-32">
      
      <div
        className="container flex flex-col items-center gap-3 w-full h-auto border-solid border-white border-b-2 border-t-2 p-5 
        animate-fade-in-down"
        style={{
          boxShadow: "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 -10px 15px -3px rgba(255, 255, 255, 0.1)",
          fontFamily: "'Press Start 2P', cursive"
        }}
      >
        <h1 className="text-center text-5xl w-full text-white">Welcome Player</h1>
        <h2 className="text-2xl text-center text-cyan-400">Take a look at our collection.</h2>
      </div>

      {/* Grid de libros */}
      <div className="grid grid-cols-3 gap-8 mt-12 w-full">
        {books.map((book, index) => (
          <div
            key={book.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 200}ms` }}
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
