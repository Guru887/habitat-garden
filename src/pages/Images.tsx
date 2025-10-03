import React, { useState } from 'react';
import { Search, Grid, List, Heart, Download } from 'lucide-react';

interface GardenImage {
  id: string;
  title: string;
  category: string;
  url: string;
  description: string;
  tags: string[];
}

const Images: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedImage, setSelectedImage] = useState<GardenImage | null>(null);

  // Sample garden images from Pexels
  const gardenImages: GardenImage[] = [
    {
      id: '1',
      title: 'Beautiful Rose Garden',
      category: 'flowers',
      url: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A stunning rose garden in full bloom with various colorful roses',
      tags: ['roses', 'flowers', 'garden', 'colorful', 'bloom']
    },
    {
      id: '2',
      title: 'Vegetable Garden Layout',
      category: 'vegetables',
      url: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Well-organized vegetable garden with raised beds and healthy plants',
      tags: ['vegetables', 'raised-beds', 'organized', 'healthy', 'organic']
    },
    {
      id: '3',
      title: 'Herb Garden Collection',
      category: 'herbs',
      url: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Fresh herb garden with basil, rosemary, and other culinary herbs',
      tags: ['herbs', 'basil', 'rosemary', 'culinary', 'fresh']
    },
    {
      id: '4',
      title: 'Japanese Garden Style',
      category: 'design',
      url: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Peaceful Japanese-inspired garden with stones and minimalist design',
      tags: ['japanese', 'zen', 'stones', 'peaceful', 'minimalist']
    },
    {
      id: '5',
      title: 'Succulent Garden',
      category: 'succulents',
      url: 'https://images.pexels.com/photos/1212693/pexels-photo-1212693.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful arrangement of various succulents in decorative pots',
      tags: ['succulents', 'arrangements', 'pots', 'decorative', 'low-maintenance']
    },
    {
      id: '6',
      title: 'Butterfly Garden',
      category: 'flowers',
      url: 'https://images.pexels.com/photos/1429659/pexels-photo-1429659.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Colorful flower garden designed to attract butterflies and pollinators',
      tags: ['butterflies', 'pollinators', 'colorful', 'native', 'wildlife']
    },
    {
      id: '7',
      title: 'Urban Rooftop Garden',
      category: 'design',
      url: 'https://images.pexels.com/photos/4750378/pexels-photo-4750378.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern rooftop garden in urban setting with container plants',
      tags: ['urban', 'rooftop', 'containers', 'modern', 'space-saving']
    },
    {
      id: '8',
      title: 'Cottage Garden Style',
      category: 'design',
      url: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Charming cottage-style garden with mixed flowers and natural pathways',
      tags: ['cottage', 'mixed-flowers', 'pathways', 'charming', 'natural']
    },
    {
      id: '9',
      title: 'Tomato Growing Tips',
      category: 'vegetables',
      url: 'https://images.pexels.com/photos/4750314/pexels-photo-4750314.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Healthy tomato plants growing in garden with proper support',
      tags: ['tomatoes', 'support', 'growing', 'healthy', 'garden']
    },
    {
      id: '10',
      title: 'Lavender Field',
      category: 'herbs',
      url: 'https://images.pexels.com/photos/4750345/pexels-photo-4750345.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Peaceful lavender field in bloom with purple flowers',
      tags: ['lavender', 'purple', 'field', 'fragrant', 'calming']
    },
    {
      id: '11',
      title: 'Greenhouse Interior',
      category: 'design',
      url: 'https://images.pexels.com/photos/4750166/pexels-photo-4750166.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Well-organized greenhouse interior with various plants and tools',
      tags: ['greenhouse', 'interior', 'organized', 'tools', 'plants']
    },
    {
      id: '12',
      title: 'Cactus Collection',
      category: 'succulents',
      url: 'https://images.pexels.com/photos/4750137/pexels-photo-4750137.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Diverse collection of cacti and desert plants in terracotta pots',
      tags: ['cacti', 'desert', 'terracotta', 'collection', 'drought-resistant']
    }
  ];

  const categories = ['all', ...new Set(gardenImages.map(img => img.category))];

  const filteredImages = gardenImages.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Garden Inspiration Gallery</h1>
          <p className="text-gray-600">Discover beautiful garden ideas and get inspired for your own space</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search gardens, plants, styles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>

          {/* View Mode Toggle */}
          <div className="flex bg-gray-200 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-300'
              }`}
            >
              <Grid className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-300'
              }`}
            >
              <List className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredImages.length} of {gardenImages.length} images
          </p>
        </div>

        {/* Image Gallery */}
        {filteredImages.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-6"
          }>
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer ${
                  viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <div className={viewMode === 'list' ? 'sm:w-64 flex-shrink-0' : 'aspect-square'}>
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-4 flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg">{image.title}</h3>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full capitalize">
                      {image.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {image.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {image.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                    {image.tags.length > 3 && (
                      <span className="text-xs text-gray-500">+{image.tags.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <span className="text-6xl">🌻</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No images found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or category filter
            </p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl max-h-full overflow-hidden">
              <div className="relative">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-96 object-cover"
                />
                
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-colors"
                >
                  <span className="text-xl text-gray-700">×</span>
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h2>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full capitalize">
                      {selectedImage.category}
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                      <Download className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {selectedImage.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {selectedImage.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Images;