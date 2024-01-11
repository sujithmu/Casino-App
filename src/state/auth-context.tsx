import React, { createContext, useState, ReactNode } from 'react';
import { LoggedInUserInfo } from '../types/intex';

interface AuthContextProps {
  player: LoggedInUserInfo;
  setPlayer: React.Dispatch<React.SetStateAction<LoggedInUserInfo>>;
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
  const [player, setPlayer] = useState<LoggedInUserInfo>(initialValue);

  return (
    <AuthContext.Provider value={{ player, setPlayer }}>
      {children}
    </AuthContext.Provider>
  );
};
