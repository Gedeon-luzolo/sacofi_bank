"use client"

import { useState } from "react"
import { Header } from "@/src/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import { Bell, Check, Clock, AlertTriangle } from "lucide-react"

interface Notification {
  id: string
  title: string
  description: string
  time: string
  type: "info" | "success" | "warning"
  read: boolean
}

const initialNotifications: Notification[] = [
  {
    id: "n1",
    title: "Nouveau paiement reçu",
    description: "Un paiement de 2,500,000 XAF a été reçu de Jean Dupont",
    time: "Il y a 5 minutes",
    type: "success",
    read: false,
  },
  {
    id: "n2",
    title: "Nouveau client ajouté",
    description: "Marie Curie a été ajoutée à la liste des clients",
    time: "Il y a 1 heure",
    type: "info",
    read: false,
  },
  {
    id: "n3",
    title: "Facture en attente",
    description: "La facture INV003 est en attente de paiement depuis 5 jours",
    time: "Il y a 3 heures",
    type: "warning",
    read: false,
  },
  {
    id: "n4",
    title: "Rapport mensuel disponible",
    description: "Le rapport mensuel de mars 2025 est maintenant disponible",
    time: "Il y a 1 jour",
    type: "info",
    read: true,
  },
  {
    id: "n5",
    title: "Paiement en retard",
    description: "Le paiement de la facture INV007 est en retard",
    time: "Il y a 2 jours",
    type: "warning",
    read: true,
  },
]

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const [activeTab, setActiveTab] = useState("all")

  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === "all") return true
    if (activeTab === "unread") return !notification.read
    return true
  })

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
            <p className="text-muted-foreground">Gérez vos notifications et restez informé</p>
          </div>
          <Button onClick={markAllAsRead}>Tout marquer comme lu</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Centre de notifications</CardTitle>
            <CardDescription>{notifications.filter((n) => !n.read).length} notifications non lues</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-4 grid w-full grid-cols-2">
                <TabsTrigger value="all">Toutes</TabsTrigger>
                <TabsTrigger value="unread">Non lues</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                <AnimatePresence>
                  {filteredNotifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`relative rounded-lg border p-4 ${notification.read ? "opacity-70" : ""}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${
                            notification.type === "success"
                              ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                              : notification.type === "warning"
                                ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300"
                                : "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                          }`}
                        >
                          {notification.type === "success" ? (
                            <Check className="h-5 w-5" />
                          ) : notification.type === "warning" ? (
                            <AlertTriangle className="h-5 w-5" />
                          ) : (
                            <Bell className="h-5 w-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{notification.title}</h3>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                          <div className="mt-2 flex items-center text-xs text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {notification.time}
                          </div>
                        </div>
                        {!notification.read && (
                          <Button size="sm" variant="ghost" onClick={() => markAsRead(notification.id)}>
                            Marquer comme lu
                          </Button>
                        )}
                      </div>
                      {!notification.read && <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </TabsContent>
              <TabsContent value="unread" className="space-y-4">
                <AnimatePresence>
                  {filteredNotifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="relative rounded-lg border p-4"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${
                            notification.type === "success"
                              ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                              : notification.type === "warning"
                                ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300"
                                : "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                          }`}
                        >
                          {notification.type === "success" ? (
                            <Check className="h-5 w-5" />
                          ) : notification.type === "warning" ? (
                            <AlertTriangle className="h-5 w-5" />
                          ) : (
                            <Bell className="h-5 w-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{notification.title}</h3>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                          <div className="mt-2 flex items-center text-xs text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {notification.time}
                          </div>
                        </div>
                        <Button size="sm" variant="ghost" onClick={() => markAsRead(notification.id)}>
                          Marquer comme lu
                        </Button>
                      </div>
                      <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

