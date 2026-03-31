import { ShoppingCart, Zap } from 'lucide-react';
import logo from '../Assets/DigiTools.png';

export const Navbar = ({ cartCount, onViewChange }) => (
  <div className="navbar flex items-center justify-between bg-base-100 shadow-lg sticky top-0 z-50 px-4 md:px-12">
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
    <button 
        className="btn btn-ghost btn-circle"
        onClick={() => onViewChange('cart')}
      >
        <div className="indicator">
          <ShoppingCart size={24} />
          {cartCount > 0 && <span className="badge badge-sm badge-primary indicator-item">{cartCount}</span>}
        </div>
      </button>
  </div>
);
