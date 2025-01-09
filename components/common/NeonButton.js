import { motion } from "framer-motion";
import Link from "next/link"; // Importa Link correctamente

const NeonButton = ({ children, href, onClick }) => {
  const content = (
    <motion.button
      onClick={onClick}
      className="w-1/4 h-16 rounded-lg text-lg font-bold"
      style={{
        backgroundColor: "#141414",
        color: "#00ffcc",
        border: "2px solid #00ffcc",
        boxShadow: "0 0 10px #00ffcc, 0 0 20px #00ffcc, 0 0 30px #00ffcc",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        scale: 1.1,
        backgroundColor: "#00ffcc",
        color: "#141414",
        boxShadow: "0 0 20px #00ffcc, 0 0 30px #00ffcc, 0 0 40px #00ffcc",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="w-full h-full flex items-center justify-center">{children}</span>
    </motion.button>
  );

  // Si se pasa href, envolver el contenido con Link
  if (href) {
    return (
      <Link href={href} passHref> {/* Aquí se elimina el <a> porque Link ya lo maneja */}
        {content} {/* El contenido ya es un botón que Link manejará como enlace */}
      </Link>
    );
  }

  // Si no hay href, simplemente devuelve el contenido como un botón normal
  return content;
};

export default NeonButton;
