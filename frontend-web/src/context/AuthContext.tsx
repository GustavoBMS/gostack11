import React, { createContext, useCallback } from "react";

interface AuthContextData {
  name: string;
  signIn(): void;
}

//export const AuthContext = createContext<Partial<AuthContextData>>({});
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const signIn = useCallback(() => {
  console.log("signIn");
}, [])


export const AuthProvider: React.FC = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: "Gustavo", signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
