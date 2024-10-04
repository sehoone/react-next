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
}

export default iframeParent;