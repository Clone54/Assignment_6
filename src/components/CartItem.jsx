import { Trash2 } from 'lucide-react';

export const CartItem = ({ item, onRemove }) => (
  <div className="flex items-center justify-between p-4 bg-base-200 rounded-2xl mb-4 group transition-all hover:bg-base-300">
    <div className="flex items-center gap-4">
      <div className="p-2 bg-white rounded-xl shadow-sm">
        {item.icon}
      </div>
      <div>
        <h3 className="font-bold text-lg">{item.name}</h3>
        <p className="text-sm opacity-60 text-primary font-bold">${item.price}</p>
      </div>
    </div>
    <button 
      className="btn btn-ghost btn-circle text-error"
      onClick={() => onRemove(item.id)}
    >
      <Trash2 size={20} />
    </button>
  </div>
);
