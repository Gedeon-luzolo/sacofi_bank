"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    total: 1800000,
  },
  {
    name: "Fév",
    total: 2200000,
  },
  {
    name: "Mar",
    total: 2800000,
  },
  {
    name: "Avr",
    total: 1900000,
  },
  {
    name: "Mai",
    total: 2400000,
  },
  {
    name: "Juin",
    total: 3100000,
  },
]

export function SalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ventes Mensuelles</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000000}M`}
            />
            <Tooltip
              formatter={(value: number) => [
                `${new Intl.NumberFormat("fr-FR", {
                  style: "currency",
                  currency: "XAF",
                }).format(value)}`,
                "Total",
              ]}
              labelFormatter={(label) => `Mois: ${label}`}
            />
            <Bar dataKey="total" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} className="fill-primary" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

