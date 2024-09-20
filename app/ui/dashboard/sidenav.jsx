
'use client';
import Link from 'next/link';
import NavLinks from './nav-links';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNav = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      {/* Toggle Button */}
      <button onClick={toggleNav} className="p-2 text-white">
        {/* Icon for collapsing */}
        <Bars3Icon className="h-6 w-6" />
      </button>
      <div className={`flex grow flex-col bg-white-14 rounded-md bg-contain items-left transition-all duration-300 ${isCollapsed ? 'pr-0' : 'pr-10'}`}>
        <NavLinks isCollapsed={isCollapsed}/>
        
      </div>
    </div>
  );
}
