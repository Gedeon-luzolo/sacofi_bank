import { api } from "./AxiosService";

export const ClientApi = {
  // Récupérer tous les paiements
  getClients: async () => {
    const response = await api.get("/client");
    return response.data;
  },

  // Créer un paiement
  postClient: async (paymentData: FormData) => {
    const response = await api.post("/client", paymentData);
    return response.data;
  },

  // Récupérer un paiement par ID
  getClientById: async (id: number) => {
    const response = await api.get(`/client/${id}`);
    return response.data;
  },

  // Mettre à jour un paiement
  updateClient: async (id: number, paymentData: FormData) => {
    const response = await api.put(`/client/${id}`, paymentData);
    return response.data;
  },

  // Supprimer un paiement
  deleteClient: async (id: number) => {
    await api.delete(`/client/${id}`);
    return id;
  },
};
