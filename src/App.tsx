import { useState } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Stats from './sections/Stats'
import Footer from './sections/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <main className="flex flex-col min-h-screen bg-background">
          <Header />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Stats />
          <Footer />
        </main>
      )}
    </>
  )
}

export default App
