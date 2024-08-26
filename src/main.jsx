import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import BookProvider from './components/api/book.jsx'
import BookProvider from './components/api/api.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
    <App />
    </BookProvider>
  </StrictMode>,
)
