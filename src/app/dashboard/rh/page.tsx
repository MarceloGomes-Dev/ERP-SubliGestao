"use client";

import { useAuth } from '@/store/useAuth';
import { Users, FileText, Calendar, TrendingUp, Search, Plus, Filter } from 'lucide-react';

export default function RHDashboard() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-6">
      {/* Cabeçalho "Antigo" mas com cores atuais */}
      <div className="bg-white p-4 rounded shadow-sm border-l-4 border-[#2563EB] flex items-center justify-between">
        <div>
           <h1 className="text-xl font-bold text-gray-800 uppercase tracking-wide">Módulo de Recursos Humanos</h1>
           <p className="text-gray-500 text-sm mt-1">Gestão Integrada de Colaboradores - ERP SubliGestão</p>
        </div>
        <div className="hidden md:flex gap-2">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded text-sm flex items-center gap-2 border border-gray-300">
               <FileText size={16} /> Relatórios
            </button>
            <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm flex items-center gap-2 shadow">
               <Plus size={16} /> Novo Registro
            </button>
        </div>
      </div>

      {/* Grid de Métricas Densas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {[
            { title: 'Total de Funcionários', value: '42', icon: Users },
            { title: 'Férias Programadas', value: '05', icon: Calendar },
            { title: 'Admissões (Mês)', value: '03', icon: TrendingUp },
            { title: 'Avaliações Pendentes', value: '12', icon: FileText },
         ].map((stat, i) => {
             const Icon = stat.icon;
             return (
                 <div key={i} className="bg-white p-4 rounded shadow-sm border border-gray-200 flex items-center justify-between">
                     <div>
                        <p className="text-xs text-gray-500 font-bold uppercase">{stat.title}</p>
                        <h3 className="text-2xl font-black text-[#2563EB] mt-1">{stat.value}</h3>
                     </div>
                     <div className="text-gray-300">
                        <Icon size={32} />
                     </div>
                 </div>
             )
         })}
      </div>

      {/* Tabela de Funcionários (estilo sistema denso) */}
      <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 p-3 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-sm font-bold text-gray-700 uppercase">Listagem de Colaboradores Ativos</h2>
              <div className="flex gap-2">
                  <div className="relative">
                      <input type="text" placeholder="Buscar por nome ou CPF..." className="border border-gray-300 rounded px-2 py-1 text-sm w-64 focus:outline-none focus:border-[#2563EB]" />
                      <Search size={14} className="absolute right-2 top-2 text-gray-400" />
                  </div>
                  <button className="bg-white border border-gray-300 text-gray-600 px-2 py-1 rounded hover:bg-gray-50">
                      <Filter size={16} />
                  </button>
              </div>
          </div>
          <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                  <thead className="bg-gray-100 text-gray-600 font-semibold text-xs uppercase">
                      <tr>
                          <th className="px-4 py-2 border-b">Matrícula</th>
                          <th className="px-4 py-2 border-b">Nome</th>
                          <th className="px-4 py-2 border-b">Cargo</th>
                          <th className="px-4 py-2 border-b">Setor</th>
                          <th className="px-4 py-2 border-b">Data Admissão</th>
                          <th className="px-4 py-2 border-b">Status</th>
                          <th className="px-4 py-2 border-b text-center">Ações</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                      {[
                          { id: '1001', name: 'Ana Silva', role: 'Costura', sector: 'Produção', date: '12/01/2023', status: 'Ativo' },
                          { id: '1002', name: 'Carlos Santos', role: 'Impressão', sector: 'Impressão', date: '05/03/2022', status: 'Ativo' },
                          { id: '1003', name: 'Mariana Costa', role: 'Vendedor(a)', sector: 'Comercial', date: '20/07/2023', status: 'Férias' },
                          { id: '1004', name: 'Roberto Almeida', role: 'Estoque', sector: 'Administrativo', date: '10/11/2021', status: 'Ativo' },
                      ].map((row, i) => (
                          <tr key={i} className="hover:bg-blue-50 transition-colors">
                              <td className="px-4 py-2 font-mono text-gray-500">{row.id}</td>
                              <td className="px-4 py-2 font-medium text-gray-800">{row.name}</td>
                              <td className="px-4 py-2 text-gray-600">{row.role}</td>
                              <td className="px-4 py-2 text-gray-600">{row.sector}</td>
                              <td className="px-4 py-2 text-gray-500">{row.date}</td>
                              <td className="px-4 py-2">
                                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${row.status === 'Ativo' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                                      {row.status}
                                  </span>
                              </td>
                              <td className="px-4 py-2 text-center">
                                  <button className="text-[#2563EB] hover:underline text-xs font-semibold mr-2">Editar</button>
                                  <button className="text-gray-500 hover:underline text-xs font-semibold">Ficha</button>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
          <div className="bg-gray-50 p-2 border-t border-gray-200 text-xs text-gray-500 flex justify-between items-center">
              <span>Mostrando 1 a 4 de 42 registros</span>
              <div className="flex gap-1">
                  <button className="px-2 py-1 border border-gray-300 rounded bg-white text-gray-400 cursor-not-allowed">Anterior</button>
                  <button className="px-2 py-1 border border-gray-300 rounded bg-[#2563EB] text-white">1</button>
                  <button className="px-2 py-1 border border-gray-300 rounded bg-white hover:bg-gray-100">2</button>
                  <button className="px-2 py-1 border border-gray-300 rounded bg-white hover:bg-gray-100">Próximo</button>
              </div>
          </div>
      </div>
    </div>
  );
}
