import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mmt817/pixel-ui-react/dist/index.css'
import 'virtual:uno.css'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
