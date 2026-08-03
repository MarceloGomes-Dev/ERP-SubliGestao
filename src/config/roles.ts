import { Role, Sector } from '@/types/auth';

export const Hierarchy: Record<Role, Role[]> = {
  Developer: ['CEO', 'Gerente Geral', 'Administração', 'Supervisor', 'Monitor', 'Vendedor(a)', 'Designer', 'Impressão', 'Calandra', 'Costura', 'Estoque', 'Empacotamento', 'RH', 'Recepção'],
  CEO: ['Gerente Geral', 'Administração', 'Supervisor', 'Monitor', 'Vendedor(a)', 'Designer', 'Impressão', 'Calandra', 'Costura', 'Estoque', 'Empacotamento', 'RH', 'Recepção'],
  'Gerente Geral': ['Administração', 'Supervisor', 'Monitor', 'Vendedor(a)', 'Designer', 'Impressão', 'Calandra', 'Costura', 'Estoque', 'Empacotamento', 'RH', 'Recepção'],
  'Administração': [],
  'Supervisor': ['Monitor', 'Vendedor(a)'],
  'Monitor': [],
  'Vendedor(a)': [],
  'Designer': [],
  'Impressão': [],
  'Calandra': [],
  'Costura': [],
  'Estoque': [],
  'Empacotamento': [],
  'RH': ['Administração', 'Supervisor', 'Monitor', 'Vendedor(a)', 'Designer', 'Impressão', 'Calandra', 'Costura', 'Estoque', 'Empacotamento', 'Recepção'],
  'Recepção': [],
};

// Mapeamento de quais papéis podem criar/editar/cadastrar
export const Permissions = {
  canManageUsers: (userRole: Role, targetRole: Role) => {
    return Hierarchy[userRole]?.includes(targetRole) || false;
  }
};
