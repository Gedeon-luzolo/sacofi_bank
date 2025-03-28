"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/src/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Switch } from "@/src/components/ui/switch"
import { Textarea } from "@/src/components/ui/textarea"
import { toast } from "sonner"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [companySettings, setCompanySettings] = useState({
    name: "SACOFI BANK",
    email: "contact@sacofibank.com",
    phone: "+237 612345678",
    address: "123 Rue Principale, Douala, Cameroun",
    taxId: "12345678900",
    logo: "/logo.png",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    paymentAlerts: true,
    invoiceReminders: true,
    newClientAlerts: true,
    marketingEmails: false,
  })

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCompanySettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleNotificationChange = (name: string, checked: boolean) => {
    setNotificationSettings((prev) => ({ ...prev, [name]: checked }))
  }

  const handleCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Paramètres de l'entreprise mis à jour")
  }

  const handleNotificationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Paramètres de notification mis à jour")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Paramètres</h1>
          <p className="text-muted-foreground">Gérez les paramètres de votre application</p>
        </div>

        <Tabs defaultValue="company" className="w-full">
          <TabsList className="mb-4 grid w-full grid-cols-3">
            <TabsTrigger value="company">Entreprise</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Apparence</TabsTrigger>
          </TabsList>
          <TabsContent value="company">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres de l'entreprise</CardTitle>
                <CardDescription>Gérez les informations de votre entreprise</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCompanySubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom de l'entreprise</Label>
                      <Input id="name" name="name" value={companySettings.name} onChange={handleCompanyChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={companySettings.email}
                        onChange={handleCompanyChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" name="phone" value={companySettings.phone} onChange={handleCompanyChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="taxId">Numéro d'identification fiscale</Label>
                      <Input id="taxId" name="taxId" value={companySettings.taxId} onChange={handleCompanyChange} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Adresse</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={companySettings.address}
                      onChange={handleCompanyChange}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="logo">Logo</Label>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 overflow-hidden rounded-md border">
                        <div className="flex h-full w-full items-center justify-center bg-muted">
                          <span className="text-xs font-medium">LOGO</span>
                        </div>
                      </div>
                      <Button type="button" variant="outline">
                        Changer le logo
                      </Button>
                    </div>
                  </div>
                  <Button type="submit">Enregistrer les modifications</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres de notification</CardTitle>
                <CardDescription>Configurez comment et quand vous recevez des notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNotificationSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="emailNotifications">Notifications par email</Label>
                        <p className="text-sm text-muted-foreground">Recevoir des notifications par email</p>
                      </div>
                      <Switch
                        id="emailNotifications"
                        checked={notificationSettings.emailNotifications}
                        onCheckedChange={(checked) => handleNotificationChange("emailNotifications", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="smsNotifications">Notifications par SMS</Label>
                        <p className="text-sm text-muted-foreground">Recevoir des notifications par SMS</p>
                      </div>
                      <Switch
                        id="smsNotifications"
                        checked={notificationSettings.smsNotifications}
                        onCheckedChange={(checked) => handleNotificationChange("smsNotifications", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="paymentAlerts">Alertes de paiement</Label>
                        <p className="text-sm text-muted-foreground">Recevoir des alertes lors des paiements</p>
                      </div>
                      <Switch
                        id="paymentAlerts"
                        checked={notificationSettings.paymentAlerts}
                        onCheckedChange={(checked) => handleNotificationChange("paymentAlerts", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="invoiceReminders">Rappels de facture</Label>
                        <p className="text-sm text-muted-foreground">
                          Recevoir des rappels pour les factures en attente
                        </p>
                      </div>
                      <Switch
                        id="invoiceReminders"
                        checked={notificationSettings.invoiceReminders}
                        onCheckedChange={(checked) => handleNotificationChange("invoiceReminders", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="newClientAlerts">Alertes de nouveaux clients</Label>
                        <p className="text-sm text-muted-foreground">
                          Recevoir des alertes lors de l'ajout de nouveaux clients
                        </p>
                      </div>
                      <Switch
                        id="newClientAlerts"
                        checked={notificationSettings.newClientAlerts}
                        onCheckedChange={(checked) => handleNotificationChange("newClientAlerts", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="marketingEmails">Emails marketing</Label>
                        <p className="text-sm text-muted-foreground">Recevoir des emails marketing et promotionnels</p>
                      </div>
                      <Switch
                        id="marketingEmails"
                        checked={notificationSettings.marketingEmails}
                        onCheckedChange={(checked) => handleNotificationChange("marketingEmails", checked)}
                      />
                    </div>
                  </div>
                  <Button type="submit">Enregistrer les préférences</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Apparence</CardTitle>
                <CardDescription>Personnalisez l'apparence de votre tableau de bord</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Thème</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`cursor-pointer rounded-lg border p-4 text-center ${
                        theme === "light" ? "border-primary bg-primary/10" : ""
                      }`}
                      onClick={() => setTheme("light")}
                    >
                      <div className="mb-2 h-20 rounded-md bg-white"></div>
                      <span className="text-sm font-medium">Clair</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`cursor-pointer rounded-lg border p-4 text-center ${
                        theme === "dark" ? "border-primary bg-primary/10" : ""
                      }`}
                      onClick={() => setTheme("dark")}
                    >
                      <div className="mb-2 h-20 rounded-md bg-slate-950"></div>
                      <span className="text-sm font-medium">Sombre</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`cursor-pointer rounded-lg border p-4 text-center ${
                        theme === "system" ? "border-primary bg-primary/10" : ""
                      }`}
                      onClick={() => setTheme("system")}
                    >
                      <div className="mb-2 h-20 rounded-md bg-gradient-to-r from-white to-slate-950"></div>
                      <span className="text-sm font-medium">Système</span>
                    </motion.div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Densité d'affichage</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-pointer rounded-lg border p-4 text-center"
                    >
                      <div className="mb-2 space-y-1">
                        <div className="h-2 rounded bg-muted"></div>
                        <div className="h-2 rounded bg-muted"></div>
                        <div className="h-2 rounded bg-muted"></div>
                      </div>
                      <span className="text-sm font-medium">Compact</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-pointer rounded-lg border border-primary bg-primary/10 p-4 text-center"
                    >
                      <div className="mb-2 space-y-2">
                        <div className="h-2 rounded bg-muted"></div>
                        <div className="h-2 rounded bg-muted"></div>
                        <div className="h-2 rounded bg-muted"></div>
                      </div>
                      <span className="text-sm font-medium">Normal</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-pointer rounded-lg border p-4 text-center"
                    >
                      <div className="mb-2 space-y-3">
                        <div className="h-2 rounded bg-muted"></div>
                        <div className="h-2 rounded bg-muted"></div>
                        <div className="h-2 rounded bg-muted"></div>
                      </div>
                      <span className="text-sm font-medium">Confortable</span>
                    </motion.div>
                  </div>
                </div>
                <Button>Appliquer les changements</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

