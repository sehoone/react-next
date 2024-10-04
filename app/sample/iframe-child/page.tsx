"use client";
import React, { useEffect, useState } from 'react';

const IframeChild = () => {
  const [message, setMessage] = React.useState('');
  const [counter, serCounter] = useState<number>(0);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {

      if (event.source) {
        console.log('Message from parent:', event.data);
        setMessage(event.data);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const sendMessageToParent = () => {
    serCounter(counter + 1);
    window.parent.postMessage(`Hello from iframe ${counter}`, '*'); // Use '*' to allow any origin
  };

  return (
    <div className="p-4">
      <h1>Iframe Child Page</h1>
      <button onClick={sendMessageToParent} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Send Message to Parent</button>
      <p>Message from parent: {message}</p>
    </div>
  );
}

export default IframeChild;