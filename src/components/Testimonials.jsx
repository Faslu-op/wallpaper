export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Interior Designer",
      content: "WallCraft has completely changed how I approach renting-friendly design. My clients are obsessed with the realistic marble textures, and I love how easy it is to apply.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Homeowner",
      content: "I used the wooden texture panels for my home office setup. It took me less than 2 hours to completely transform the room. The waterproof finish is a lifesaver.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "DIY Enthusiast",
      content: "The geometric gold line design gave my bedroom the luxury hotel feel I wanted, without the thousands of dollars. It peels right off when you make a mistake, brilliant!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Loved by our Customers</h2>
          <div className="w-24 h-1 bg-wallcraft-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-wallcraft-bg p-8 rounded-2xl relative shadow-sm border border-gray-100">
              <svg className="absolute top-6 left-6 w-10 h-10 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="mt-8 text-gray-600 italic mb-6 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm" src={testimonial.image} alt={testimonial.name} />
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
