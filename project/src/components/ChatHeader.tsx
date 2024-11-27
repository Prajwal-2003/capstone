import React from 'react';
import { Bot } from 'lucide-react';

export const ChatHeader: React.FC = () => {
  return (
    <div className="border-b border-gray-200 bg-white p-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
        <Bot className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h1 className="text-lg font-semibold text-gray-800">Support Assistant</h1>
        <p className="text-sm text-gray-500">Always here to help</p>
      </div>
    </div>
  );
};