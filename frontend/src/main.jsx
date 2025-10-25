import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter, useLocation, useNavigationType, createRoutesFromChildren, matchRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './providers/AuthProvider';
import * as Sentry from "@sentry/react";

// Initialize Sentry
Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN, // You'll add your DSN here
  integrations: [
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of transactions in development
  environment: import.meta.env.MODE, // Sets environment based on Vite mode
});

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const container = document.getElementById('root');

if (!container) {
  // Fail fast with a clear message when the runtime root element is missing
  throw new Error("Root element with id 'root' not found. Make sure index.html contains <div id=\"root\"></div>");
}

const queryClient = new QueryClient()

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
              <App />
              <Toaster />
            </Sentry.ErrorBoundary>
          </AuthProvider>
        </QueryClientProvider>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
);
