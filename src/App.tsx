import React, { useEffect, useRef, useState } from 'react';

// Define the type for your messages
type Message = string; // Replace 'any' with the actual type of your messages

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8000/');

    ws.current.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  return (
    <div>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};

export default App;