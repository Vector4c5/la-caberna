import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function MonstersDetalles() {
  const router = useRouter();
  const { slug } = router.query;
  const [monster, setMonster] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    if (slug) {
      axios
        .get(`https://www.dnd5eapi.co/api/monsters/${slug}`)
        .then(async (res) => {
          setMonster(res.data);
          setLoading(false);

          // Si el monstruo tiene habilidades especiales y spellcasting
          if (res.data.special_abilities) {
            const spellcasting = res.data.special_abilities.find(
              (ability) => ability.spellcasting
            );

            if (spellcasting) {
              const spellSlugs = spellcasting.spellcasting.spells.map(spell => spell.url.split("/").pop());
              
              const spellRequests = spellSlugs.map(slug => axios.get(`https://www.dnd5eapi.co/api/spells/${slug}`));
              
              try {
                const spellResponses = await Promise.all(spellRequests);
                const spellDetails = spellResponses.map(res => ({
                  name: res.data.name,
                  full_name: res.data.full_name || res.data.name,
                  desc: res.data.desc ? res.data.desc.join(" ") : "No description available"
                }));
                setSpells(spellDetails);
              } catch (spellError) {
                console.error("Error fetching spell details:", spellError);
              }
            }
          }
        })
        .catch((error) => {
          console.error("Error al obtener el monstruo:", error);
          setError(error);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-5xl font-['Press_Start_2P']">Cargando...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <h2 className="text-5xl text-center font-['Press_Start_2P'] w.full">
          Error al cargar el monstruo
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full h-wull p-10 gap-5">
      <img
        src="/Fondo_Biblioteca.jpeg"
        alt="Fondo bienvenida"
        className="fixed top-0 left-0 w-full h-full object-cover opacity-15 z-10"
      />
      <h1 className="text-5xl font-['Press_Start_2P'] text-center">
        {monster.name}
      </h1>

      <div className="container flex w-10/12 h-auto gap-4">
        <div className="container flex flex-col p-6 w-1/2 h-auto text-justify bg-gray-800 bg-opacity-100 rounded-xl gap-2 z-20">
          <h2 className="text-2xl text-center font-['Press_Start_2P']">
            Description:
          </h2>
          <p>{monster.desc}</p>
          {monster.special_abilities.map((ability) => (
            <div key={ability.name}>
              <h3 className="text-xl font-['Press_Start_2P']">{ability.name}</h3>
              <p>{ability.desc}</p>
            </div>
          ))}
        </div>

        <div className="container flex flex-col p-6 w-1/2 h-auto bg-gray-800 bg-opacity-100 rounded-xl gap-2 z-20">
          <h2 className="text-2xl text-center font-['Press_Start_2P']">
            Characteristics:
          </h2>
          <p className="">Size: {monster.size}</p>
          {spells.length > 0 && (
            <div>
              <h3 className="text-xl font-['Press_Start_2P']">Spells:</h3>
              {spells.map(spell => (
                <div key={spell.name}>
                  <h4 className="text-lg font-bold">{spell.full_name}</h4>
                  <p>{spell.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="container flex w-10/12 h-auto gap-4 mt-4">
        <div className="container flex flex-col p-6 w-full h-auto bg-gray-800 bg-opacity-100 rounded-xl gap-2 z-20">
          <h2 className="text-2xl text-center font-['Press_Start_2P']">
            Actions:
          </h2>
          {monster.actions.map((action) => (
            <div key={action.name}>
              <h3 className="text-xl font-['Press_Start_2P']">{action.name}</h3>
              <p>{action.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
