import { useState } from "react";
import ContactModal from "./ContactModal";

export default function CTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Start Protecting Your Loved Ones Today
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Get Started
        </button>
      </section>

      {/* MODAL */}
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}