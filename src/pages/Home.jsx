import { Link } from 'react-router-dom';
import { products } from '../data/dummyData';
import heroImg from '../assets/hero1.png';

export default function Home() {
  return (
    <div className="pb-20 bg-gray-50 flex-1 flex flex-col w-full min-h-fit">
      {/* Hero Section */}
      <div className="relative bg-black h-72 flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>
        <div className="relative z-10 px-4">
          <h1 className="text-3xl font-serif text-white font-bold leading-snug mb-3 drop-shadow-md">
            Upgrade Your Walls Instantly
          </h1>
          <p className="text-gray-200 text-sm mb-6 drop-shadow">Premium, easy-install wallpapers.</p>
          <a 
            href="#trending" 
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded text-sm uppercase tracking-wide hover:bg-gray-100 active:scale-95 transition-transform"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Trending Products */}
      <div id="trending" className="px-4 pt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Trending Products</h2>
        
        <div className="flex flex-col space-y-4">
          {products.map(product => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className={`rounded-lg shadow-sm overflow-hidden flex flex-col active:bg-gray-50 transition-colors bg-white ${product.isSpecialOffer ? `border-2 ${product.offerColorStyles.border} relative` : 'border border-gray-100'}`}
            >
              {product.isSpecialOffer && (
                <div className={`${product.offerColorStyles.bg} text-white text-xs font-bold text-center py-1.5 uppercase tracking-wider animate-pulse`}>
                  {product.offerBanner}
                </div>
              )}
              <div className="flex flex-row">
                <div className="w-1/3 aspect-[4/5] flex-shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-center">
                  <span className={`inline-block text-[10px] uppercase font-bold px-2 py-1 rounded w-max mb-2 ${product.isSpecialOffer ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'}`}>
                    {product.tag}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-3 leading-snug">{product.name}</h3>
                  <span className="font-bold text-gray-900 mt-auto">₹{product.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
