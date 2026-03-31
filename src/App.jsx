import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Stats } from './components/Stats';
import { ProductCard } from './components/ProductCard';
import { StepsSection } from './components/StepsSection';
import { PricingSection } from './components/PricingSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';

import { productsData } from './constants/products';

export default function App() {
  const [view, setView] = useState('products');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/react-toastify@9.1.3/dist/ReactToastify.css';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const savedCartData = localStorage.getItem('digitools_cart_v1');
    if (savedCartData) {
      try {
        const parsed = JSON.parse(savedCartData);
        const hydratedCart = parsed.map(p => productsData.find(pd => pd.id === p.id)).filter(p => !!p);
        setCart(hydratedCart);
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  useEffect(() => {
    const minimalCart = cart.map(({ id }) => ({ id }));
    localStorage.setItem('digitools_cart_v1', JSON.stringify(minimalCart));
  }, [cart]);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      toast.info(`${product.name} is already in the cart!`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`Added ${product.name} to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      theme: "colored"
    });
  };

  const removeFromCart = (id) => {
    const product = cart.find(item => item.id === id);
    setCart(cart.filter(item => item.id !== id));
    toast.warn(`Removed ${product?.name} from cart!`);
  };

  const proceedToCheckout = () => {
    if (cart.length === 0) return;
    toast.success("Proceeding to checkout... Your items have been processed!", {
      icon: "🚀"
    });
    setCart([]);
    setView('products');
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content font-sans">
      <Navbar cartCount={cart.length} onViewChange={setView} />

      {view === 'products' && (
        <>
          <Banner />
          <Stats />
        </>
      )}

      <main className="py-16 px-4 md:px-12 max-w-7xl mx-auto min-h-[50vh]">
        <div className="flex flex-col items-center justify-center mb-16"> 
          <div className="flex flex-col items-center justify-center max-w-2xl mb-8">
            <h1 className="text-4xl font-extrabold mb-4">Premium Digital Tools</h1>
            <p className="text-base-content/70 text-lg text-center">
              Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
            </p>
          </div>
          <div className="tabs tabs-boxed bg-base-300 p-1 rounded-2xl">
            <button 
              className={`tab tab-lg px-10 font-black rounded-full transition-all ${view === 'products' ? 'tab-active bg-primary text-white shadow-lg' : ''}`}
              onClick={() => setView('products')}
            >
              PRODUCTS
            </button> 
            <button 
              className={`tab tab-lg px-10 font-black rounded-full transition-all ${view === 'cart' ? 'tab-active bg-primary text-white shadow-lg' : ''}`}
              onClick={() => setView('cart')}
            >
              CART
            </button>
          </div>
        </div>

        {view === 'products' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  addToCart={addToCart} 
                  isInCart={cart.some(item => item.id === product.id)}
                />
              ))}
            </div>
        ) : (
          <Cart 
            cart={cart} 
            removeFromCart={removeFromCart} 
            proceedToCheckout={proceedToCheckout} 
            setView={setView} 
          />
        )}
      </main>

      {view === 'products' && (
        <>
          <StepsSection />
          <PricingSection />
          <CTASection />
        </>
      )}

      <Footer />

      <ToastContainer 
        aria-label="Toast Container"
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
