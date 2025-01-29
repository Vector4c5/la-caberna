import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "@/components/common/Header";
import StarAnimation from "@/components/common/StartAnimation";

export default function EquipamientoDetalles() {
  const router = useRouter();
  const { slug } = router.query;
  const [equipo, setEquipo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      axios
        .get(`https://www.dnd5eapi.co/api/equipment/${slug}`)
        .then((res) => {
          setEquipo(res.data); // Guardamos los datos en el estado
          setLoading(false); // Quitamos el estado de carga
        })
        .catch((error) => {
          console.error("Error al obtener el equipo:", error);
          setError(error);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h2 className="text-5xl font-['Press_Start_2P']">Cargando...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h2 className="text-5xl font-['Press_Start_2P']">
          Error al cargar el equipo
        </h2>
      </div>
    );
  }
  if (!equipo) return null;

return (
    <div className="fixed flex flex-col items-center w-full h-screen bg-black bg-opacity-40 p-10">
        <img
            src="/Fondo_Biblioteca.jpeg"
            alt="Fondo bienvenida"
            className="fixed top-0 left-0 w-full h-full object-cover opacity-15 z-0"
        />
        <div className="w-full h-auto flex justify-center mb-5">
            <Header />
        </div>
        <div className="fixed w-full h-screen z-10 opacity-40">
            <StarAnimation />
        </div>
        <h2 className="text-center text-4xl font-['Press_Start_2P'] mb-5 z-30">
            {equipo.name}
        </h2>
        <div className="container grid grid-cols-2 gap-4 p-6 w-full h-auto text-justify bg-gray-800 bg-opacity-80 rounded-xl z-20">
            <div>
                <p className="text-2xl">
                    <strong>Equipament Category:</strong>
                    <ul className="flex flex-col list-disc pl-5">
                        <li>{equipo.equipment_category.name}</li>
                    </ul>
                </p>
            </div>
            <div>
                <p className="text-2xl">
                    <strong>Gear Category:</strong>
                    <ul className="flex flex-col list-disc pl-5">
                        <li>{equipo.gear_category.name}</li>
                    </ul>
                </p>
            </div>
            <div>
                <p className="text-2xl">
                    <strong>Cost:</strong>
                    <ul className="flex flex-col list-disc pl-5">
                        <li>Quantity: {equipo.cost.quantity}</li>
                        <li>Unit: {equipo.cost.unit}</li>
                    </ul>
                </p>
            </div>
            <div>
                <p className="text-2xl">
                    <strong>Weight:</strong>
                    <ul className="flex flex-col list-disc pl-5">
                        <li>{equipo.weight}</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
);
}
