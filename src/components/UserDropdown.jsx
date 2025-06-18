import React from "react";
import { useNavigate } from "react-router-dom";
import { User, LogOut, LogIn } from "lucide-react";
import LogoutButton from "./LogoutButton";
import { useAuth } from "../context/AuthContext";

export default function UserDropdown({ closeDropdown }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 z-50 animate-fade-in">
      <button
        className="w-full flex items-center px-5 py-3 text-base font-medium text-slate-800 dark:text-slate-100 hover:bg-[#FFF6E0] dark:hover:bg-slate-700 transition"
        onClick={() => {
          closeDropdown();
          navigate("/profile");
        }}
      >
        <User className="w-5 h-5 mr-3 text-[#FF9900]" />
        Profile
      </button>
      <div className="border-t border-slate-200 dark:border-slate-700" />
      {user ? (
        <LogoutButton closeDropdown={closeDropdown} />
      ) : (
        <button
          className="w-full flex items-center px-5 py-3 text-base font-medium text-slate-800 dark:text-slate-100 hover:bg-[#FFF6E0] dark:hover:bg-slate-700 transition"
          onClick={() => {
            closeDropdown();
            navigate("/login");
          }}
        >
          <LogIn className="w-5 h-5 mr-3 text-[#FF9900]" />
          Login
        </button>
      )}
    </div>
  );
}
