import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '../hooks/useChat.js';

interface ChatWidgetProps {
  apiEndpoint: string;
  collectionName: string;
  widgetTitle?: string;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  apiEndpoint,
  collectionName,
  widgetTitle = "chatSwitch",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    apiEndpoint,
    collectionName,
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const toggleOpen = () => setIsOpen(!isOpen);

  if (!isOpen) {
    return (
      <button className="cstack-chat-widget-opener" onClick={toggleOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </button>
    );
  }

  return (
    <div className="cstack-chat-widget">
      <div className="cstack-chat-widget-header">
        <h3>{widgetTitle}</h3>
        <button onClick={toggleOpen} className="cstack-chat-widget-closer">&times;</button>
      </div>
      <div className="cstack-chat-widget-messages">
        {messages.map((m, index) => (
          <div key={index} className={`cstack-chat-message cstack-chat-message--${m.role}`}>
            <p>{m.content}</p>
          </div>
        ))}
        {isLoading && (
           <div className="cstack-chat-message cstack-chat-message--assistant">
             <div className="cstack-chat-loading-dots">
                <span></span>
                <span></span>
                <span></span>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="cstack-chat-widget-form">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask a question..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
      </form>
    </div>
  );
};
