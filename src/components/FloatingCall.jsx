import { motion } from "framer-motion";

export default function FloatingCall() {
  return (
    <motion.div
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="bg-green-500 text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-xl flex items-center justify-center text-xl md:text-2xl hover:bg-green-600"
      >
        📞
      </motion.button>
    </motion.div>
  );
}