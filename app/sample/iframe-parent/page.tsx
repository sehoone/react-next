"use client";
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';

const iframeParent = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [counter, serCounter] = useState<number>(0);
  const [message, setMessage] = React.useState('');

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {

      if (event.origin !== 'http://localhost:3001') {
        return;
      }

      if (event.source) {
        setMessage(event.data);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const sendMessageToIframe = () => {
    console.log('sendMessageToIframe call');
    serCounter(counter + 1);
    iframeRef.current?.contentWindow?.postMessage(`Hello from parent ${counter}`, 'http://localhost:3001'); // Replace with your iframe's origin
  };

  return (
    <div>
      <h1>Iframe Parent Component</h1>
      <button onClick={sendMessageToIframe} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Send Message to Iframe
      </button>
      <p>Message from iframe: {message}</p>
      <div className="border-2 border-black p-2 inline-block">
        <iframe
          ref={iframeRef}
          src="http://localhost:3001/sample/iframe-child" // Replace with your iframe's URL
          width="600"
          height="400"
          title="Iframe Example"
          className="border-2 border-gray-300"
        ></iframe>
      </div>
    </div>
  );
}

export default iframeParent;