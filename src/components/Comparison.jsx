import { motion } from "framer-motion";

export default function Comparison() {
  const data = [
    {
      feature: "Pricing",
      our: "Clear",
      other: "Hidden",
    },
    {
      feature: "Setup",
      our: "Easy",
      other: "Complex",
    },
    {
      feature: "Plans",
      our: "Simple",
      other: "Confusing",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Choose Us
        </h2>

        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* HEADER */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-4 text-sm md:text-base">
            <div>Feature</div>
            <div>Our Brand</div>
            <div>Others</div>
          </div>

          {/* ROWS */}
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -80 : 80, // left-right animation 🔥
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="grid grid-cols-3 py-5 border-t hover:bg-blue-50 transition text-sm md:text-base"
            >
              
              {/* FEATURE */}
              <div className="font-medium">{item.feature}</div>

              {/* OUR */}
              <div className="text-green-600 font-semibold flex justify-center items-center gap-2">
                <span className="text-lg">✔</span>
                {item.our}
              </div>

              {/* OTHER */}
              <div className="text-red-500 font-semibold flex justify-center items-center gap-2">
                <span className="text-lg">✖</span>
                {item.other}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}