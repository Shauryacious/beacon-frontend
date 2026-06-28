// src/api/dashboardApi.js — live BEACON analytics (ML-backed)
import apiClient from "./config";
import { CLIENT_TYPE } from "../constants/clientType";

const cfg = { headers: { "x-client-type": CLIENT_TYPE }, withCredentials: true };

export const fetchTrustScore = () => apiClient.get("/api/dashboard/trust-score", cfg);
export const fetchRiskRanking = () => apiClient.get("/api/dashboard/risk-ranking", cfg);
export const fetchAlerts = () => apiClient.get("/api/dashboard/alerts", cfg);
export const fetchTrends = () => apiClient.get("/api/dashboard/trends", cfg);
export const fetchFraudNetwork = () => apiClient.get("/api/dashboard/fraud-network", cfg);
