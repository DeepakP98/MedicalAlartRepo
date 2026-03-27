import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$19/mo",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
    },
    {
      name: "Popular",
      price: "$29/mo",
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048947.png",
      highlight: true,
    },
    {
      name: "Premium",
      price: "$39/mo",
      icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-12">Pricing</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className={`relative p-8 rounded-2xl shadow-xl transition ${
              plan.highlight
                ? "bg-blue-600 text-white scale-105 hover:scale-110"
                : "bg-white hover:scale-105"
            }`}
          >
           
            {plan.highlight && (
              <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 text-xs rounded-full font-semibold">
                Most Popular
              </div>
            )}

           
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
                className="w-10 h-10"
              />
            </motion.div>

           
            <h3 className="text-xl font-bold mb-2">
              {plan.name}
            </h3>

 
            <p className="text-3xl font-bold mb-4">
              {plan.price}
            </p>

          
            <p className="text-sm opacity-80 mb-4">
              No Hidden Charges
            </p>

         
            <button
              className={`px-5 py-2 rounded-xl font-semibold transition ${
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
    </section>
  );
}