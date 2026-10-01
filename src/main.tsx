import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/poppins/latin-600.css'
import './styles/global.css'
import './styles/home.css'
import './styles/responsive.css'
import './styles/auth.css'
import App from './app/App.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
