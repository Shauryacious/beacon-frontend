// src/api/productApi.js
import apiClient from "./config";
import { CLIENT_TYPE } from "../constants/clientType";

// Fetch all pending products (admin only)
export const fetchPendingProducts = (params = {}) =>
    apiClient.get("/api/products/pending", {
        params,
        headers: {
            "x-client-type": CLIENT_TYPE
        },
        withCredentials: true,
    });

// Approve a product (admin only)
export const approveProduct = (productId) =>
    apiClient.patch(
        `/api/products/${productId}/approve`,
        {},
        {
            headers: { "x-client-type": CLIENT_TYPE }, // should be 'beacon-frontend'
            withCredentials: true,
        }
    );

// Takedown a product (admin only)
export const takedownProduct = (productId, reason) =>
    apiClient.patch(
        `/api/products/${productId}/takedown`,
        { reason },
        {
            headers: { "x-client-type": CLIENT_TYPE }, // should be 'beacon-frontend'
            withCredentials: true,
        }
    );

