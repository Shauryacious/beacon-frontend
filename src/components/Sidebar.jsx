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
        className={`fixed left-0 z-30 top-16 h-[150vh] bg-[color:var(--color-card)] border-r border-[color:var(--color-border)] shadow transition-all duration-500 ${
          isSidebarOpen ? "w-64" : "w-20"
        } ${scrollDirection === "down" ? "-translate-y-16" : "translate-y-0"}`}
        style={{ willChange: "transform" }}
      >
        <nav className="p-3">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-all group
                    ${
                      item.active
                        ? "bg-[color:var(--color-accent)]/20 text-[color:var(--color-primary)] border-l-4 border-[color:var(--color-accent)]"
                        : "hover:bg-[color:var(--color-accent)]/10 text-[color:var(--color-text)]"
                    }
                  `}
                >
                  <item.icon
                    className={`w-6 h-6 flex-shrink-0 ${
                      item.active
                        ? "text-[color:var(--color-accent)]"
                        : "text-[color:var(--color-muted)] group-hover:text-[color:var(--color-accent)]"
                    }`}
                  />
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
