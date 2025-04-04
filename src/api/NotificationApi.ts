import { api } from "./ServiceHost";

export const NotificationApi = {
  // Récupérer toutes les notifications
  getNotifications: async () => {
    const response = await api.get("/notification");
    return response.data;
  },
};
