"use client";
import React from 'react';
import { useAtom } from 'jotai';
import { counterAtom } from '@/atoms/counterAtom';

export default function Counter() {
  const [count, setCount] = useAtom(counterAtom);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <button onClick={increment} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
        Increment
      </button>
      <button onClick={decrement} className="bg-red-500 text-white px-4 py-2 rounded">
        Decrement
      </button>
    </div>
  );
}