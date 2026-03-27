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
      <h2 className="text-3xl font-bold mb-12">Testimonials</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition"
          >
           
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />

          
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{item.role}</p>

          
            <div className="text-yellow-400 mb-3">
              ⭐⭐⭐⭐⭐
            </div>

           
            <p className="text-gray-600 text-sm italic">
              "{item.text}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}