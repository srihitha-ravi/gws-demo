'use client';

import { useState } from 'react';
import Header from '../ui/dashboard/header';
import SideNav from '../ui/dashboard/sidenav';

export const experimental_ppr = true;

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle function
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Header */}
      <Header onToggle={toggleSidebar} />

      {/* Main Content Area */}
      <div className="flex flex-grow">
        {/* Side Navigation */}
        <div className={`w-64 bg-black ${isSidebarOpen ? 'block' : 'hidden'} md:flex`}>
          <SideNav />
        </div>

        {/* Content Area */}
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
