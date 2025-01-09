import { motion } from "framer-motion";
import toast from "react-hot-toast"; // Importar toast desde react-hot-toast
import Link from "next/link"; // Importar Link de Next.js

const SeccionButton = ({ message, link, children }) => {
  const handleClick = () => {
    if (message) {
      toast.success(message); // Muestra un toast con el mensaje
    }
  };

  return (
    <motion.div
      className="w-1/2 h-24 rounded-lg text-xl font-bold"
      style={{
        backgroundColor: "#141414",
        color: "#ff007f",
        border: "2px solid #ff007f",
        boxShadow: "0 0 10px #ff007f, 0 0 20px #ff007f, 0 0 30px #ff007f",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "#ff007f",
        color: "#141414",
        boxShadow: "0 0 20px #ff007f, 0 0 30px #ff007f, 0 0 40px #ff007f",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Link ahora envuelve directamente el contenido, no es necesario <a> */}
      <Link href={link} passHref>
        <div
          onClick={handleClick}
          className="w-full h-full flex items-center justify-center cursor-pointer"
        >
          {children}
        </div>
      </Link>
    </motion.div>
  );
};

export default SeccionButton;
