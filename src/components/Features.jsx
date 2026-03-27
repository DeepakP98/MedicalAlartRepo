import { motion } from "framer-motion";

export default function Benefits() {
  const items = [
    {
      title: "24/7 Support",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
    },
    {
      title: "Fall Detection",
      icon: "https://cdn-icons-png.flaticon.com/512/2966/2966481.png",
    },
    {
      title: "GPS Tracking",
      icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    },
    {
      title: "Waterproof",
      icon: "https://cdn-icons-png.flaticon.com/512/728/728093.png",
    },
    {
      title: "Easy to Use",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    },
    {
      title: "Instant Alerts",
      icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Benefits
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              {/* ICON */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4 shadow-sm group-hover:shadow-md"
              >
                <motion.img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 md:w-10 md:h-10"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </motion.div>

              {/* TITLE */}
              <h3 className="text-sm md:text-lg font-semibold">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}