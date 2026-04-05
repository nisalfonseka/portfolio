import { useEffect, useRef, createContext, useContext } from 'react'
import Lenis from 'lenis'

// Context to expose Lenis instance for programmatic scrolling
const LenisContext = createContext<Lenis | null>(null)

export const useLenis = () => useContext(LenisContext)

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null)
  const isSnapping = useRef(false)
  const lastScrollY = useRef(0)
  const snapTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // Define your sections in order (these should match your section IDs)
    const sectionIds = ['hero-section', 'about', 'experience', 'projects', 'education', 'skills', 'stats', 'footer']

    // Initialize Lenis with slower scroll within sections
    const lenis = new Lenis({
      duration: 2.2, // Slow scrolling within sections
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.7, // Reduced for slower in-section scrolling
      touchMultiplier: 1.5,
    })

    lenisRef.current = lenis
    ;(window as any).lenis = lenis

    // Get section boundaries
    const getSections = () => {
      return sectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean) as HTMLElement[]
    }

    // Find which section the scroll position is in
    const getCurrentSectionIndex = (scrollY: number) => {
      const sections = getSections()
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect()
        const sectionTop = scrollY + rect.top
        if (scrollY >= sectionTop - window.innerHeight * 0.3) {
          return i
        }
      }
      return 0
    }

    // Snap to a section
    const snapToSection = (index: number) => {
      const sections = getSections()
      if (index >= 0 && index < sections.length && !isSnapping.current) {
        isSnapping.current = true
        
        lenis.scrollTo(sections[index], {
          offset: 0,
          duration: 1.2, // Fast snap between sections
          easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
          onComplete: () => {
            setTimeout(() => {
              isSnapping.current = false
            }, 100)
          }
        })
      }
    }

    // Handle scroll to detect section boundaries
    const handleScroll = () => {
      if (isSnapping.current) return

      const currentScrollY = lenis.scroll
      lastScrollY.current = currentScrollY

      // Clear existing timeout
      if (snapTimeout.current) {
        clearTimeout(snapTimeout.current)
      }

      // Debounce snap detection
      snapTimeout.current = setTimeout(() => {
        if (isSnapping.current) return

        const sections = getSections()
        const viewportCenter = currentScrollY + window.innerHeight * 0.4

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i]
          const rect = section.getBoundingClientRect()
          const sectionTop = currentScrollY + rect.top

          // Check if we're near a section boundary (within threshold)
          const threshold = window.innerHeight * 0.15

          // Near the top of a section - snap to it
          if (Math.abs(viewportCenter - sectionTop) < threshold) {
            snapToSection(i)
            break
          }
        }
      }, 150) // Wait for scroll to settle
    }

    lenis.on('scroll', handleScroll)

    // Handle wheel events for section jumping
    const handleWheel = (e: WheelEvent) => {
      if (isSnapping.current) {
        e.preventDefault()
        return
      }

      const sections = getSections()
      const currentIndex = getCurrentSectionIndex(lenis.scroll)
      const currentSection = sections[currentIndex]
      
      if (!currentSection) return

      const rect = currentSection.getBoundingClientRect()
      const sectionTop = lenis.scroll + rect.top
      const sectionBottom = sectionTop + rect.height
      const scrollPosition = lenis.scroll
      const viewportHeight = window.innerHeight

      // Check if we're at section boundary
      const atSectionTop = Math.abs(scrollPosition - sectionTop) < 50
      const atSectionBottom = Math.abs((scrollPosition + viewportHeight) - sectionBottom) < 50

      // If scrolling down at bottom of section, snap to next
      if (e.deltaY > 30 && atSectionBottom && currentIndex < sections.length - 1) {
        e.preventDefault()
        snapToSection(currentIndex + 1)
      }
      // If scrolling up at top of section, snap to previous
      else if (e.deltaY < -30 && atSectionTop && currentIndex > 0) {
        e.preventDefault()
        snapToSection(currentIndex - 1)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    // Handle anchor clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement
      
      if (anchor) {
        const targetId = anchor.getAttribute('href')?.slice(1)
        if (targetId) {
          e.preventDefault()
          const targetIndex = sectionIds.indexOf(targetId)
          if (targetIndex !== -1) {
            snapToSection(targetIndex)
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel)
      document.removeEventListener('click', handleAnchorClick)
      if (snapTimeout.current) clearTimeout(snapTimeout.current)
      lenis.destroy()
    }
  }, [])

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  )
}

export default SmoothScroll
