'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Define o tipo de contexto
interface UserContextType {
  selectedUser: User | null;
  setSelectedUser: (user: User) => void;
}

// Cria o contexto com valores iniciais
const UserContext = createContext<UserContextType | undefined>(undefined);

// Componente para fornecer o contexto de usuário selecionado
export function UserProvider({ children }: { children: ReactNode }) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook para consumir o contexto de usuário
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
}