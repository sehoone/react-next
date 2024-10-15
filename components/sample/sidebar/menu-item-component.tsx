"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';

interface MenuItem {
  title: string;
  path?: string;
  children?: MenuItem[];
}

export default function MenuItemComponent({ item }: { item: MenuItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  // const router = useRouter();
  // useEffect(() => {
  //   // 클라이언트 측에서 현재 경로를 얻음
  //   if (typeof window !== 'undefined') {
  //     const currentPath = window.location.pathname;
  //     if (item.path === currentPath) {
  //       setIsActive(true);
  //     } else {
  //       setIsActive(false);
  //     }
  //   }
  // }, [item.path]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <li className={`p-4 cursor-pointer ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-700'}`}>
      <div className="flex justify-between items-center">
        {item.path ? (
          <Link href={item.path} className="flex-1 block">
            <span className="block w-full h-full">{item.title}</span>
          </Link>
        ) : (
          <span className="flex-1">{item.title}</span>
        )}
        {item.children && (
          <span onClick={toggle} className="ml-2 cursor-pointer">
            {isOpen ? '-' : '+'}
          </span>
        )}
      </div>
      {isOpen && item.children && (
        <ul className="pl-4">
          {item.children.map((child, index) => (
            <MenuItemComponent key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}