"use client";

import { useAuth } from '@/store/useAuth';
import { Bell, LogOut, Search, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Topbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="h-16 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-6 z-30 sticky top-0">
      <div className="flex items-center text-gray-500 w-full max-w-md">
         <Search size={18} className="text-gray-400 mr-2" />
         <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full bg-transparent border-none focus:ring-0 outline-none text-sm text-gray-700"
         />
      </div>

      <div className="flex items-center space-x-6">
        <button className="relative text-gray-500 hover:text-[#2563EB] transition-colors focus:outline-none">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-bold">
            3
          </span>
        </button>

        <div className="h-8 w-px bg-gray-200"></div>

        <div className="flex items-center gap-3">
            <div className="flex flex-col items-end hidden md:flex">
                <span className="text-sm font-semibold text-gray-700">{user?.name}</span>
                <span className="text-xs text-gray-500">{user?.role}</span>
            </div>
            <button
                onClick={handleLogout}
                className="text-gray-500 hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium focus:outline-none ml-2"
                title="Sair"
            >
                <LogOut size={20} />
            </button>
        </div>
      </div>
    </header>
  );
}
