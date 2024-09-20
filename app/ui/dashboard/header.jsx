

import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline';
export default function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-transparent">
    {/* Menu Icon */}
    <div className="flex items-center">
      <Bars3Icon className="h-6 w-6 text-white" />
    </div>

    {/* Title and Logo */}
    <div className="flex items-center justify-center">
         {/* Placeholder for logo */}
      <div className="h-12 w-12 bg-gray-500"></div>
      <h1 className="text-white text-3xl font-bold ml-4">
        Placeholder Title
      </h1>
    </div>

    {/* User Profile Icon */}
    <div className="flex items-center">
      <UserCircleIcon className="h-8 w-8 text-white" />
    </div>
  </header>
  );
}
