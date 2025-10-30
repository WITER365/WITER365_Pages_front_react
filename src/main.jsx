/*main.jsx*/
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/WITER365_Pages_front_react">
    <App />
  </BrowserRouter>
)