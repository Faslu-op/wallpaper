import ProductCard from './ProductCard';
import { products } from '../data/dummyData';

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Bestsellers</h2>
          <div className="w-24 h-1 bg-wallcraft-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Curated designs that bring life to any room. Explore our most popular collections.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="border-2 border-black text-black px-10 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 font-medium">
            View All Designs
          </button>
        </div>
      </div>
    </section>
  );
}
