import React from 'react';
import { CheckCircle } from 'lucide-react';

export const ProductCard = ({ product, addToCart, isInCart }) => (
  <div className="card bg-base-100 shadow-xl border border-base-200 transition-all hover:shadow-2xl hover:-translate-y-1">
    <div className="card-body">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-base-200 rounded-2xl">
          {product.icon}
        </div>
        <div className={`badge badge-${product.tagType} font-bold p-3`}>{product.tag}</div>
      </div>
      <h2 className="card-title text-xl font-bold">{product.name}</h2>
      <p className="text-base-content/60 text-sm mb-4 line-clamp-2">{product.description}</p>
      
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-3xl font-black">${product.price}</span>
        <span className="text-base-content/50 text-sm">/ {product.period}</span>
      </div>

      <div className="space-y-3 mb-8">
        {product.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm">
            <CheckCircle size={16} className="text-success" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="card-actions justify-end mt-auto">
        <button 
          className={`btn w-full ${isInCart ? 'btn-success text-white' : 'btn-primary'}`}
          onClick={() => addToCart(product)}
        >
          {isInCart ? 'Added to Cart' : 'Buy Now'}
        </button>
      </div>
    </div>
  </div>
);
