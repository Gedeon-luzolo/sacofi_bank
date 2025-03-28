"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/src/lib/utils"

interface DashboardCardProps {
  title: string
  icon: ReactNode
  href: string
  className?: string
  iconClassName?: string
}

export function DashboardCard({ title, icon, href, className, iconClassName }: DashboardCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(
          "flex h-48 flex-col items-center justify-center rounded-lg p-6 text-center shadow-md transition-colors",
          className,
        )}
      >
        <div className={cn("mb-4 flex h-16 w-16 items-center justify-center", iconClassName)}>{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </motion.div>
    </Link>
  )
}

