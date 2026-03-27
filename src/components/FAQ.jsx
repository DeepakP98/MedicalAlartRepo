import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is there any hidden charge?",
      a: "No, our pricing is completely transparent with no hidden fees.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes, you can cancel your subscription anytime.",
    },
    {
      q: "Does the device work everywhere?",
      a: "Yes, it works nationwide with GPS tracking support.",
    },
    {
      q: "How fast is emergency response?",
      a: "You get instant response within seconds after pressing the button.",
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: i % 2 === 0 ? -100 : 100,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* QUESTION */}
            <div
              onClick={() => toggle(i)}
              className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50 transition"
            >
              <h3 className="font-semibold">{item.q}</h3>

              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                className="text-xl"
              >
                ⌄
              </motion.span>
            </div>

        
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5 text-gray-600 text-sm"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}