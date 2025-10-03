import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X, ShoppingCart, User, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { state } = useCart();
  const location = useLocation();

  useEffect(() => {
    const loginState = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginState === 'true');
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setIsOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/habits', label: 'Habits' },
    { to: '/images', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-green-700">
            <Leaf className="w-8 h-8" />
            <span className="text-xl font-bold">GardenTracker</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-green-700 bg-green-50'
                    : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Cart */}
            <Link
              to="/cart"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                isActive('/cart')
                  ? 'text-green-700 bg-green-50'
                  : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.items.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>

            {/* Login/Logout */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/login"
                className={`flex items-center space-x-1 px-4 py-2 rounded-md transition-colors ${
                  isActive('/login')
                    ? 'bg-green-600 text-white'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-green-700 hover:bg-green-50"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(link.to)
                      ? 'text-green-700 bg-green-50'
                      : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/cart')
                    ? 'text-green-700 bg-green-50'
                    : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                <div className="flex items-center space-x-1">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart</span>
                </div>
                {state.items.length > 0 && (
                  <span className="bg-green-600 text-white text-xs rounded-full px-2 py-1">
                    {state.items.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Link>

              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-left"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-1 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;