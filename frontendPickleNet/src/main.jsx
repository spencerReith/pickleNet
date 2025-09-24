import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import Headlines from './pages/Headlines.jsx'
import Write from './pages/Write.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Headlines />}/>
      <Route path="/write" element={<Write />} />
    </Routes>
  </BrowserRouter>
)