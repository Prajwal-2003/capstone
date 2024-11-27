import { useState, useCallback } from 'react';
import { Message, ChatState } from '../types/chat';
import { generateResponse, simulateTyping } from '../utils/chatbot';

export const useChat = () => {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isTyping: false,
  });

  const addMessage = useCallback((content: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date(),
    };

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));
  }, []);

  const sendMessage = useCallback((content: string) => {
    addMessage(content, 'user');
    
    setState((prev) => ({ ...prev, isTyping: true }));
    
    simulateTyping(() => {
      const response = generateResponse(content);
      addMessage(response, 'bot');
      setState((prev) => ({ ...prev, isTyping: false }));
    });
  }, [addMessage]);

  return {
    messages: state.messages,
    isTyping: state.isTyping,
    sendMessage,
  };
};