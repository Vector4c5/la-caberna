import { motion } from "framer-motion";
import toast from "react-hot-toast"; // Importar toast desde react-hot-toast
import Link from "next/link"; // Importar Link de Next.js

const SeccionButton = ({ message, link, children }) => {
  const handleClick = () => {
    if (message) {
      toast.success(message); // Muestra un toast con el mensaje
    }
  };

  const buttonContent = (
    <motion.button
      className="w-full h-28 rounded-lg text-xl font-bold m-0
                 bg-black text-pink-500 border-2 border-pink-500 shadow-lg
                 transition-transform duration-300 ease-out flex items-center justify-center"
      whileHover={{
        scale: 1.05,
        backgroundColor: "#ff007f",
        color: "#141414",
        boxShadow: "0 0 20px #ff007f, 0 0 30px #ff007f, 0 0 40px #ff007f",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );

  if (link) {
    return (
      <Link href={link}>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default SeccionButton;
