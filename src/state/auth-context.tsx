import React, { createContext, useState, ReactNode } from 'react';
import { LogedInUserInfo } from '../types/intex';

interface AuthContextProps {
  player: LogedInUserInfo;
  setPlayer: React.Dispatch<React.SetStateAction<LogedInUserInfo>>;
}

interface LoginProviderProps {
  children: ReactNode;
}

const initialValue = { name: '', avatar: '', event: '', username: '' };

export const AuthContext = createContext<AuthContextProps>({
  player: initialValue,
  setPlayer: () => {},
});

export const AuthProvider = ({ children }: LoginProviderProps) => {
  const [player, setPlayer] = useState<LogedInUserInfo>(initialValue);

  return (
    <AuthContext.Provider value={{ player, setPlayer }}>
      {children}
    </AuthContext.Provider>
  );
};
