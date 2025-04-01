import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "flatpickr/dist/flatpickr.css";
import { Toaster } from "sonner";
import App from "./App.tsx";
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import ErrorBoundary from "./components/errors/ErrorBoundary.tsx";
import LoadingSpinner from "./components/LoadingSpinner.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppWrapper>
        <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <App />
            <Suspense fallback={<LoadingSpinner />}>
              {" "}
              <Toaster position="top-right" richColors />
              <App />
            </Suspense>
          </QueryClientProvider>
        </ErrorBoundary>
      </AppWrapper>
    </ThemeProvider>
  </StrictMode>
);
