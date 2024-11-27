const RESPONSES = {
  greeting: [
    "Hello! How can I help you today?",
    "Hi there! What can I assist you with?",
    "Welcome! What brings you here today?"
  ],
  farewell: [
    "Thank you for chatting! Have a great day!",
    "Goodbye! Feel free to return if you need more help.",
    "Take care! Don't hesitate to reach out again."
  ],
  fallback: [
    "I apologize, but I'm not sure I understand. Could you rephrase that?",
    "I'm still learning! Could you try asking that in a different way?",
    "I'm not quite sure about that. Could you provide more details?"
  ]
};

export const generateResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return RESPONSES.greeting[Math.floor(Math.random() * RESPONSES.greeting.length)];
  }
  
  if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
    return RESPONSES.farewell[Math.floor(Math.random() * RESPONSES.farewell.length)];
  }
  
  return RESPONSES.fallback[Math.floor(Math.random() * RESPONSES.fallback.length)];
};

export const simulateTyping = (callback: () => void) => {
  const typingDelay = Math.random() * 1000 + 500; // Random delay between 500-1500ms
  setTimeout(callback, typingDelay);
};