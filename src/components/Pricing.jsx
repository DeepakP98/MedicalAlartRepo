import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$19/mo",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
      features: ["24/7 Support", "Basic Alerts", "Email Support"],
    },
    {
      name: "Popular",
      price: "$29/mo",
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048947.png",
      highlight: true,
      features: ["24/7 Support", "GPS Tracking", "Fall Detection"],
    },
    {
      name: "Premium",
      price: "$39/mo",
      icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
      features: ["All Features", "Priority Support", "Advanced Tracking"],
    },
  ];

  return (
    <section className="py-20 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Pricing Plans
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`relative p-6 md:p-8 rounded-2xl shadow-xl transition border ${
                plan.highlight
                  ? "bg-blue-600 text-white scale-105 border-blue-500"
                  : "bg-white border-gray-100"
              }`}
            >
              {/* BADGE */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 text-xs rounded-full font-semibold shadow">
                  Most Popular
                </div>
              )}

              {/* ICON */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className={`p-4 rounded-full w-fit mx-auto mb-4 ${
                  plan.highlight ? "bg-white/20" : "bg-blue-100"
                }`}
              >
                <img
                  src={plan.icon}
                  alt={plan.name}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </motion.div>

              {/* NAME */}
              <h3 className="text-lg md:text-xl font-bold mb-2">
                {plan.name}
              </h3>

              {/* PRICE */}
              <p className="text-2xl md:text-3xl font-bold mb-4">
                {plan.price}
              </p>

              {/* FEATURES */}
              <ul className="text-sm space-y-2 mb-5">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>

              {/* TEXT */}
              <p className="text-xs opacity-80 mb-4">
                No Hidden Charges
              </p>

              {/* BUTTON */}
              <button
                className={`w-full py-2 rounded-xl font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-gray-200"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}