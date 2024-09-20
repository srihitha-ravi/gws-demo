import Header from '../ui/dashboard/header';
import SideNav from '../ui/dashboard/sidenav';

export const experimental_ppr = true;

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <div className="flex flex-grow">
        {/* Side Navigation */}
        <div className="hidden md:flex w-64 bg-black">
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
