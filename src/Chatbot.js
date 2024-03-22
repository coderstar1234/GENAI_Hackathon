import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return; // Don't send empty messages
    setMessages([...messages, { text: inputText, sender: 'user' }]);
    setInputText('');
    // Send message to server-side for processing (you'll implement this part)
    // Example: fetch('/api/chatbot', { method: 'POST', body: JSON.stringify({ text: inputText }) });
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Example: Function to handle receiving message from server-side
  const receiveMessage = (text) => {
    setMessages([...messages, { text, sender: 'bot' }]);
  };

  return (
    <div className="chatbot">
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
