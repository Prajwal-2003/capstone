import React, { useEffect } from 'react';
import { ChatContainer } from './components/ChatContainer';
import { ChatHeader } from './components/ChatHeader';
import { ChatInput } from './components/ChatInput';
import { useChat } from './hooks/useChat';

function App() {
  const { messages, isTyping, sendMessage } = useChat();

  useEffect(() => {
    // Send welcome message when the chat starts
    if (messages.length === 0) {
      sendMessage('hello');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg flex flex-col h-[600px]">
        <ChatHeader />
        <ChatContainer messages={messages} />
        <div className="border-t border-gray-200 p-4">
          <ChatInput onSend={sendMessage} disabled={isTyping} />
          {isTyping && (
            <p className="text-sm text-gray-500 mt-2">Assistant is typing...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;