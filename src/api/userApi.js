// src/api/userApi.js
import apiClient from "./config";

const CLIENT_TYPE = import.meta.env.VITE_CLIENT_TYPE || "beacon-frontend";

// Admin (beacon) signup
export const signup = (email, password) =>
    apiClient.post(
        "/api/users/signup",
        { email, password },
        {
            headers: { "x-client-type": CLIENT_TYPE }
        }
    );

// Admin (beacon) login
export const login = (email, password) =>
    apiClient.post(
        "/api/users/login",
        { email, password },
        {
            headers: { "x-client-type": CLIENT_TYPE }
        }
    );

// Admin (beacon) logout
export const logout = () =>
    apiClient.post(
        "/api/users/logout",
        {},
        {
            headers: { "x-client-type": CLIENT_TYPE }
        }
    );

// Fetch admin (beacon) profile
export const fetchProfile = () =>
    apiClient.get("/api/users/profile", {
        headers: { "x-client-type": CLIENT_TYPE }
    });
