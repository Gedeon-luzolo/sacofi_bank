import { api } from "./ServiceHost";

export const AgentApi = {
  // Récupérer tous les agents
  getAgents: async () => {
    const response = await api.get("/agent");
    return response.data;
  },
  // Récupérer un agent par ID
  getAgentById: async (id: number) => {
    const response = await api.get(`/agent/${id}`);
    return response.data;
  },

  // Mettre à jour un agent
  updateAgent: async (id: number, agentData: FormData) => {
    const response = await api.put(`/agent/${id}`, agentData);
    return response.data;
  },

  // Supprimer un agent
  deleteAgent: async (id: number) => {
    await api.delete(`/agent/${id}`);
    return id;
  },
};
