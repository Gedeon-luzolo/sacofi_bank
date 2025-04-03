import { api } from "./AxiosService";

export const PaymentApi = {
  // Récupérer tous les paiements
  getPayments: async () => {
    const response = await api.get("/payments");
    return response.data;
  },

  // Créer un paiement
  addPayment: async (paymentData: FormData) => {
    const response = await api.post("/payment", paymentData);
    return response.data;
  },

  // // Récupérer un paiement par ID
  // getPaymentById: async (id: number) => {
  //   const response = await api.get(`/payment/${id}`);
  //   return response.data;
  // },

  // // Mettre à jour un paiement
  // updatePayment: async (id: number, paymentData: FormData) => {
  //   const response = await api.put(`/payment/${id}`, paymentData);
  //   return response.data;
  // },

  // // Supprimer un paiement
  // deletePayment: async (id: number) => {
  //   await api.delete(`/payments/${id}`);
  //   return id;
  // },

};
