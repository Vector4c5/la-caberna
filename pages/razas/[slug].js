import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function RazaDetalle() {
  const router = useRouter();
  const { slug } = router.query;
  const [razaData, setRazaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRazaData = async () => {
      if (!slug) return;

      try {
        // Convertir el slug a minúsculas y remover cualquier espacio
        const formattedSlug = slug.toLowerCase().replace(/\s+/g, '-');
        
        // Hacer la petición a la API con el slug formateado
        const response = await fetch(
          `https://www.dnd5eapi.co/api/races/${formattedSlug}`
        );

        if (!response.ok) {
          throw new Error('Raza no encontrada');
        }

        const data = await response.json();
        
        // Obtener información adicional de subrazas si existen
        if (data.subraces && data.subraces.length > 0) {
          const subracesPromises = data.subraces.map(async (subrace) => {
            const subraceResponse = await fetch(`https://www.dnd5eapi.co${subrace.url}`);
            return subraceResponse.json();
          });
          const subracesData = await Promise.all(subracesPromises);
          data.subracesDetails = subracesData;
        }

        // Obtener información de rasgos
        if (data.traits && data.traits.length > 0) {
          const traitsPromises = data.traits.map(async (trait) => {
            const traitResponse = await fetch(`https://www.dnd5eapi.co${trait.url}`);
            return traitResponse.json();
          });
          const traitsData = await Promise.all(traitsPromises);
          data.traitsDetails = traitsData;
        }

        setRazaData(data);
      } catch (error) {
        console.error("Error fetching race data:", error);
        // Opcional: Redirigir a una página de error
        router.push('/404');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchRazaData();
    }
  }, [slug, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <h2
          className="text-4xl text-white"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          Cargando...
        </h2>
      </div>
    );
  }

  if (!razaData) return null;

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1
          className="text-4xl mb-6 text-center"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          {razaData.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Información Principal */}
          <div className="bg-slate-700 bg-opacity-30 p-6 rounded-lg shadow-md">
            <h2
              className="text-2xl text-center mb-4"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              Características
            </h2>
            <div className="space-y-4">
              <p className="text-lg">Velocidad: {razaData.speed}</p>
              <p className="text-lg">Tamaño: {razaData.size}</p>
              <p className="text-lg">Descripción del tamaño: {razaData.size_description}</p>
              
              <h3 className="text-xl mb-2">Bonificación de Habilidades:</h3>
              <ul className="list-disc list-inside">
                {razaData.ability_bonuses?.map((bonus, index) => (
                  <li key={index}>
                    {bonus.ability_score.name}: +{bonus.bonus}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl mb-2">Idiomas:</h3>
              <p>{razaData.language_desc}</p>
              <ul className="list-disc list-inside">
                {razaData.languages?.map((lang) => (
                  <li key={lang.index}>{lang.name}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rasgos Raciales */}
          <div className="bg-slate-700 bg-opacity-30 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl text-center mb-4"
                style={{ fontFamily: "'Press Start 2P', cursive" }}>
              Rasgos Raciales
            </h2>
            {razaData.traitsDetails && (
              <ul className="list-disc list-inside">
                {razaData.traitsDetails.map((trait) => (
                  <div key={trait.index} className="mb-4">
                    <h3 className="text-xl font-bold">{trait.name}</h3>
                    <p>{trait.desc[0]}</p>
                  </div>
                ))}
              </ul>
            )}

            {razaData.subracesDetails && razaData.subracesDetails.length > 0 && (
              <div className="mt-6">
                <h2 className="text-2xl mb-4"
                    style={{ fontFamily: "'Press Start 2P', cursive" }}>
                  Subrazas
                </h2>
                {razaData.subracesDetails.map((subrace) => (
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
    </>
  );
}
