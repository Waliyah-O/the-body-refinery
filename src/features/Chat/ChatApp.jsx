import React, { useEffect, useState } from 'react';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch initial messages from the server
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    // Replace 'your-endpoint-url' with the actual endpoint URL
    fetch('http://vitalitychat.us-east-1.elasticbeanstalk.com')
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching messages:', error));
  };

  const sendMessage = () => {
    // Create a new message object
    const message = {
      content: newMessage,
      timestamp: Date.now()
    };

    // Replace 'your-endpoint-url' with the actual endpoint URL
    fetch('your-endpoint-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
      .then(response => response.json())
      .then(data => {
        // Add the new message to the messages state
        setMessages([...messages, data]);
        // Clear the input field
        setNewMessage('');
      })
      .catch(error => console.error('Error sending message:', error));
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        {messages.map(message => (
          <div key={message.timestamp}>
            <strong>{message.sender}: </strong>
            {message.content}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatApp;
