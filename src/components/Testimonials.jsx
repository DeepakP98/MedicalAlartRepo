import { motion } from "framer-motion";

export default function Testimonials() {
  const data = [
    {
      name: "John Smith",
      role: "Son",
      text: "This device saved my father's life. Highly recommended!",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Daughter",
      text: "Now I feel safe knowing my mom is protected 24/7.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Robert Brown",
      role: "User",
      text: "Very easy to use and extremely reliable.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <section className="py-20 bg-blue-50 text-center">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Testimonials
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-100"
            >
              {/* AVATAR */}
              <div className="relative w-fit mx-auto mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
                />
              </div>

              {/* NAME */}
              <h3 className="font-semibold text-base md:text-lg">
                {item.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mb-2">
                {item.role}
              </p>

              {/* STARS */}
              <div className="text-yellow-400 mb-3 text-sm">
                ⭐⭐⭐⭐⭐
              </div>

              {/* TEXT */}
              <p className="text-gray-600 text-sm italic leading-relaxed">
                "{item.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}