"use client"
import React from 'react'
import { number } from 'zod';

export default function page() {
  const numbers = [1, 2, 3, 4, 5];
  const indexedNumbers = numbers.map((num, index) => `Index ${index}: ${num}`);
  console.log(indexedNumbers);

  for (const number of numbers) {
    console.log(`Index ${number}`);
  }
  numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
  })
  return (
    <div>hi</div>
  )
}
