import { motion } from "framer-motion";
import Link from "next/link";

const CreativeButton = ({ children, href, onClick }) => {
  const buttonContent = (
    <motion.button
      onClick={onClick}
      className="w-5/12 h-16 px5 py2.5 mt-2 relative rounded group overflow-hidden
              bg-slate-800 bg-opacity-25 border-8 border-double border-teal-500 inline-block 
              transition-all duration-500 shadow-lg shadow-teal-300 ease-out transform hover:bg-teal-300
              hover:bg-opacity-25"
      whileHover={{ scale: 1.1 }}
    >

      <span className="relative group-hover:text-white font-mono text-2xl">
        {children}
      </span>
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
