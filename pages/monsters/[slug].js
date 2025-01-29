import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/common/Header";
import StarAnimation from "@/components/common/StartAnimation";

export default function MonsterDetails() {
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

          // If the monster has special abilities and spellcasting
          if (res.data.special_abilities) {
            const spellcasting = res.data.special_abilities.find(
              (ability) => ability.spellcasting
            );

            if (spellcasting) {
              const spellSlugs = spellcasting.spellcasting.spells.map((spell) =>
                spell.url.split("/").pop()
              );

              const spellRequests = spellSlugs.map((slug) =>
                axios.get(`https://www.dnd5eapi.co/api/spells/${slug}`)
              );

              try {
                const spellResponses = await Promise.all(spellRequests);
                const spellDetails = spellResponses.map((res) => ({
                  name: res.data.name,
                  full_name: res.data.full_name || res.data.name,
                  desc: res.data.desc
                    ? res.data.desc.join(" ")
                    : "No description available",
                }));
                setSpells(spellDetails);
              } catch (spellError) {
                console.error("Error fetching spell details:", spellError);
              }
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching the monster:", error);
          setError(error);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-5xl font-['Press_Start_2P']">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <h2 className="text-5xl text-center font-['Press_Start_2P'] w.full">
          Error loading the monster
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full h-full p-10 gap-5">
      <div className="w-full h-auto flex justify-center mb-5">
        <Header />
      </div>
      <div className="fixed w-full h-screen z-0 opacity-40">
        <StarAnimation />
      </div>
      <img
        src="/Fondo_Biblioteca.jpeg"
        alt="Welcome background"
        className="fixed top-0 left-0 w-full h-full object-cover opacity-15 z-10"
      />
      <h1 className="text-5xl font-['Press_Start_2P'] text-center">
        {monster.name}
      </h1>

      <div
        className="p-6 w-10/12 h-auto text-justify bg-gray-800 bg-opacity-80 rounded-xl gap-4 z-20
    "
      >
        <p className="col-span-2 text-center text-xl">{monster.desc}</p>
        <div className="container grid grid-cols-2 gap-4 my-5">
          <h2 className="col-span-2 text-2xl text-justify font-['Press_Start_2P']">
            Characteristics:
          </h2>
          <p className="text-justify text-xl">
            <strong>Size:</strong> {monster.size}
          </p>
          <p className="text-justify text-xl">
            <strong>Hit points:</strong> {monster.hit_points}
          </p>
          <p className="text-justify text-xl">
            <strong>Hit dice:</strong> {monster.hit_dice}
          </p>
          <p className="text-justify text-xl">
            <strong>Hit points roll:</strong> {monster.hit_points_roll}
          </p>
          <p className="text-justify text-xl">
            <strong>Speed:</strong> {monster.speed.walk}
          </p>
          <p className="text-justify text-xl">
            <strong>Strength:</strong> {monster.strength}
          </p>
          <p className="text-justify text-xl">
            <strong>Constitution:</strong> {monster.constitution}
          </p>
          <p className="text-justify text-xl">
            <strong>Intelligence:</strong> {monster.intelligence}
          </p>
          <p className="text-justify text-xl">
            <strong>Wisdom:</strong> {monster.wisdom}
          </p>
          <p className="text-justify text-xl">
            <strong>Charisma:</strong> {monster.charisma}
          </p>
        </div>

        {spells.length > 0 && (
          <div className="col-span-2">
            <h3 className="text-2xl my-2 font-['Press_Start_2P']">Spells:</h3>
            <ul className="list-disc pl-5">
              {spells.map((spell) => (
                <li key={spell.name} className="text-justify text-xl">
                  <strong>{spell.full_name}:</strong>
                  <p className="m-2">{spell.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="container my-4">
        <h2 className="col-span-2 text-2xl text-justify font-['Press_Start_2P']">
          Special Abilities and Actions:
        </h2>
        <ul className="list-disc pl-5">
          {monster.special_abilities.map((ability) => (
            <li key={ability.name} className="my-4">
              <strong className="text-lg ">{ability.name}</strong>
              <p>{ability.desc}</p>
            </li>
          ))}
        </ul>
        <ul className="list-disc pl-5">
          {monster.actions.map((action) => (
            <li key={action.name} className="my-4">
              <strong className="text-xl">{action.name}</strong>
              <p>{action.desc}</p>
            </li>
          ))}
        </ul>
        </div>

      </div>
    </div>
  );
}
