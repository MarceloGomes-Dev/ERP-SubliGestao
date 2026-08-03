import { create } from 'zustand';
import { User, Role } from '@/types/auth';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, role: Role) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (username, role) => {
    // Para simplificar, estamos apenas criando o usuário com as permissões solicitadas
    set({
      user: {
        id: '1',
        name: username,
        username,
        role,
        sector: role === 'RH' ? 'Administrativo' : role === 'Developer' ? 'Diretoria' : 'Diretoria' // simplificado
      },
      isAuthenticated: true,
    });
  },
  logout: () => set({ user: null, isAuthenticated: false }),
}));
