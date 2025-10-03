import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return allowMultiple ? [...prev, id] : [id];
      }
    });
  };

  const isOpen = (id: string) => openItems.includes(id);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
          >
            <span className="font-semibold text-gray-800 text-lg">
              {item.question}
            </span>
            {isOpen(item.id) ? (
              <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
            )}
          </button>
          
          <div
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen(item.id) ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <div className="text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;