import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <BrowserRouter>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default App
