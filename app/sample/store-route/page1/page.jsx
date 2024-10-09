"use client";
import React from 'react'
import useSampleStore from '@/service/sample/sample-store'
import Link from 'next/link';

export default function page() {
  const {count, setCount}= useSampleStore();

  return (
    <>
    <div>sample page1 store {count}</div>
    <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => setCount(count + 1)}>
        count up
      </button>
      <br />
    <Link href="/sample/store-route/page2"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        go /sample/store-route/page2
      </Link>
    </>
  )
}
