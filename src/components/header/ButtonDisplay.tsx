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
      className="text-gray-500 px-2 py-2 rounded-full transition border dark:text-gray-400 hover:text-green-700/40 dark:hover:text-gray-200"
    >
      {isFullScreen ? <Minimize size={24} /> : <Maximize size={24} />}
    </button>
  );
}
