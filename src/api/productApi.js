// src/api/productApi.js
import apiClient from "./config";
import { CLIENT_TYPE } from "../constants/clientType";

// ...other product API functions

// Fetch all pending products (admin only)
export const fetchPendingProducts = (params = {}) =>
    apiClient.get("/api/products/pending", {
        params,
        headers: {
            "x-client-type": CLIENT_TYPE // should be 'beacon-frontend'
        },
        withCredentials: true,
    });
