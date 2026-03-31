import { ShoppingCart, Zap } from 'lucide-react';
import logo from '../Assets/DigiTools.png';
import cartLogo from '../Assets/products/shopping-cart.png'

export const Navbar = ({ cartCount, onViewChange }) => (
  <div className="navbar flex items-center justify-between bg-base-100 shadow-lg sticky top-0 z-50 px-4 md:px-42">
    <div>
      <a href="/index.html">
        <img src={logo} alt="Logo" />
      </a>
    </div>
      <div className="hidden md:flex gap-1 mr-4">
        <button className="btn btn-ghost btn-sm" onClick={() => onViewChange('products')}>Products</button>
        <button className="btn btn-ghost btn-sm">Features</button>
        <button className="btn btn-ghost btn-sm">Pricing</button>
        <button className="btn btn-ghost btn-sm">Testimonials</button>
        <button className="btn btn-ghost btn-sm">FAQ</button>
      </div>
    <div>
      <button 
        className="btn btn-ghost btn-circle"
        onClick={() => onViewChange('cart')}
      >
        <div className="indicator">
          <img src={cartLogo} alt="Shopping Cart" />
          {cartCount > 0 && <span className="badge badge-xs badge-secondary indicator-item">{cartCount}</span>}
        </div>
      </button>
      <button className='btn rounded-full'>
        Login
      </button>
      <button className='btn btn-primary rounded-full hover:bg-white hover:text-primary'>Get Started</button>
    </div>
  </div>
);
