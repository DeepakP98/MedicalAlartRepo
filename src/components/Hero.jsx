import { motion } from "framer-motion";
import heroImg from "../assets/20260327_154741_0000.png";

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative z-10 bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 md:py-28 overflow-hidden">
      
      {/* 🔥 GLOW (CLICK BLOCK FIX) */}
      <div className="pointer-events-none absolute w-72 md:w-96 h-72 md:h-96 bg-blue-400 blur-3xl opacity-30 rounded-full top-10 right-10"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Stay Safe Anytime <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              with Smart Medical Alert
            </span>
          </h1>

          <p className="mb-6 text-sm md:text-lg opacity-90">
            24/7 emergency support for you and your loved ones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            
            <motion.button
              onClick={onGetStarted}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-20 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition"
            >
              Get Started
            </motion.button>

            <a href="tel:+918001234567">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-20 border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition"
              >
                📞 Call Now
              </motion.button>
            </a>
          </div>

          {/* TRUST */}
          <div className="mt-6 text-sm opacity-90 space-x-4">
            <span>✔ 24/7 Monitoring</span>
            <span>✔ No Hidden Fees</span>
            <span>✔ Easy Setup</span>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.img
          src={heroImg}
          alt="medical assistance"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="rounded-2xl shadow-xl w-full max-w-xs h-64 mx-auto md:max-w-sm md:h-80 object-cover"
        />
      </div>
    </section>
  );
}