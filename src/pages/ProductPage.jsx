import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '../data/dummyData';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!product || !product.images || product.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % product.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [product]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % product.images.length);
  };

  if (!product) {
    return (
      <div className="p-8 text-center flex-grow flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-4">Product Not Found</h2>
        <Link to="/" className="text-blue-600 underline">Return Home</Link>
      </div>
    );
  }

  const handleBuyNow = () => {
    // Pass the selected product and quantity via React Router state
    navigate('/checkout', { state: { product, quantity } });
  };

  return (
    <div className="bg-white flex-1 flex flex-col relative w-full h-full min-h-fit">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-20 bg-white/80 p-2 rounded-full shadow backdrop-blur-sm">
        <Link to="/" className="text-gray-900">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
      </div>

      {/* Product Images Scroller */}
      {product.images && product.images.length > 0 ? (
        <div className="flex flex-col w-full bg-white">
          <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
            <img 
              src={product.images[currentIndex]} 
              alt={`${product.name} - view ${currentIndex + 1}`} 
              className="w-full h-full object-cover transition-opacity duration-300 ease-in-out" 
            />
            {product.images.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white active:scale-95 transition-all z-10"
                >
                  <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white active:scale-95 transition-all z-10"
                >
                  <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
          
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex justify-center items-center gap-3 p-3 border-b border-gray-100">
              {product.images.map((imgSrc, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-14 h-14 rounded overflow-hidden relative transition-all ${currentIndex === idx ? 'ring-2 ring-black opacity-100' : 'opacity-40 hover:opacity-80'}`}
                >
                  <img src={imgSrc} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="w-full aspect-square bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover" 
          />
        </div>
      )}

      {/* Details */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-lg font-bold text-gray-900 leading-tight pr-2">{product.name}</h1>
          <span className="text-xl font-bold text-gray-900 ml-2 mt-0.5">₹{product.price}</span>
        </div>
        
        {product.features ? (
          <div className="flex flex-wrap gap-2 mb-6 mt-2">
            {product.features.map((feature, idx) => (
              <span key={idx} className={`text-xs font-bold px-2.5 py-1 rounded-full ring-1 ${feature.color}`}>
                {feature.text}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            {product.description}
          </p>
        )}

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-6 border-t border-b border-gray-100 py-4">
            <span className="text-sm font-medium text-gray-700">Quantity</span>
            <div className="flex items-center space-x-4 border border-gray-200 rounded min-w-[100px] justify-between px-3 py-1">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-gray-500 hover:text-black font-medium text-lg px-2 active:scale-90"
              >
                −
              </button>
              <span className="font-semibold text-gray-900">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="text-gray-500 hover:text-black font-medium text-lg px-2 active:scale-90"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-500 text-sm">Total Price</span>
            <span className="text-2xl font-bold text-gray-900">₹{product.price * quantity}</span>
          </div>

          <button 
            onClick={handleBuyNow}
            className="w-full bg-black text-white font-bold py-4 rounded focus:outline-none active:bg-gray-800 active:scale-[0.98] transition-all uppercase tracking-wide"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
