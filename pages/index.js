import Image from "next/image";
import logo from "../public/logo_la_caberna.jpeg";
import cabaña from "../public/la_caberna2.jpeg";

export default function Home() {
  
  return (
    <>
      <div className="flex flex-col min-h-screen w-full bg-white p-0">
        <div id="Encabezado" className="relative flex w-full h-96 items-center justify-between  bg-green-300">
          <Image src={cabaña} alt="Cabaña" className="absolute inset-0 w-full h-full object-cover" />         
          <div id="text-of-Encabezado" className="relative">
            <div className="object-left-bottom flex flex-col">
              <h1 className="text-3xl font-bold text-white">La Caberna</h1>
              <p className="text-white">¡¡Únete a la aventura!!</p>
            </div>
            <Image src={logo} alt="Logo" className="w-40 h-40 object-right-bottom" />
          </div>
        </div>

        <div id="Introduccion" className="h-1/2 flex flex-col items-center justify-center bg-blue-500 p-4">
          <h1 className="text-2xl font-bold">Aquí irá una breve descripción acerca de la página web y de lo que se quiere lograr</h1>
          <p>Los juegos de rol son divertidos</p>
        </div>

        <div id="Enlaces" className="h-1/2 flex flex-row items-center justify-center bg-red-500 p-4">
          <a id="Jugadores" className="mb-4">
            <h1 className="text-xl font-bold">Aprende a jugar</h1>
            <p>Echa un vistazo a nuestras guías</p>
          </a>
          <a id="Masters" className="mb-4">
            <h1 className="text-xl font-bold">Crea tu próxima aventura</h1>
            <p>Ven y nutre tu imaginación con lo que tenemos para ti</p>
          </a>

          <a id="Comunidad">
            <h1 className="text-xl font-bold">Únete a nuestra comunidad</h1>
            <p>Únete a nosotros y vive grandes aventuras</p>
          </a>
        </div>
      </div>
    </>
  );
}


     

