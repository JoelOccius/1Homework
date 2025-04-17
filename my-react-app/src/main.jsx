
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoItem from './Components/TodoItem.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TodoItem/>
  </StrictMode>,
)
