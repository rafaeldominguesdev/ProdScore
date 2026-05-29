"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, FileText, Settings, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Funcionários", href: "/dashboard/funcionarios", icon: Users },
  { label: "Relatórios", href: "/dashboard/relatorios", icon: FileText },
  { label: "Configurações", href: "/dashboard/configuracoes", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <aside className="fixed left-0 top-0 h-screen w-[196px] bg-white dark:bg-[#0f0f0f] border-r border-border flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
          <span className="font-syne font-bold text-title text-xl tracking-tight">ProdScore</span>
        </div>
      </div>
      
      <nav className="flex-1 py-4 px-3 flex flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          // Verify if it's strictly active or active by prefix
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                isActive
                  ? "bg-gray-100 dark:bg-[#141414] text-title font-medium"
                  : "text-secondary hover:bg-gray-50 dark:hover:bg-[#1a1a1a]"
              }`}
            >
              <item.icon className={`w-4 h-4 ${isActive ? "text-accent" : "text-label"}`} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border mt-auto flex flex-col gap-4">
        <p className="text-xs text-secondary italic leading-relaxed">
          "Você já sabe quem enrola. A gente só prova."
        </p>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex items-center gap-3 px-3 py-2 w-full rounded-md text-sm text-secondary hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors"
        >
          {mounted && theme === 'dark' ? <Sun className="w-4 h-4 text-label" /> : <Moon className="w-4 h-4 text-label" />}
          <span>{mounted && theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </aside>
  );
}
