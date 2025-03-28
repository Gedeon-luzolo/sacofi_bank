"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  BarChart3,
  FileText,
  Home,
  Users,
  Settings,
  Bell,
  User,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";
import { useTheme } from "next-themes";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";

const navItems = [
  {
    name: "Tableau de bord",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Liste des factures",
    href: "/dashboard/factures",
    icon: FileText,
  },
  {
    name: "Liste des clients",
    href: "/dashboard/clients",
    icon: Users,
  },
  {
    name: "Rapports",
    href: "/dashboard/rapports",
    icon: BarChart3,
  },
  {
    name: "Paramètres",
    href: "/dashboard/parametres",
    icon: Settings,
  },
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    name: "Profil",
    href: "/dashboard/profil",
    icon: User,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex h-screen w-64 flex-col bg-green-800 text-primary-foreground">
      <div className="flex items-center justify-center p-6">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
            <span className="text-center text-xs font-bold text-primary">
              LOGO
              <br />
              SACOFI BANK
            </span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-4 py-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
              pathname === item.href
                ? "bg-primary-foreground text-primary"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            )}
          >
            {pathname === item.href && (
              <motion.div
                layoutId="sidebar-indicator"
                className="absolute left-0 top-0 h-full w-1 rounded-r-md bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="border-t border-primary-foreground/20 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>DN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Dan NG</p>
              <p className="text-xs opacity-70">Administrateur</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
        <Button className="bg-green-400 mt-4 w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
          <LogOut className="mr-2 h-4 w-4" /> Déconnexion
        </Button>
      </div>
    </div>
  );
}
