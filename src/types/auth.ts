export type Role =
  | 'Developer'
  | 'CEO'
  | 'Gerente Geral'
  | 'Administração'
  | 'Supervisor'
  | 'Monitor'
  | 'Vendedor(a)'
  | 'Designer'
  | 'Impressão'
  | 'Calandra'
  | 'Costura'
  | 'Estoque'
  | 'Empacotamento'
  | 'RH'
  | 'Recepção';

export type Sector =
  | 'Administrativo' // Administração, RH, Estoque
  | 'Comercial'      // Supervisor, Vendedor(a), Monitor
  | 'Atendimento'    // Recepção, Empacotamento
  | 'Produção'       // Costura
  | 'Impressão'      // Impressão
  | 'Calandra'       // Calandra
  | 'Expedição'
  | 'Diretoria';     // CEO, Gerente Geral

export interface User {
  id: string;
  name: string;
  username: string; // login
  role: Role;
  sector: Sector;
  avatarUrl?: string;
}

export interface MenuItem {
  id: string;
  title: string;
  path: string;
  icon?: string; // We can use Lucide icons name or component reference later
}
