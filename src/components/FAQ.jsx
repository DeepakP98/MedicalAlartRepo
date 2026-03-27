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
      <div className="max-w-3xl mx-auto px-4 md:px-10">
        
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          FAQs
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -80 : 80,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, delay: i * 0.15 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              {/* QUESTION */}
              <div
                onClick={() => toggle(i)}
                className="flex justify-between items-center p-4 md:p-5 cursor-pointer hover:bg-gray-50 transition"
              >
                <h3 className="font-semibold text-sm md:text-base text-left">
                  {item.q}
                </h3>

                {/* ICON */}
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  className="text-xl font-bold"
                >
                  {openIndex === i ? "−" : "+"}
                </motion.span>
              </div>

              {/* ANSWER */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 md:px-5 pb-4 text-gray-600 text-sm text-left"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}