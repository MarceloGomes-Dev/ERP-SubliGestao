"use client";

import { useAuth } from '@/store/useAuth';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
           <h1 className="text-2xl font-bold text-gray-800">Dashboard de Visão Geral</h1>
           <p className="text-gray-500 mt-1">Bem-vindo(a) ao ERP SubliGestão, {user?.name}.</p>
        </div>
        <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm">
           Cargo: {user?.role}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {/* Cards de exemplo */}
         {[
            { title: 'Usuários Ativos', value: '124', color: 'text-blue-600', bg: 'bg-blue-100' },
            { title: 'OS Pendentes', value: '38', color: 'text-amber-600', bg: 'bg-amber-100' },
            { title: 'Vendas Hoje', value: 'R$ 4.250', color: 'text-green-600', bg: 'bg-green-100' },
            { title: 'Produção', value: '89%', color: 'text-purple-600', bg: 'bg-purple-100' },
         ].map((stat, i) => (
             <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                 <div className={`w-12 h-12 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center font-bold text-xl`}>
                     {stat.title.charAt(0)}
                 </div>
                 <div>
                    <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                    <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                 </div>
             </div>
         ))}
      </div>
    </div>
  );
}
