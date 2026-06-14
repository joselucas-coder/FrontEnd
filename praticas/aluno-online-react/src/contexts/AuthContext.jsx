import { createContext, useState, useContext } from 'react';
import { loginService } from '../services/authService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(() => {
    const token = localStorage.getItem('@AlunoOnline:token');
    return !!token;
  });

  const [usuario, setUsuario] = useState(() => {
    const user = localStorage.getItem('@AlunoOnline:usuario');
    return user ? JSON.parse(user) : null; 
  });

  const login = async (dadosUsuario) => {
    const resposta = await loginService(dadosUsuario.email, dadosUsuario.senha);
    
    localStorage.setItem('@AlunoOnline:token', resposta.token);
    localStorage.setItem('@AlunoOnline:usuario', JSON.stringify(resposta.usuario));

    setUsuario(resposta.usuario);
    setAutenticado(true);
  };

  const logout = () => {
    localStorage.removeItem('@AlunoOnline:token');
    localStorage.removeItem('@AlunoOnline:usuario');
    setUsuario(null);
    setAutenticado(false);
  };

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}