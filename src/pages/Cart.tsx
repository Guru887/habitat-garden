import React from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart, CartItem } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, addItem, removeItem, updateQuantity, clearCart } = useCart();

  // Sample products for demonstration
  const sampleProducts: Omit<CartItem, 'quantity'>[] = [
    {
      id: '1',
      name: 'Watering Can',
      price: 29.99,
      image: 'https://images.pexels.com/photos/4505166/pexels-photo-4505166.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'tool'
    },
    {
      id: '2',
      name: 'Garden Gloves',
      price: 15.99,
      image: 'https://images.pexels.com/photos/4505137/pexels-photo-4505137.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'tool'
    },
    {
      id: '3',
      name: 'Basil Plant',
      price: 8.99,
      image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'plant'
    },
    {
      id: '4',
      name: 'Tomato Seeds',
      price: 4.99,
      image: 'https://images.pexels.com/photos/4750314/pexels-photo-4750314.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'plant'
    },
    {
      id: '5',
      name: 'Plant Fertilizer',
      price: 19.99,
      image: 'https://images.pexels.com/photos/4750345/pexels-photo-4750345.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'tool'
    },
    {
      id: '6',
      name: 'Succulent Collection',
      price: 24.99,
      image: 'https://images.pexels.com/photos/4750378/pexels-photo-4750378.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'plant'
    }
  ];

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">Everything you need for your garden</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {state.items.length > 0 ? (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Cart Items ({state.items.length})</h2>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {state.items.map((item) => (
                    <div key={item.id} className="p-6 flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                        <p className="text-lg font-semibold text-green-600">{formatPrice(item.price)}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        
                        <span className="w-12 text-center font-medium text-gray-900">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors mt-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="px-6 py-4 border-t border-gray-200">
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-800 transition-colors font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-600 mb-6">Add some garden essentials to get started!</p>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Items ({state.items.reduce((sum, item) => sum + item.quantity, 0)})</span>
                  <span className="text-gray-900">{formatPrice(state.total)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">{formatPrice(state.total * 0.08)}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">{formatPrice(state.total * 1.08)}</span>
                </div>
              </div>
              
              <button
                disabled={state.items.length === 0}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium mt-6 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Proceed to Checkout
              </button>
            </div>

            {/* Sample Products */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Add More Items</h2>
              <div className="space-y-3">
                {sampleProducts
                  .filter(product => !state.items.some(item => item.id === product.id))
                  .slice(0, 3)
                  .map((product) => (
                  <div key={product.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                      <p className="text-green-600 font-semibold text-sm">{formatPrice(product.price)}</p>
                    </div>
                    <button
                      onClick={() => addItem(product)}
                      className="bg-green-600 text-white p-1 rounded hover:bg-green-700 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;