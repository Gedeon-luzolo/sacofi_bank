import axios, { AxiosInstance } from "axios";
import { io } from "socket.io-client";

const url = "http://localhost:3000";

export const api: AxiosInstance = axios.create({
  baseURL: `${url}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const socket = io(url);
