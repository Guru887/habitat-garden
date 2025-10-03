import React from 'react';
import { Check, Clock, Calendar } from 'lucide-react';

export interface Habit {
  id: string;
  title: string;
  description: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  category: string;
  streak: number;
  completed: boolean;
  lastCompleted?: string;
  icon: string;
}

interface HabitCardProps {
  habit: Habit;
  onToggle: (id: string) => void;
}

const HabitCard: React.FC<HabitCardProps> = ({ habit, onToggle }) => {
  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case 'daily':
        return 'bg-green-100 text-green-800';
      case 'weekly':
        return 'bg-blue-100 text-blue-800';
      case 'monthly':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStreakColor = (streak: number) => {
    if (streak >= 30) return 'text-purple-600';
    if (streak >= 14) return 'text-green-600';
    if (streak >= 7) return 'text-blue-600';
    return 'text-gray-600';
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 transition-all duration-200 hover:shadow-lg ${
      habit.completed ? 'ring-2 ring-green-500' : ''
    }`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{habit.icon}</span>
          <div>
            <h3 className="font-semibold text-gray-800">{habit.title}</h3>
            <p className="text-sm text-gray-600">{habit.category}</p>
          </div>
        </div>
        <button
          onClick={() => onToggle(habit.id)}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            habit.completed
              ? 'bg-green-500 text-white'
              : 'border-2 border-gray-300 hover:border-green-500'
          }`}
        >
          {habit.completed && <Check className="w-5 h-5" />}
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {habit.description}
      </p>

      {/* Stats */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getFrequencyColor(habit.frequency)}`}>
              {habit.frequency}
            </span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className={`font-bold ${getStreakColor(habit.streak)}`}>
              {habit.streak} day streak
            </span>
          </div>
        </div>

        {habit.lastCompleted && (
          <span className="text-xs text-gray-500">
            Last: {new Date(habit.lastCompleted).toLocaleDateString()}
          </span>
        )}
      </div>
    </div>
  );
};

export default HabitCard;