import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [username, setUsername] = useState(null);

  async function login(credentials) {
    const res = await axios.get("http://localhost:3000/usuarios");
    const users = res.data;
    const user = users.find((u) => {
      return u.email === credentials.email;
    });
    console.log("users: ", users);
    if (user?.senha === credentials.senha) {
      setUsername(user.nome);
      return true;
    }
    return false;
  }

  return (
    <AuthContext.Provider value={{ username, login }}>
      {children}
    </AuthContext.Provider>
  );
}
