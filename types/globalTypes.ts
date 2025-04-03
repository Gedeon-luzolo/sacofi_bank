export interface IPayment {
  id: number;
  clientName: string;
  paymentReason: string;
  amount: number;
  currency: string;
  paymentMode: string;
  site: string;
  terrainNumber: string;
  clientNumber: string;
  email: string;
}

export interface IClient {
  id: number;
  name: string;
  phone: string;
  terrainDimension: string;
  email: string;
  photo: string;
  site: string;
}

export interface IAgent {
  id: number;
  name: string;
  email: string;
  role: string;
  phone: string;
  titre: string;
  password?: string;
}
