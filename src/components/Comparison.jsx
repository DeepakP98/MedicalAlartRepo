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
      <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

       
        <div className="grid grid-cols-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-4">
          <div>Feature</div>
          <div>Our Brand</div>
          <div>Others</div>
        </div>

       
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="grid grid-cols-3 py-5 border-t hover:bg-blue-50 transition"
          >
           
            <div className="font-medium">{item.feature}</div>

          
            <div className="text-green-600 font-semibold flex justify-center items-center gap-2">
              <span>✔</span> {item.our}
            </div>

         
            <div className="text-red-500 font-semibold flex justify-center items-center gap-2">
              <span>✖</span> {item.other}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}