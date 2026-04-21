export default function Hero() {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-bold leading-tight mb-6 animate-fade-in-up">
          Transform Your Walls in Minutes
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-200 font-light mb-10 max-w-3xl mx-auto">
          Premium peel-and-stick wallpapers to elevate your modern home decor. Waterproof, durable, and effortlessly stylish.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#products" 
            className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
          >
            Shop Now
          </a>
          <a 
            href="#about" 
            className="inline-block bg-transparent text-white border border-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
