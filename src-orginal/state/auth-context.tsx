import React, { createContext, useState, ReactNode } from "react";
import { LoggedInUserInfo } from "../types";

interface UserAuthContextProps {
  gambler: LoggedInUserInfo;
  setGambler: React.Dispatch<React.SetStateAction<LoggedInUserInfo>>;
}

interface LoginProviderProps {
  children: ReactNode;
}

const initialValue = { name: '', avatar: '', event: '', username: '' };

export const UserAuthContext = createContext<UserAuthContextProps>({
  gambler: initialValue,
  setGambler: () => { },
});

export const AuthProvider = ({ children }: LoginProviderProps) => {
  const [gambler, setGambler] = useState<LoggedInUserInfo>(initialValue);

  return (
    <UserAuthContext.Provider value={{ gambler, setGambler }}>
      {children}
    </UserAuthContext.Provider>
  );
};