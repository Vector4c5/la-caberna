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
                <h2 className="text-5xl font-['Press_Start_2P']">Error al cargar el hechizo</h2>
            </div>
        );
    }

    if (!hechizo) return null;

    return (
        <div className="w-full h-full bg-black p-10">
            <h2>{hechizo.name}</h2>
            <p>{hechizo.desc}</p>
            {/* Puedes agregar más detalles del hechizo aquí */}
        </div>
    );
}
