import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Checkout from './pages/Checkout';
import { useEffect, useRef } from 'react';

function MobileContainer({ children }) {
  const scrollRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    // Navigate back to the top of our custom scroll container exactly when the route changes!
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="bg-gray-800 min-[100dvh] flex justify-center items-center w-full">
      {/* Mobile constraint frame */}
      <div className="w-full max-w-[480px] bg-white h-[100dvh] shadow-2xl relative flex flex-col sm:rounded-md sm:h-[95vh] overflow-hidden">
        <div ref={scrollRef} className="flex-1 overflow-y-auto relative flex flex-col h-full w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <MobileContainer>
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </MobileContainer>
    </Router>
  );
}

export default App;
