"use client";

import type React from "react";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";

export function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-3xl items-center gap-2 rounded-full bg-background p-1 shadow-md"
    >
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Clients, parcelles, N° Facture"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-12 border-none pl-10 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      <motion.div whileTap={{ scale: 0.95 }}>
        <Button
          type="submit"
          className="h-10 bg-green-700 rounded-full  text-zinc-50 hover:bg-add-client/90"
        >
          Recherche
        </Button>
      </motion.div>
    </form>
  );
}
