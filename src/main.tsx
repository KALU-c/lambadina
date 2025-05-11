import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'sonner'
import { AuthProvider } from './context/AuthContext.tsx'
import { BrowserRouter } from 'react-router'
import '@/lib/i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
        <Toaster richColors />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
