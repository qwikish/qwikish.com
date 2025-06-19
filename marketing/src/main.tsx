import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

import './index.css'
import App from './App.tsx'
import RootLayout from './layouts/root-layout.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RootLayout>
          <App />
          <Toaster />          
        </RootLayout>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
