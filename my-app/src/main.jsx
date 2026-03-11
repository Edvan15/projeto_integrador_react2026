import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Atividade from './Atividade.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Atividade />
  </StrictMode>,
)
