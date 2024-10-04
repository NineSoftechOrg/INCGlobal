import React, { useState } from 'react';
import './ChatBot.css'; // You can style the chatbot

const ChatBot = () => {
  // Chat state to keep track of the conversation
  const [conversation, setConversation] = useState([
    { type: 'bot', message: 'Hi there! How can I assist you today?' }
  ]);
  const [userInput, setUserInput] = useState(''); // Track user input
  const [isChatOpen, setIsChatOpen] = useState(false); // Toggle for chat visibility

  // Handle user input submission
  const handleSendMessage = () => {
    if (userInput.trim()) {
      const newConversation = [...conversation, { type: 'user', message: userInput }];
      setConversation(newConversation);
      setUserInput('');

      // Simulate chatbot response after user message
      setTimeout(() => {
        handleBotResponse(newConversation);
      }, 500); // Delay to make it more conversational
    }
  };

  // Bot response logic
  const handleBotResponse = (currentConversation) => {
    const lastMessage = currentConversation[currentConversation.length - 1].message.toLowerCase();

    let botMessage = "I'm sorry, could you please clarify?";

    // Simple bot response based on keywords
    if (lastMessage.includes('hello') || lastMessage.includes('hi')) {
      botMessage = 'Hello! What can I help you with today?';
    } else if (lastMessage.includes('services')) {
      botMessage = 'We offer various services in AI and automation. Can you specify what you’re looking for?';
    } else if (lastMessage.includes('pricing') || lastMessage.includes('cost')) {
      botMessage = 'Our pricing depends on the specific solution you need. Would you like to talk to a sales representative?';
    } else if (lastMessage.includes('bye') || lastMessage.includes('goodbye')) {
      botMessage = 'Goodbye! Feel free to reach out if you need any further assistance.';
    }

    // Update the conversation with the bot's response
    setConversation([...currentConversation, { type: 'bot', message: botMessage }]);
  };

  // Render chat messages
  const renderMessages = () => {
    return conversation.map((chat, index) => (
      <div
        key={index}
        className={`chat-message ${chat.type === 'bot' ? 'bot-message' : 'user-message'}`}
      >
        {chat.message}
      </div>
    ));
  };

  // Toggle chat window visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="chatbot-wrapper">
      <button className="chat-toggle-button" onClick={toggleChat}>
        Chat with us
      </button>

      {isChatOpen && (
        <div className="chatbot-container">
          <div className="chat-window">
            <div className="chat-messages">{renderMessages()}</div>
            <div className="chat-input">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
