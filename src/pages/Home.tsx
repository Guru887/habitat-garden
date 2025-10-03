import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Target, Calendar, TrendingUp, ArrowRight } from 'lucide-react';
import Carousel from '../components/Carousel';
import Accordion from '../components/Accordion';

const Home: React.FC = () => {
  const carouselSlides = [
    {
      id: 1,
      title: "Start Your Garden Journey Today",
      content: "Build lasting gardening habits with our comprehensive tracking system. From watering schedules to seasonal planning, we've got you covered.",
      image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 2,
      title: "Track Your Progress Daily",
      content: "Monitor your gardening habits, celebrate milestones, and watch your garden flourish with consistent care and attention.",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 3,
      title: "Connect with Nature",
      content: "Discover the joy of gardening through structured habits that help you build a deeper connection with nature and your plants.",
      image: "https://images.pexels.com/photos/1212693/pexels-photo-1212693.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  ];

  const faqItems = [
    {
      id: "1",
      question: "How do I start tracking my gardening habits?",
      answer: "Simply create an account, navigate to the Habits page, and begin adding your gardening routines. You can track watering schedules, fertilizing, pruning, and more. Set up daily, weekly, or monthly reminders to build consistent habits."
    },
    {
      id: "2",
      question: "What types of gardening habits can I track?",
      answer: "You can track any gardening-related activity including watering plants, checking soil moisture, fertilizing, pruning, pest inspection, seed planting, composting, and garden maintenance. The app is flexible to accommodate your unique gardening routine."
    },
    {
      id: "3",
      question: "How does the streak system work?",
      answer: "Every time you complete a habit, your streak increases by one day. Maintaining streaks helps build consistency and motivation. If you miss a day, your streak resets, encouraging you to maintain regular gardening practices."
    },
    {
      id: "4",
      question: "Can I customize my habit categories?",
      answer: "Yes! You can organize your habits into custom categories like 'Watering', 'Fertilizing', 'Pest Control', 'Harvesting', and more. This helps you stay organized and track different aspects of your gardening routine."
    },
    {
      id: "5",
      question: "Is there a mobile version available?",
      answer: "The web app is fully responsive and works great on mobile devices. You can access all features from your phone or tablet, making it easy to track habits while you're actually working in your garden."
    }
  ];

  const features = [
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Goal Setting",
      description: "Set specific gardening goals and track your progress with detailed analytics and insights."
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Habit Scheduling",
      description: "Create custom schedules for watering, fertilizing, and other garden maintenance tasks."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Progress Tracking",
      description: "Monitor your consistency and celebrate milestones as you build lasting gardening habits."
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: "Plant Care Tips",
      description: "Access expert advice and seasonal reminders to keep your garden healthy year-round."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Carousel */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Grow Your Garden
              <span className="text-green-600"> Habits</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your gardening routine with our habit tracking system. 
              Build consistency, track progress, and cultivate a thriving garden one habit at a time.
            </p>
          </div>

          <Carousel slides={carouselSlides} />

          <div className="text-center mt-12">
            <Link
              to="/habits"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Start Tracking Habits
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you build and maintain healthy gardening habits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-200">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about building gardening habits
            </p>
          </div>

          <Accordion items={faqItems} allowMultiple={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Garden?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Join thousands of gardeners who are building better habits and growing amazing gardens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors text-lg font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;