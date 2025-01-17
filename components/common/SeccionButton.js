import { color, motion } from "framer-motion";
import Link from "next/link"; // Importar Link de Next.js

const SeccionButton = ({ link, children }) => {
  const buttonContent = (
    <motion.button
      className="w-full h-36 rounded-lg text-xl p-5 m-0 bg-black bg-opacity-80
                 border-4 border-emerald-500 shadow-md shadow-slate-300
                 transition-transform duration-500 ease-out items-end justify-between"
      
      whileHover={{
        scale: 1.05,
        backgroundColor: "#212026",
        boxShadow: "0 0 15px #F2F2F2, 0 0 15px #F2F2F2, 0 0 40px #F2F2F2",
        
      }}
      whileTap={{ scale: 0.95 }}
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
