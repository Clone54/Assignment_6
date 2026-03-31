import { ShoppingCart, ArrowRight } from 'lucide-react';
import { CartItem } from './CartItem';

export const Cart = ({ cart, removeFromCart, proceedToCheckout, setView }) => {
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">

      {cart.length === 0 ? (
        <div className="text-center py-24 bg-base-200 rounded-3xl border-2 border-dashed border-base-300">
          <div className="w-24 h-24 bg-base-300 rounded-full flex items-center justify-center mx-auto mb-6 opacity-30">
            <ShoppingCart size={48} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Cart is empty</h3>
          <p className="mb-8 opacity-60">Add some tools to your cart to get started.</p>
          <button className="btn btn-primary px-8" onClick={() => setView('products')}>View Products</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-base-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-4 border-b border-base-100 gap-4">
              <span className="text-xl font-bold">{cart.length} Item{cart.length !== 1 ? 's' : ''} in your cart</span>
            </div>
            
            <div className="space-y-4 mb-10">
              {cart.map(item => (
                <CartItem key={item.id} item={item} onRemove={removeFromCart} />
              ))}
            </div>

            <div className="flex justify-between mb-4">
              <span className="text-sm opacity-60 font-bold">Total:</span>
              <span className="text-xl font-black text-blue-600">${cartTotal}</span>
            </div>

            <div className="flex flex-col gap-4">
              <button 
                className="btn btn-primary btn-block btn-lg rounded-2xl shadow-xl shadow-primary/20 group"
                onClick={proceedToCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
