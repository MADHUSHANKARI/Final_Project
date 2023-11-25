// Chat.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (user && text) {
      // Send message to server
      socket.emit('message', { user, text });
      setText('');
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
      </div>
      <div>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              <strong>{message.user}:</strong> {message.text}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="Type your message"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
