export function Contact() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold mb-4">
          Get Your Free Quote Today
        </h2>

        <p className="text-lg text-gray-300 mb-8">
          Professional land clearing & dirt work services in Texas. Fast, reliable, and affordable.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          <a
            href="tel:+12108914174"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            📞 Call Now (210) 891-4174
          </a>

          <a
            href="mailto:jayslandclearingservices@gmail.com"
            className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
          >
            ✉️ Email Us
          </a>

        </div>

      </div>
    </section>
  )
}
