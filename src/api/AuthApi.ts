import { api } from "./AxiosService";

export const AuthApi = {
  // Inscription d'un nouvel utilisateur
  register: async (userData: FormData) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
  },

  // Connexion d'un utilisateur
  login: async (email: string, password: string) => {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  },
};
