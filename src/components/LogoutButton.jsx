import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function LogoutButton({ closeDropdown }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      closeDropdown();
      navigate("/login");
    } catch (err) {
      alert(
        err.response?.data?.error || "Logout failed. Please try again later."
      );
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full flex items-center px-5 py-3 text-base font-medium text-red-600 hover:bg-[#FFF6E0] dark:hover:bg-slate-700 transition"
    >
      <LogOut className="w-5 h-5 mr-3 text-red-500" />
      Logout
    </button>
  );
}
