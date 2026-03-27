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
      <h2 className="text-3xl font-bold mb-12">Benefits</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="group bg-white p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition"
          >
            {/* ICON WITH ANIMATION */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2 + i * 0.2,
              }}
              className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4"
            >
              <motion.img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10"
                whileHover={{ scale: 1.2, rotate: 5 }}
              />
            </motion.div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}