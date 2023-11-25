import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Messages() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch messages on component mount
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:3001/v3/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendReply = async (event) => {
    event.preventDefault();

    if (username && message) {
      try {
        await axios.post('http://localhost:3001/v3/reply', { username, message });
        // Clear input fields
        setUsername('');
        setMessage('');
        // Fetch messages again to update the list
        fetchMessages();
      } catch (error) {
        console.error('Error sending reply:', error);
      }
    }
  };

  return (
    <div>
      <div>
        <h2>Messages</h2>
        <ul>
          {messages.map((msg) => (
            <li key={msg._id}>
              <strong>{msg.username}:</strong> {msg.message}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Send Reply</h2>
        <form onSubmit={sendReply}>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </label>
          <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </label>
          <button type="submit">Send Reply</button>
        </form>
      </div>
    </div>
  );
}

export default Messages;
