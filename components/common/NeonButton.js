import { motion } from "framer-motion";
import Link from "next/link";

const CreativeButton = ({ children, href, onClick }) => {
  const buttonContent = (
    <motion.button
      onClick={onClick}
      className="relative w-full h-16 px-6 py-2.5 mt-2 rounded-lg 
                 bg-white text-black shadow-lg font-bold text-xl flex items-center justify-center
                 transition-transform duration-300 ease-out"
      whileHover={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );

  // Si se pasa href, envolver el contenido con Link
  if (href) {
    return (
      <Link href={href} passHref>
        {buttonContent}
      </Link>
    );
  }

  // Si no hay href, simplemente devuelve el contenido como un botón normal
  return buttonContent;
};

export default CreativeButton;
