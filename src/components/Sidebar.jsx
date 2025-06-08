import React from "react";
import { LayoutDashboard, UserCheck, FileText, Sliders } from "lucide-react";
import useScrollDirection from "../hooks/useScrollDirection";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: UserCheck, label: "Sellers", active: false },
  { icon: FileText, label: "Reports", active: false },
  { icon: Sliders, label: "Settings", active: false },
];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const scrollDirection = useScrollDirection();

  return (
    <>
      <aside
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
        className={`fixed left-0 z-30 top-16 h-[calc(100vh-4rem)] bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800 transition-all duration-500 ${
          isSidebarOpen ? "w-64" : "w-20"
        } ${scrollDirection === "down" ? "-translate-y-16" : "translate-y-0"}`}
        style={{ willChange: "transform" }}
      >
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    item.active
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold"
                      : "hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <item.icon className="w-6 h-6 flex-shrink-0" />
                  <span
                    className={`transition-opacity duration-200 ${
                      isSidebarOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div
        className={`fixed inset-0 bg-black/20 z-20 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
    </>
  );
};

export default Sidebar;
