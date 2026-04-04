import { useEffect, useRef } from 'react'
import { Github, Linkedin, Instagram, Twitter, ArrowUpRight } from 'lucide-react'

const Footer = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const currentYear = new Date().getFullYear()

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

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ]

  const greetings = ['Hallo', 'مرحبا', '你好', 'Hello', 'Hola', 'Bonjour']

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="mt-auto bg-neutral-950 text-white w-full min-h-screen flex flex-col justify-between"
    >
      {/* CTA Section */}
      <div className="py-6 sm:py-64 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="text-center reveal stagger-1">
          <a
            href="mailto:hello@nisalfonseka.com"
            className="inline-flex items-center gap-4 group"
          >
            <h2 className="relative text-4xl sm:text-5xl lg:text-7xl font-bold font-playfair transition-colors duration-500 group-hover:text-black overflow-hidden">
              <span className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out -z-10"></span>
              Lets get in contact!
            </h2>
            <ArrowUpRight className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 group-hover:rotate-45 transition-transform duration-200" />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 px-6 sm:px-8 lg:px-16 xl:px-24 border-t border-neutral-800 reveal stagger-2">
        {/* Copyright */}
        <p className="text-neutral-500 text-sm font-outfit">
          © {currentYear} Nisal
        </p>

        {/* Greeting Tags */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-neutral-500 text-sm font-outfit">
          {greetings.map((greeting) => (
            <span key={greeting} className="hover:text-white transition-colors">
              {greeting}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
