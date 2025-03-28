"use client"

import { useState } from "react"
import { Header } from "@/src/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Calendar } from "@/src/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/src/components/ui/popover"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { CalendarIcon, Download, FileBarChart, Printer } from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts"

const salesData = [
  { month: "Jan", ventes: 1800000, objectif: 2000000 },
  { month: "Fév", ventes: 2200000, objectif: 2000000 },
  { month: "Mar", ventes: 2800000, objectif: 2500000 },
  { month: "Avr", ventes: 1900000, objectif: 2500000 },
  { month: "Mai", ventes: 2400000, objectif: 2500000 },
  { month: "Juin", ventes: 3100000, objectif: 3000000 },
]

const clientsData = [
  { month: "Jan", nouveaux: 3, actifs: 5 },
  { month: "Fév", nouveaux: 5, actifs: 8 },
  { month: "Mar", nouveaux: 2, actifs: 10 },
  { month: "Avr", nouveaux: 4, actifs: 12 },
  { month: "Mai", nouveaux: 6, actifs: 15 },
  { month: "Juin", nouveaux: 3, actifs: 18 },
]

const parcellesData = [
  { name: "Vendues", value: 21, color: "hsl(var(--stat-parcels))" },
  { name: "Disponibles", value: 15, color: "hsl(var(--chart-1))" },
  { name: "Réservées", value: 8, color: "hsl(var(--chart-3))" },
]

export default function ReportsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [reportType, setReportType] = useState("monthly")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Rapports</h1>
            <p className="text-muted-foreground">Analysez les performances de votre entreprise</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Select defaultValue={reportType} onValueChange={setReportType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type de rapport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Quotidien</SelectItem>
                <SelectItem value="weekly">Hebdomadaire</SelectItem>
                <SelectItem value="monthly">Mensuel</SelectItem>
                <SelectItem value="yearly">Annuel</SelectItem>
              </SelectContent>
            </Select>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP", { locale: fr }) : <span>Sélectionner une date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus locale={fr} />
              </PopoverContent>
            </Popover>
            <Button>
              <FileBarChart className="mr-2 h-4 w-4" />
              Générer le rapport
            </Button>
          </div>
        </div>

        <Tabs defaultValue="ventes" className="w-full">
          <TabsList className="mb-4 grid w-full grid-cols-3">
            <TabsTrigger value="ventes">Ventes</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="parcelles">Parcelles</TabsTrigger>
          </TabsList>
          <TabsContent value="ventes">
            <Card>
              <CardHeader>
                <CardTitle>Rapport des ventes</CardTitle>
                <CardDescription>Analyse des ventes pour la période sélectionnée</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Exporter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Printer className="mr-2 h-4 w-4" />
                    Imprimer
                  </Button>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => `${value / 1000000}M`} />
                    <Tooltip
                      formatter={(value: number) => [
                        `${new Intl.NumberFormat("fr-FR", {
                          style: "currency",
                          currency: "XAF",
                        }).format(value)}`,
                        "",
                      ]}
                    />
                    <Legend />
                    <Bar name="Ventes" dataKey="ventes" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                    <Bar name="Objectif" dataKey="objectif" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="clients">
            <Card>
              <CardHeader>
                <CardTitle>Rapport des clients</CardTitle>
                <CardDescription>Évolution du nombre de clients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Exporter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Printer className="mr-2 h-4 w-4" />
                    Imprimer
                  </Button>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={clientsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      name="Nouveaux clients"
                      dataKey="nouveaux"
                      stroke="hsl(var(--chart-3))"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" name="Clients actifs" dataKey="actifs" stroke="hsl(var(--chart-1))" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="parcelles">
            <Card>
              <CardHeader>
                <CardTitle>Rapport des parcelles</CardTitle>
                <CardDescription>Distribution des parcelles par statut</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Exporter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Printer className="mr-2 h-4 w-4" />
                    Imprimer
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      <Pie
                        data={parcellesData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {parcellesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}`, ""]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

