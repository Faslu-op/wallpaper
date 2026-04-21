export default function ProductCard({ product }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-gray-100 rounded-lg aspect-[4/5] mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <button className="w-full bg-white text-black font-medium py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 line-clamp-2 pr-4">{product.description}</p>
        </div>
        <span className="font-semibold text-gray-900">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}
