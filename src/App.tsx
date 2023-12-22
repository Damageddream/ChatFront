import React, { useEffect, useRef, useState } from 'react';

// Define the type for your messages
type Message = string; // Replace 'any' with the actual type of your messages

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const ws = useRef<WebSocket | null>(null);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8000/');

    ws.current.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const input = event.currentTarget.elements[0] as HTMLInputElement;

    if (input.value) {
      ws.current?.send(input.value);
      input.value = '';
    }
  }

  const typeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={typeHandler} value={input} type="text" />
        <button type="submit">Send</button>
      </form>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};

export default App;