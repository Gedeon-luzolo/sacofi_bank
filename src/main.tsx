import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "flatpickr/dist/flatpickr.css";
import App from "./App.tsx";
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import ErrorBoundary from "./components/errors/ErrorBoundary.tsx";
import LoadingSpinner from "./components/LoadingSpinner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppWrapper>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            {" "}
            <App />
          </Suspense>
        </ErrorBoundary>
      </AppWrapper>
    </ThemeProvider>
  </StrictMode>
);
