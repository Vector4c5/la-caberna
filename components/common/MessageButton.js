import { motion } from "framer-motion";
import toast from "react-hot-toast"; // Importar toast desde react-hot-toast

const MessageButton = ({ children, message, onClick }) => {
  const handleClick = () => {
    if (message) {
      toast.success(message); // Muestra un toast con el mensaje
    }
    if (onClick) {
      onClick(); // Permite pasar una función extra para manejar más lógica
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className="w-full h-80 rounded-lg text-lg font-bold"
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
        scale: 1.1,
        backgroundColor: "#ff007f",
        color: "#141414",
        boxShadow: "0 0 20px #ff007f, 0 0 30px #ff007f, 0 0 40px #ff007f",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="w-full h-full flex items-center justify-center">{children}</span>
    </motion.button>
  );
};

export default MessageButton;
