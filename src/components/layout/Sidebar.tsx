"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/store/useAuth';
import { MENUS_BY_ROLE } from '@/config/menus';
import * as Icons from 'lucide-react';
import clsx from 'clsx';
import Image from 'next/image';

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: (v: boolean) => void;
}

export function Sidebar({ isExpanded, setIsExpanded }: SidebarProps) {
  const { user } = useAuth();
  const pathname = usePathname();
  const [isLocked, setIsLocked] = useState(false);

  if (!user) return null;

  const menus = MENUS_BY_ROLE[user.role] || [];

  const handleMouseEnter = () => {
    if (!isLocked) setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    if (!isLocked) setIsExpanded(false);
  };

  return (
    <motion.aside
      className={clsx(
        "fixed top-0 left-0 h-screen bg-[#2563EB] text-white z-40 transition-all duration-300 flex flex-col shadow-2xl",
        isExpanded ? "w-64" : "w-20"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-white/20">
        <div className="flex items-center overflow-hidden whitespace-nowrap">
          {isExpanded ? (
            <Image
              src="https://github.com/MarceloGomes-Dev/ERP-SubliGestao/blob/main/logo%20ts.png?raw=true"
              alt="Logo"
              width={120}
              height={40}
              unoptimized
              className="object-contain"
            />
          ) : (
             <div className="w-8 h-8 rounded bg-white text-[#2563EB] font-bold flex items-center justify-center text-sm ml-2">ERP</div>
          )}
        </div>
        {isExpanded && (
          <button
            onClick={() => setIsLocked(!isLocked)}
            className="text-white hover:text-gray-200 transition-colors focus:outline-none"
            title={isLocked ? "Desbloquear Menu" : "Fixar Menu"}
          >
            {isLocked ? <Icons.Lock size={18} /> : <Icons.Unlock size={18} />}
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-4 scrollbar-hide">
        <ul className="space-y-1">
          {menus.map((menu, idx) => {
            const IconName = (menu.icon as keyof typeof Icons) || 'Circle';
            const Icon = Icons[IconName] as React.ElementType || Icons.Circle;
            const isActive = pathname === menu.path;

            return (
              <li key={idx}>
                <Link
                  href={menu.path}
                  className={clsx(
                    "flex items-center px-6 py-3 transition-colors duration-200",
                    isActive ? "bg-white/20 font-bold border-l-4 border-white" : "hover:bg-white/10 border-l-4 border-transparent text-blue-100 hover:text-white"
                  )}
                >
                  <Icon size={22} className="min-w-[22px]" />
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="ml-4 whitespace-nowrap overflow-hidden text-sm"
                    >
                      {menu.title}
                    </motion.span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Profile summary at bottom */}
      <div className="border-t border-white/20 p-4 overflow-hidden whitespace-nowrap flex items-center">
         <div className="w-10 h-10 rounded-full bg-white text-[#2563EB] flex items-center justify-center font-bold text-lg flex-shrink-0">
           {user.name.charAt(1).toUpperCase()}
         </div>
         {isExpanded && (
           <div className="ml-3 flex flex-col">
             <span className="text-sm font-bold">{user.name}</span>
             <span className="text-xs text-blue-200">{user.role}</span>
           </div>
         )}
      </div>
    </motion.aside>
  );
}
