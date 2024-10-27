"use client";
import React from 'react'
import ReactQueryComponent from '@/components/sample/react-query-component'
import { useModal } from '@/components/axios/useModal';

export default function page() {
  useModal();
  return (
    <div className='div-contents'>
      <ReactQueryComponent />
    </div>
  )
}
