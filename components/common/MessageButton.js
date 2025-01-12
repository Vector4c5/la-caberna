import { motion } from "framer-motion";
import Link from "next/link"; // Importar Link de Next.js

const MessageButton = ({ children, link }) => {
  const buttonContent = (
    <motion.button
      className="w-full h-96 rounded-lg text-lg font-bold bg-slate-900 bg-opacity-80 border-4 border-violet-950
      shadow-lg shadow-purple-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px #0A3B59, 0 0 30px #0A3B59, 0 0 40px #0A3B59",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="w-full h-full flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  );

  if (link) {
    return <Link href={link}>{buttonContent}</Link>;
  }

  return buttonContent;
};

export default MessageButton;
