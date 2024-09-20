
'use client';
import Link from 'next/link';
import NavLinks from './nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-col bg-white-14 rounded-md items-left bg-contain pr-10">
        <NavLinks />
        
      </div>
    </div>
  );
}
