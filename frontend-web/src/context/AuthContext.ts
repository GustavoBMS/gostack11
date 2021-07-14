import { createContext } from "react";

interface AuthContextData {
  name: string;
}

const AuthContext = createContext<Partial<AuthContextData>>({});
//const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;