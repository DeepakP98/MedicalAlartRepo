export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">
        Get Started Now
      </h2>

      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 border rounded-lg"
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </section>
  );
}