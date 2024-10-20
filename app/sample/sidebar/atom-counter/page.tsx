import React from 'react';
import AtomCounter from '@/components/sample/atom-counter';

export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <AtomCounter />
    </div>
  );
}