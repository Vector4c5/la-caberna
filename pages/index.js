import Image from "next/image";
import Fondo_bienvenida from "../public/img_inicio.jpeg";
import React, { useRef, useEffect } from 'react';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      let flickerTimeoutId;
      let steadyTimeoutId;

      const flickerEffect = () => {
        const boxShadow = Math.random() > 0.5
          ? '0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.6)'
          : '0 0 2px rgba(255, 255, 255, 0.1), 0 0 4px rgba(255, 255, 255, 0.2), 0 0 8px rgba(255, 255, 255, 0.3)';
        container.style.boxShadow = boxShadow;
      };

      const startFlicker = () => {
        flickerTimeoutId = setTimeout(() => {
          flickerEffect();
          startFlicker();
        }, Math.random() * 100); // Intervalo aleatorio para parpadeo rápido
      };

      const flickerPattern = () => {
        // Iniciar el parpadeo
        startFlicker();

        // Detener el parpadeo después de 1 segundo y encender la luz fija
        steadyTimeoutId = setTimeout(() => {
          clearTimeout(flickerTimeoutId);
          container.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.8)';

          // Mantener la luz encendida durante 3 segundos antes de volver a parpadear
          steadyTimeoutId = setTimeout(flickerPattern, 3000); // 
        }, 1000); 
      };

      flickerPattern();

      return () => {
        clearTimeout(flickerTimeoutId);
        clearTimeout(steadyTimeoutId);
      }; // Limpia los timeouts cuando el componente se desmonte
    }
  }, []);

  return (
    <>
      <div id="Body" className="flex flex-col justify-center items-center bg-black min-w-full min-h-screen p-0 m-0">
        <Image src={Fondo_bienvenida} alt="Descripción de la imagen"
        className=" relative m-0 w-full min-h-screen object-cover z-0 opacity-25 "
        />  
        <div ref={containerRef}  id="Bienvenida"
        className="absolute flex flex-col items-center justify-center font-serif h-5/6 w-2/5 border-4 border-white rounded-full shrink
        space-y-2">
          <h1 className="text-8xl text-center ">La Caverna</h1>
          <p className="text-center text-2xl">Un mundo de aventuras te espera. ¿Estás listo?</p>
          <button>Start!</button>


        </div>
      </div>
    </>
  );
}
