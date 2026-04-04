import { useState, useEffect } from 'react'
import ScrambledText from './ScrambledText'

const Header = () => {
  const [currentTime, setCurrentTime] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')
      setCurrentTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearInterval(interval)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090909]/90 backdrop-blur-md border-b border-neutral-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-white font-semibold tracking-tight hover:opacity-70 transition-opacity font-space"
          >
            <ScrambledText
              radius={50}
              duration={0.5}
              speed={0.7}
              scrambleChars="XYZ"
              className="text-white font-semibold tracking-tight font-space [&>p]:m-0"
            >
              NISALFONSEKA
            </ScrambledText>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <ScrambledText
                  radius={40}
                  duration={0.6}
                  speed={0.3}
                  scrambleChars="XYZ"
                  className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors font-space [&>p]:m-0"
                >
                  {item.label}
                </ScrambledText>
              </button>
            ))}
          </nav>

          {/* Clock */}
          <div className="text-sm font-mono text-neutral-500">
            <ScrambledText
              radius={40}
              duration={0.4}
              speed={0.5}
              scrambleChars="0123456789:"
              className="text-sm font-mono text-neutral-500 [&>p]:m-0"
            >
              {currentTime}
            </ScrambledText>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
