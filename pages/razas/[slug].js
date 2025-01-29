import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/common/Header";
import StarAnimation from "@/components/common/StartAnimation";

export default function RaceDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [raceData, setRaceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRaceData = async () => {
      if (!slug) return;

      try {
        const formattedSlug = slug.toLowerCase().replace(/\s+/g, '-');
        const response = await fetch(
          `https://www.dnd5eapi.co/api/races/${formattedSlug}`
        );

        if (!response.ok) {
          throw new Error('Race not found');
        }

        const data = await response.json();

        if (data.subraces && data.subraces.length > 0) {
          const subracesPromises = data.subraces.map(async (subrace) => {
            const subraceResponse = await fetch(`https://www.dnd5eapi.co${subrace.url}`);
            return subraceResponse.json();
          });
          const subracesData = await Promise.all(subracesPromises);
          data.subracesDetails = subracesData;
        }

        if (data.traits && data.traits.length > 0) {
          const traitsPromises = data.traits.map(async (trait) => {
            const traitResponse = await fetch(`https://www.dnd5eapi.co${trait.url}`);
            return traitResponse.json();
          });
          const traitsData = await Promise.all(traitsPromises);
          data.traitsDetails = traitsData;
        }

        setRaceData(data);
      } catch (error) {
        console.error("Error fetching race data:", error);
        router.push('/404');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchRaceData();
    }
  }, [slug, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <h2
          className="text-4xl text-white"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          Loading...
        </h2>
      </div>
    );
  }

  if (!raceData) return null;

  return (
      <div className="flex flex-col container mx-auto px-4 py-8">
          <div className="w-full h-auto flex justify-center mb-5">
        <Header />
      </div>
      <div className="fixed w-full h-screen z-10 opacity-40">
        <StarAnimation />
        </div>
        <img
        src="/Fondo_Biblioteca.jpeg"
        alt="Fondo bienvenida"
        className="fixed top-0 left-0 w-full h-full object-cover opacity-15 z-0"
      />
        <h1
          className="text-5xl mb-6 text-center z-20"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          {raceData.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-20">
          <div className="bg-slate-700 bg-opacity-80 p-6 rounded-lg shadow-md">
            <h2
              className="text-2xl text-center mb-4"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              Characteristics
            </h2>
            <div className="space-y-4">
              <p className="text-lg">Speed: {raceData.speed}</p>
              <p className="text-lg">Size: {raceData.size}</p>
              <p className="text-lg">Size Description: {raceData.size_description}</p>
              
              <h3 className="text-xl mb-2">Ability Bonuses:</h3>
              <ul className="list-disc list-inside">
                {raceData.ability_bonuses?.map((bonus, index) => (
                  <li key={index}>
                    {bonus.ability_score.name}: +{bonus.bonus}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl mb-2">Languages:</h3>
              <p>{raceData.language_desc}</p>
              <ul className="list-disc list-inside">
                {raceData.languages?.map((lang) => (
                  <li key={lang.index}>{lang.name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-700 bg-opacity-80 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl text-center mb-4"
                style={{ fontFamily: "'Press Start 2P', cursive" }}>
              Racial Traits
            </h2>
            {raceData.traitsDetails && (
              <ul className="list-disc list-inside">
                {raceData.traitsDetails.map((trait) => (
                  <div key={trait.index} className="mb-4">
                    <h3 className="text-xl font-bold">{trait.name}</h3>
                    <p>{trait.desc[0]}</p>
                  </div>
                ))}
              </ul>
            )}

            {raceData.subracesDetails && raceData.subracesDetails.length > 0 && (
              <div className="mt-6">
                <h2 className="text-2xl mb-4"
                    style={{ fontFamily: "'Press Start 2P', cursive" }}>
                  Subraces
                </h2>
                {raceData.subracesDetails.map((subrace) => (
                  <div key={subrace.index} className="mb-4">
                    <h3 className="text-xl font-bold">{subrace.name}</h3>
                    <p>{subrace.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
  );
}
