import { useEffect, useState } from "react";

export default function Navbar({ onGetStarted }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md text-black"
          : "bg-white/10 backdrop-blur-md text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-10 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="font-bold text-lg">Medical Alert</h1>

        {/* BUTTON */}
        <button
          onClick={onGetStarted}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            scrolled
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          }`}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}