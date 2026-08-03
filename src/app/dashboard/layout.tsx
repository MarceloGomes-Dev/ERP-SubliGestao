"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/layout/Sidebar';
import { Topbar } from '@/components/layout/Topbar';
import { useAuth } from '@/store/useAuth';
import clsx from 'clsx';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <div className="flex min-h-screen bg-gray-50 overflow-hidden font-sans">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      <div
        className={clsx(
            "flex-1 flex flex-col transition-all duration-300 min-h-screen w-full",
            isExpanded ? "ml-64" : "ml-20"
        )}
      >
        <Topbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
