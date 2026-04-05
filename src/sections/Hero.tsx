import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center px-6 sm:px-8 lg:px-16 pt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            <div className="reveal stagger-1">
              <span className="text-neutral-500 text-lg sm:text-xl tracking-widest font-syne">
                Hello, I'm Nisal
              </span>
            </div>

            <h1 className="reveal stagger-2 mt-6">
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tighter leading-none font-syne">
                AI SYSTEM
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tighter leading-none mt-2 font-playfair italic">
                Developer
              </span>
            </h1>

            <p className="reveal stagger-3 mt-8 text-neutral-400 text-lg sm:text-xl max-w-md font-space">
              Crafting intelligent AI systems and building scalable solutions
              with modern technologies.
            </p>

            <div className="reveal stagger-4 mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-black font-semibold rounded hover:bg-neutral-200 transition-colors font-space"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border border-neutral-700 text-white font-semibold rounded hover:border-white transition-colors font-space"
              >
                View Work
              </a>
            </div>

            <div className="reveal stagger-5 mt-12 flex gap-6">
              <a
                href="https://github.com/nisalfonseka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors text-sm font-medium"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nisalfonseka/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors text-sm font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="order-1 lg:order-2 reveal stagger-2 flex justify-center lg:justify-end">
            <img
              src="/profile.png"
              alt="Nisal Fonseka"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
