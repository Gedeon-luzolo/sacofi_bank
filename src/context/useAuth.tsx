import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthApi } from "../api/AuthApi";
import { toast } from "sonner";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  titre: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: FormData) => Promise<void>;
  logout: () => void;
  checkTokenExpiration: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 heures en millisecondes

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkTokenExpiration = () => {
    const tokenTimestamp = localStorage.getItem("tokenTimestamp");
    if (!tokenTimestamp) return false;

    const timestamp = parseInt(tokenTimestamp, 10);
    const now = Date.now();

    if (now - timestamp > TOKEN_EXPIRATION_TIME) {
      // Token expiré, déconnecter l'utilisateur
      logout();
      return false;
    }
    return true;
  };

  useEffect(() => {
    const initializeAuth = () => {
      try {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (token && storedUser && checkTokenExpiration()) {
          setUser(JSON.parse(storedUser));
        } else if (token) {
          // Si le token est expiré, nettoyer le localStorage
          logout();
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("tokenTimestamp");
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const data = await AuthApi.login(email, password);
      setUser(data.user);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("tokenTimestamp", Date.now().toString());
      toast.success("Connecté avec succès");
      return true;
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Erreur lors de la connexion");
      return false;
    }
  };

  const register = async (userData: FormData) => {
    try {
      await AuthApi.register(userData);
      toast.success("Utilisateur créé avec succès");
    } catch (error) {
      console.error("Register error:", error);
      toast.error("Erreur lors de la création du user");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("tokenTimestamp");
    toast.success("Déconnecté avec succès");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        checkTokenExpiration,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
