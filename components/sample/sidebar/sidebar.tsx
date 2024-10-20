
"use client";
import React from 'react';
import MenuItemComponent from './menu-item-component';

interface MenuItem {
  title: string;
  path?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { title: 'Home', path: '/' },
  { title: 'TicTacToe', path: '/tic-tac-toe' },
  {
    title: 'Samples',
    children: [
      { title: 'Web Development', path: '/sample/side-effect' },
      { title: 'App Development', path: '/sample/multi-step-form' },
    ],
  },
  { title: 'page1', path: '/sample/sidebar/page1' },
  { title: 'page2', path: '/sample/sidebar/page2' },
  { title: 'AtomCounter', path: '/sample/sidebar/atom-counter' },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-4 text-lg font-bold">Sidebar</div>
      <ul>
        {menuItems.map((item, index) => (
          <MenuItemComponent key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}