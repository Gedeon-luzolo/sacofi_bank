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

  // Compter les paiements par paymentReason
  countPaymentByReason: async () => {
    try {
      const response = await api.get(`/payment/cont/reson`);
      return response;
    } catch (error) {
      console.log("Erreur lors du comptage", error);
    }
  },

  paymentConstruction: async () => {
    try {
      const response = await api.get(`/payment/cont/construction`);
      return response;
    } catch (error) {
      console.log("Erreur lors du comptage", error);
    }
  },

  getTotal: async () => {
    try {
      const response = await api.get(`/payment/total`);
      return response.data;
    } catch (error) {
      console.log("Erreur lors du comptage", error);
    }
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
