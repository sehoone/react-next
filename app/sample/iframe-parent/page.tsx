"use client";
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';

const iframeParent = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [counter, setCounter] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

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
    setCounter(counter + 1);
    iframeRef.current?.contentWindow?.postMessage(`Hello from parent ${counter}`, 'http://localhost:3001'); // Replace with your iframe's origin
  };

  return (
    <div className="p-4">
      <Head>
        <script src="/libs/hi2.js"></script>
      </Head>
      <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={sendMessageToIframe}>
        Send Message to Iframe
      </button>
      <p>Message from child: {message}</p>
      <iframe
        ref={iframeRef}
        src="http://localhost:3001/sample/iframe-child" // Replace with your iframe URL
        width="600"
        height="400"
        title="iframe-test"
        className="border-4 border-gray-300 shadow-lg"
      ></iframe>
    </div>
  );
}

export default iframeParent;