import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$19/mo",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
      features: ["24/7 Support", "Basic Alerts", "Email Support"],
      position: "left",
    },
    {
      name: "Popular",
      price: "$29/mo",
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048947.png",
      highlight: true,
      features: ["24/7 Support", "GPS Tracking", "Fall Detection"],
      position: "middle",
    },
    {
      name: "Premium",
      price: "$39/mo",
      icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
      features: ["All Features", "Priority Support", "Advanced Tracking"],
      position: "right",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-20 text-center text-gray-800">
          Pricing Plans
        </h2>

        {/* Added 'perspective' to the container to allow 3D Z-axis movement 
        */}
        <div 
          className="flex flex-col md:flex-row items-center justify-center gap-0 md:-space-x-4"
          style={{ perspective: "1200px" }}
        >
          {plans.map((plan, i) => {
            // Logic for visual layering
            const isMiddle = plan.position === "middle";
            const isLeft = plan.position === "left";
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                
                // HOVER STATE: Pops the card to the front
                whileHover={{ 
                  z: 100, 
                  scale: 1.05, 
                  transition: { duration: 0.3 },
                  zIndex: 50 
                }}
                
                // DEFAULT STATE: Creates the overlapping "Behind" look
                animate={{
                  z: isMiddle ? 0 : -60,
                  rotateY: isLeft ? 5 : isMiddle ? 0 : -5,
                  x: isLeft ? 20 : isMiddle ? 0 : -20, // Nudge side cards inward
                }}
                
                className={`relative w-full max-w-sm p-8 rounded-3xl shadow-2xl transition-all border ${
                  plan.highlight
                    ? "bg-blue-600 text-white z-20 scale-110 shadow-blue-200/50"
                    : "bg-white text-gray-800 z-10 border-gray-200"
                }`}
              >
                {/* POPULAR BADGE */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 text-xs rounded-full font-bold uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}

                {/* ICON */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className={`p-4 rounded-2xl w-fit mx-auto mb-6 ${
                    plan.highlight ? "bg-white/20" : "bg-blue-50"
                  }`}
                >
                  <img src={plan.icon} alt={plan.name} className="w-12 h-12" />
                </motion.div>

                <h3 className="text-xl font-extrabold mb-2 text-center uppercase tracking-tight">
                  {plan.name}
                </h3>

                <div className="text-center mb-6">
                  <span className="text-4xl font-black">{plan.price}</span>
                </div>

                <ul className="text-sm space-y-4 mb-8 border-t border-b py-6 border-white/10">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className={plan.highlight ? "text-yellow-400" : "text-blue-600"}>✔</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-2xl font-bold text-lg transition-transform active:scale-95 ${
                    plan.highlight
                      ? "bg-white text-blue-600 hover:shadow-lg"
                      : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                  }`}
                >
                  Choose {plan.name}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}