export default function About() {
  return (
    <section id="about" className="py-24 bg-wallcraft-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern living room interior" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white border-8 border-wallcraft-bg overflow-hidden rounded-lg hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1574888806552-6a8babeec743?auto=format&fit=crop&q=80&w=400" 
                alt="Details of wallpaper texture" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-wallcraft-accent uppercase mb-3">Our Story</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Redefining Home Aesthetics</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At WallCraft, we believe that transforming your space shouldn't require hiring professionals or making permanent commitments. Our mission is to provide high-end, gallery-quality designs that anyone can install with zero mess.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Every roll is crafted with premium, durable vinyl that not only looks luxurious but is entirely waterproof and easily wipeable. Whether you are aiming for a minimalist sanctuary or a bold statement room, finding your perfect style has never been easier.
            </p>
            <button className="border-b-2 border-black pb-1 text-black font-semibold hover:border-wallcraft-accent hover:text-wallcraft-accent transition-colors duration-300 flex items-center">
              Read Our Full Story
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
