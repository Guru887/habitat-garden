import React from 'react';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-green-400" />
              <span className="text-xl font-bold">GardenTracker</span>
            </div>
            <p className="text-gray-400">
              Your companion for building healthy gardening habits and growing beautiful spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="/habits" className="text-gray-400 hover:text-green-400 transition-colors">My Habits</a></li>
              <li><a href="/images" className="text-gray-400 hover:text-green-400 transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Garden Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Plant Care Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Seasonal Calendar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">hello@gardentracker.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">Garden City, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 GardenTracker. All rights reserved. Made with 🌱 for garden lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;