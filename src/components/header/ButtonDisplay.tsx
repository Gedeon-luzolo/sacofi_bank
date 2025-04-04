"use client";

import { Maximize, Minimize } from "lucide-react";
import { useState } from "react";

export function ButtonDisplay() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => {
          setIsFullScreen(true);
        })
        .catch((err) => {
          console.error("Erreur lors de l'activation du plein écran:", err);
        });
    } else {
      document
        .exitFullscreen()
        .then(() => {
          setIsFullScreen(false);
        })
        .catch((err) => {
          console.error("Erreur lors de la sortie du plein écran:", err);
        });
    }
  };

  return (
    <button
      onClick={toggleFullScreen}
      className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full dropdown-toggle hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
    >
      {isFullScreen ? <Minimize size={24} /> : <Maximize size={24} />}
    </button>
  );
}
