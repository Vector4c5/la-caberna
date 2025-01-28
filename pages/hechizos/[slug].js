import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "@/components/common/Header";

export default function HechizosDetalles() {
  const router = useRouter();
  const { slug } = router.query;
  const [hechizo, setHechizo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      axios
        .get(`https://www.dnd5eapi.co/api/spells/${slug}`)
        .then((res) => {
          setHechizo(res.data); // Guardamos los datos en el estado
          setLoading(false); // Quitamos el estado de carga
        })
        .catch((error) => {
          console.error("Error al obtener el hechizo:", error);
          setError(error);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <h2 className="text-5xl font-['Press_Start_2P']">Cargando...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <h2 className="text-5xl font-['Press_Start_2P']">
          Error al cargar el hechizo
        </h2>
      </div>
    );
  }

  if (!hechizo) return null;

  return (
    <div className="w-full p-10 flex flex-col items-center">
      <img
        src="/Fondo_Biblioteca.jpeg"
        alt="Fondo bienvenida"
        className="fixed top-0 left-0 w-full h-full object-cover opacity-15 z-10"
      />
      <h2 className="text-center text-4xl font-['Press_Start_2P'] mb-5 z-20">
        {hechizo.name}
      </h2>
      <div className="container flex w-10/12 h-auto gap-4">
        <div className="container flex flex-col p-6 w-1/2 h-auto text-justify bg-gray-800 bg-opacity-100 rounded-xl gap-2 z-20">
          <h2 className="text-2xl text-center font-['Press_Start_2P']">
            Description:
          </h2>

          <h3 className="text-2xl">What is this spell?</h3>
          <p>{hechizo.desc}</p>
          <p>{hechizo.higher_level}</p>
        </div>

        <div className="container flex flex-col p-6 w-1/2 h-auto bg-gray-800 bg-opacity-100 rounded-xl gap-2 z-20">
          <h2 className="text-2xl text-center font-['Press_Start_2P']">
            Characteristics:
          </h2>
          <ul className="flex flex-col list-disc pl-5">
            <p>
              {" "}
              <strong>You need this level to use it:</strong> {hechizo.level}
            </p>

            <p>
              <strong>Range:</strong> {hechizo.range}
            </p>

            <p>
              <strong>Casting time:</strong> {hechizo.casting_time}
            </p>
            {hechizo?.damage?.damage_at_slot_level && (
              <p>
                <strong>Damage at Slot Levels:</strong>
                <ul className="list-disc pl-5">
                  {Object.entries(hechizo.damage.damage_at_slot_level).map(
                    ([level, damage]) => (
                      <li key={level}>
                        Level {level}: {damage}
                      </li>
                    )
                  )}
                </ul>
              </p>
            )}
            <p>
              <strong>What classes can use it?</strong>
              <ul className="list-disc pl-5">
                {hechizo.classes.map((clase) => (
                  <li key={clase.index}>{clase.name}</li>
                ))}
                {hechizo.subclasses.map((clase) => (
                  <li key={clase.index}>{clase.name}</li>
                ))}
              </ul>
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}
