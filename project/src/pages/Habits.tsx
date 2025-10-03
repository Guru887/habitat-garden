import React, { useState, useEffect } from 'react';
import { Plus, Filter, Search } from 'lucide-react';
import HabitCard, { Habit } from '../components/HabitCard';

const Habits: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [filteredHabits, setFilteredHabits] = useState<Habit[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Sample habits data
  const sampleHabits: Habit[] = [
    {
      id: '1',
      title: 'Water Indoor Plants',
      description: 'Check soil moisture and water indoor plants as needed',
      frequency: 'daily',
      category: 'Watering',
      streak: 15,
      completed: false,
      lastCompleted: '2025-01-16',
      icon: '💧'
    },
    {
      id: '2',
      title: 'Check Outdoor Garden',
      description: 'Inspect outdoor plants for pests and diseases',
      frequency: 'daily',
      category: 'Maintenance',
      streak: 8,
      completed: true,
      lastCompleted: '2025-01-17',
      icon: '🌱'
    },
    {
      id: '3',
      title: 'Fertilize Vegetables',
      description: 'Apply organic fertilizer to vegetable garden',
      frequency: 'weekly',
      category: 'Fertilizing',
      streak: 4,
      completed: false,
      lastCompleted: '2025-01-14',
      icon: '🥕'
    },
    {
      id: '4',
      title: 'Prune Dead Branches',
      description: 'Remove dead or diseased branches from trees and shrubs',
      frequency: 'weekly',
      category: 'Pruning',
      streak: 12,
      completed: false,
      lastCompleted: '2025-01-15',
      icon: '✂️'
    },
    {
      id: '5',
      title: 'Compost Management',
      description: 'Turn compost pile and add kitchen scraps',
      frequency: 'weekly',
      category: 'Composting',
      streak: 22,
      completed: true,
      lastCompleted: '2025-01-17',
      icon: '🍂'
    },
    {
      id: '6',
      title: 'Seed Starting',
      description: 'Check on seedlings and rotate seed trays',
      frequency: 'daily',
      category: 'Planting',
      streak: 3,
      completed: false,
      lastCompleted: '2025-01-16',
      icon: '🌿'
    },
    {
      id: '7',
      title: 'Harvest Herbs',
      description: 'Harvest fresh herbs for cooking and preserve extras',
      frequency: 'weekly',
      category: 'Harvesting',
      streak: 6,
      completed: false,
      lastCompleted: '2025-01-14',
      icon: '🌿'
    },
    {
      id: '8',
      title: 'Garden Planning',
      description: 'Review and plan next season\'s garden layout',
      frequency: 'monthly',
      category: 'Planning',
      streak: 2,
      completed: true,
      lastCompleted: '2025-01-01',
      icon: '📋'
    }
  ];

  useEffect(() => {
    // Load habits from localStorage or use sample data
    const savedHabits = localStorage.getItem('gardenHabits');
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    } else {
      setHabits(sampleHabits);
      localStorage.setItem('gardenHabits', JSON.stringify(sampleHabits));
    }
  }, []);

  useEffect(() => {
    let filtered = habits;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(habit =>
        habit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        habit.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        habit.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (filterCategory !== 'all') {
      filtered = filtered.filter(habit =>
        habit.category.toLowerCase() === filterCategory.toLowerCase()
      );
    }

    setFilteredHabits(filtered);
  }, [habits, searchTerm, filterCategory]);

  const handleHabitToggle = (id: string) => {
    const updatedHabits = habits.map(habit => {
      if (habit.id === id) {
        const now = new Date().toISOString().split('T')[0];
        const isCompleting = !habit.completed;
        
        return {
          ...habit,
          completed: isCompleting,
          streak: isCompleting ? habit.streak + 1 : habit.streak,
          lastCompleted: isCompleting ? now : habit.lastCompleted
        };
      }
      return habit;
    });

    setHabits(updatedHabits);
    localStorage.setItem('gardenHabits', JSON.stringify(updatedHabits));
  };

  const categories = ['all', ...new Set(habits.map(habit => habit.category))];

  const completedToday = habits.filter(habit => habit.completed).length;
  const totalHabits = habits.length;
  const completionRate = totalHabits > 0 ? Math.round((completedToday / totalHabits) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Garden Habits</h1>
          <p className="text-gray-600">Track your daily gardening routine and build lasting habits</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">{completedToday}</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Completed Today</p>
                <p className="text-2xl font-bold text-gray-900">{completedToday}/{totalHabits}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">%</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Completion Rate</p>
                <p className="text-2xl font-bold text-gray-900">{completionRate}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">{totalHabits}</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Habits</p>
                <p className="text-2xl font-bold text-gray-900">{totalHabits}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search habits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white min-w-48"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          {/* Add Habit Button */}
          <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Plus className="w-5 h-5 mr-2" />
            Add Habit
          </button>
        </div>

        {/* Habits Grid */}
        {filteredHabits.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredHabits.map((habit) => (
              <HabitCard
                key={habit.id}
                habit={habit}
                onToggle={handleHabitToggle}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <span className="text-6xl">🌱</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No habits found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || filterCategory !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Start by adding your first gardening habit!'
              }
            </p>
            {!searchTerm && filterCategory === 'all' && (
              <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Plus className="w-5 h-5 mr-2" />
                Add Your First Habit
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Habits;