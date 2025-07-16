import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SolidMenuManager from './SolidMenuManager.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SolidMenuManager />
  </StrictMode>,
)
