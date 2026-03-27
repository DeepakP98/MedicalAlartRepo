import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-28 px-10 overflow-hidden">

      {/* Glow effect */}
      <div className="absolute w-96 h-96 bg-blue-400 blur-3xl opacity-30 rounded-full top-10 right-10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Stay Safe Anytime <br /> with Smart Medical Alert
          </h1>

          <p className="mb-6 text-lg opacity-90">
            24/7 emergency support for you and your loved ones.
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
              Get Started
            </button>

            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition">
              📞 Call Now
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE (YOUR IMAGE + FLOAT ANIMATION) */}
        <motion.img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80"
          alt="medical assistance"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="rounded-2xl shadow-xl w-full"
        />
      </div>
    </section>
  );
}