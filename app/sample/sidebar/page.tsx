
import React from 'react';

export default function AboutPage() {
  return <div>
    <p>node env {process.env.NODE_ENV}</p>
    <p>env NEXT_PUBLIC_IS_DUMMY {process.env.NEXT_PUBLIC_IS_DUMMY}</p>
  </div>;
}