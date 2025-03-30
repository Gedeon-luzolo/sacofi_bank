"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  className?: string;
  description?: string;
}

export function StatCard({
  title,
  value,
  icon,
  className,
  description,
}: StatCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} className={cn("stat-card", className)}>
      {icon && <div className="mb-2">{icon}</div>}
      <h3 className="text-2xl lg:text-4xl font-bold">{value}</h3>
      <p className="text-[12px] lg:text-sm">{title}</p>
      {description && (
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}
