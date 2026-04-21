import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity } = location.state || {};

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    landmark: '',
    pincode: '',
    city: '',
    state: ''
  });

  // Redirect to home if no product in state (e.g., direct navigation to /checkout)
  useEffect(() => {
    if (!product) {
      navigate('/');
    }
  }, [product, navigate]);

  if (!product) return null;

  const total = product.price * quantity;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Prepare Email Data
    const payload = {
      _subject: `New WallCraft Order from ${formData.fullName}`,
      _template: "table",
      "Customer Name": formData.fullName,
      "Phone Number": formData.phone,
      "Product Name": product.name,
      "Product ID": product.id,
      "Quantity": quantity,
      "Total Price": `₹${total}`,
      "Address": formData.address,
      "Landmark": formData.landmark || "N/A",
      "City": formData.city,
      "State": formData.state,
      "Pincode": formData.pincode
    };

    // 2. Send via FormSubmit
    // ⚠️ REPLACE 'your_email@gmail.com' with your actual email address below!
    // The very first time you test the checkout, FormSubmit will send you an activation email to verify it's you.
    try {
      await fetch("https://formsubmit.co/ajax/faslurahmanop1010@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      console.log('Order Details sent to FormSubmit!');
    } catch (err) {
      console.error('Email failed:', err);
    }

    // 3. Complete Checkout UX
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="bg-white flex-1 flex flex-col items-center justify-center p-6 text-center h-full min-h-fit w-full">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
        <p className="text-gray-500 mb-8">Thank you for your order. We will deliver it soon via Cash on Delivery.</p>
        <Link 
          to="/" 
          className="w-full bg-black text-white font-bold py-4 rounded block uppercase tracking-wide active:bg-gray-800"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 flex-1 flex flex-col w-full h-full min-h-fit">
      <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center sticky top-0 z-10 w-full">
        <button onClick={() => navigate(-1)} className="mr-4 text-gray-900 active:scale-90">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="text-lg font-bold">Checkout</h1>
      </div>

      <div className="p-4 flex-grow overflow-y-auto">
        {/* Order Summary */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6 flex">
          <div className="w-20 h-20 bg-gray-100 rounded flex-shrink-0">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded" />
          </div>
          <div className="ml-4 flex flex-col justify-center flex-grow">
            <h3 className="text-sm font-semibold text-gray-900">{product.name}</h3>
            <p className="text-xs text-gray-500 mt-1">Qty: {quantity}</p>
            <p className="text-sm font-bold text-gray-900 mt-auto">₹{product.price}</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="font-bold text-gray-900 mb-2">Delivery Address</h2>
          
          <div>
            <input required type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
          </div>
          <div>
            <input required type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
          </div>
          <div>
            <textarea required name="address" placeholder="Flat, House no., Building, Company, Apartment" rows="2" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black"></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input name="landmark" type="text" placeholder="Landmark (Optional)" value={formData.landmark} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
            <input required name="pincode" type="text" placeholder="Pincode" value={formData.pincode} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input required name="city" type="text" placeholder="City" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
            <input required name="state" type="text" placeholder="State" value={formData.state} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black" />
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="font-bold text-gray-900 mb-4">Payment Method</h2>
            
            {/* Attractive COD Selection */}
            <div className="relative overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-500 rounded-xl p-4 flex items-center shadow-sm cursor-pointer transition-all hover:shadow-md">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg tracking-wider uppercase">
                Most Popular
              </div>
              
              <div className="flex-shrink-0 relative mt-1">
                <div className="w-6 h-6 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-white shadow-inner">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
              </div>
              
              <div className="ml-4 flex-grow">
                <h3 className="font-bold text-emerald-900 text-base flex items-center">
                  Cash on Delivery
                  <svg className="w-4 h-4 text-emerald-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </h3>
                <p className="text-xs text-emerald-700 mt-1 leading-relaxed">Pay conveniently at your doorstep. <span className="font-semibold underline decoration-emerald-300">100% secure</span>.</p>
              </div>
              
              <div className="ml-3 flex-shrink-0 bg-white p-2 rounded-lg shadow-sm border border-emerald-100">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-6 mb-6">
              <span className="font-medium text-gray-700">Total Amount</span>
              <span className="text-2xl font-bold text-gray-900">₹{total}</span>
            </div>

            <button 
              type="submit"
              className="w-full bg-black text-white font-bold py-4 rounded active:bg-gray-800 active:scale-[0.98] transition-all uppercase tracking-wide"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
