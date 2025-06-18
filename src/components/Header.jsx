import React, { useState, useRef, useEffect } from "react";
import { Bell, User, Sun, Moon, Search } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import useScrollDirection from "../hooks/useScrollDirection";
import UserDropdown from "./UserDropdown";
import { useAuth } from "../context/AuthContext";

const Header = ({ theme, setTheme }) => {
  const scrollDirection = useScrollDirection();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-16 bg-[color:var(--color-header)] text-white z-40 flex items-center px-4 sm:px-8 border-b border-[color:var(--color-border)] shadow transition-all duration-500 ${
        scrollDirection === "down" ? "-translate-y-16" : "translate-y-0"
      }`}
      style={{ willChange: "transform" }}
    >
      <div className="flex items-center min-w-[160px]">
        <Link to="/">
          <img
            src="logo.png"
            alt="BEACON Logo"
            className="w-40 h-32 object-contain cursor-pointer"
          />
        </Link>
      </div>

      <div className="flex-1 flex justify-center mx-4">
        <div className="relative w-full max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search ASIN, Seller, or Alert..."
            className="w-full pl-12 pr-4 py-2.5 rounded-md bg-white text-black border border-transparent focus:border-[#FF9900] focus:ring-2 focus:ring-[#FF9900] transition-all placeholder-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 min-w-[160px] justify-end">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-[#232F3E] transition-colors"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-[#FF9900]" />
          ) : (
            <Moon className="w-5 h-5 text-[#FF9900]" />
          )}
        </button>
        <button className="p-2 rounded-full hover:bg-[#232F3E] transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1.5 block w-2 h-2 bg-[#FF9900] rounded-full animate-pulse"></span>
        </button>
        <div className="relative" ref={dropdownRef}>
          <button
            className="p-2 rounded-full hover:bg-[#232F3E] transition-colors"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            <User className="w-9 h-9 p-1.5 bg-[#232F3E] rounded-full" />
          </button>
          {dropdownOpen && (
            <UserDropdown closeDropdown={() => setDropdownOpen(false)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
