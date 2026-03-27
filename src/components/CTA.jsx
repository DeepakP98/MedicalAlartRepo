import { motion } from "framer-motion";

export default function CTA({ onGetStarted }) {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 text-center relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        
       
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold mb-6"
        >
          Start Protecting Your Loved Ones Today
        </motion.h2>

        {/* BUTTON */}
        <motion.button
          onClick={onGetStarted} 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}