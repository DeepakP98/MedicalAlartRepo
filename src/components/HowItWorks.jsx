import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      title: "Choose Your Plan",
      desc: "Select the best plan that fits your needs",
      img: "https://cdn-icons-png.flaticon.com/512/929/929426.png",
    },
    {
      title: "Wear the Device",
      desc: "Simply wear the device anytime, anywhere",
      img: "https://cdn-icons-png.flaticon.com/512/1048/1048947.png",
    },
    {
      title: "Get Help Anytime",
      desc: "Press button to get instant emergency help",
      img: "https://cdn-icons-png.flaticon.com/512/483/483947.png",
    },
  ];

  return (
    <section className="container-custom py-20 text-center bg-white">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>

<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {steps.map((step, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.2 }}
      className="p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition bg-gray-50"
    >
      {/* ICON */}
      <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
        <img
          src={step.img}
          alt={step.title}
          className="w-10 h-10"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold mb-2">
        {step.title}
      </h3>

      {/* DESC */}
      <p className="text-gray-600 text-sm">
        {step.desc}
      </p>
    </motion.div>
  ))}
</div>
    </section>
  );
}