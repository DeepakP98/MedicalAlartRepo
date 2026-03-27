import { useEffect, useState } from "react";

export default function Navbar() {
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
      className={`fixed top-0 w-full z-50 px-10 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md text-black"
          : "bg-white/10 backdrop-blur-md text-white"
      }`}
    >

      <h1 className="font-bold text-lg">Medical Alert</h1>

     
      <button
        className={`px-4 py-2 rounded-lg font-semibold transition ${
          scrolled
            ? "bg-blue-600 text-white"
            : "bg-white text-blue-600"
        }`}
      >
        Get Started
      </button>
    </nav>
  );
}