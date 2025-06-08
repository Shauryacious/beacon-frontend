import React from "react";
import { Bell, User, Sun, Moon, Search } from "lucide-react";
import useScrollDirection from "../hooks/useScrollDirection";

const Header = ({ theme, setTheme }) => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-16 bg-[color:var(--color-header)] text-white z-40 flex items-center px-4 sm:px-8 border-b border-[color:var(--color-border)] shadow transition-all duration-500 ${
        scrollDirection === "down" ? "-translate-y-16" : "translate-y-0"
      }`}
      style={{ willChange: "transform" }}
    >
      <div className="flex items-center min-w-[160px]">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF9900">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
        <span className="ml-2 font-bold text-xl text-white tracking-wide">
          Trustify
        </span>
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
        <User className="w-9 h-9 p-1.5 bg-[#232F3E] rounded-full" />
      </div>
    </header>
  );
};

export default Header;
