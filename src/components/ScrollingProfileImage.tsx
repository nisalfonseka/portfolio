import { motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useState } from 'react'

// Alternative: even faster in the middle
const easeInOutQuint = (t: number): number => {
  return t < 0.5
    ? 16 * t * t * t * t * t
    : 1 - Math.pow(-2 * t + 2, 5) / 2
}

const ScrollingProfileImage = () => {
  const [positions, setPositions] = useState({
    heroX: 0,
    heroY: 0,
    aboutX: 0,
    aboutY: 0,
    scrollStart: 0,
    scrollEnd: 0,
    heroWidth: 400,
    heroHeight: 400,
    aboutWidth: 200,
    aboutHeight: 200,
  })

  const { scrollY } = useScroll()

  useEffect(() => {
    const updatePositions = () => {
      const heroPlaceholder = document.getElementById('hero-image-placeholder')
      const aboutTarget = document.getElementById('about-image-target')

      if (heroPlaceholder && aboutTarget) {
        const heroRect = heroPlaceholder.getBoundingClientRect()
        const aboutRect = aboutTarget.getBoundingClientRect()
        const currentScroll = window.scrollY

        // Calculate absolute positions
        const heroY = heroRect.top + currentScroll
        const aboutY = aboutRect.top + currentScroll

        // Animation should start when hero starts leaving viewport
        // and end when about section image target is in view
        const scrollStart = heroY - window.innerHeight * -0.4
        const scrollEnd = aboutY - window.innerHeight * 0.4

        setPositions({
          heroX: heroRect.left,
          heroY: heroY,
          aboutX: aboutRect.left,
          aboutY: aboutY,
          scrollStart: Math.max(0, scrollStart),
          scrollEnd: scrollEnd,
          heroWidth: heroRect.width || 400,
          heroHeight: heroRect.height || 400,
          aboutWidth: aboutRect.width || 200,
          aboutHeight: aboutRect.height || 200,
        })
      }
    }

    // Initial update
    updatePositions()
    
    // Update on resize and scroll (for dynamic layouts)
    window.addEventListener('resize', updatePositions)
    
    // Delayed update to ensure DOM is fully rendered
    const timeout = setTimeout(updatePositions, 200)

    return () => {
      window.removeEventListener('resize', updatePositions)
      clearTimeout(timeout)
    }
  }, [])

  // Easing options - change this to control the speed curve
  // easeInOutCubic = moderate acceleration
  // easeInOutQuint = faster acceleration (snappier)
  const easingFn = easeInOutQuint

  // Transform values based on scroll position with easing
  const x = useTransform(
    scrollY,
    [positions.scrollStart, positions.scrollEnd],
    [positions.heroX, positions.aboutX],
    { clamp: true, ease: easingFn }
  )

  const width = useTransform(
    scrollY,
    [positions.scrollStart, positions.scrollEnd],
    [positions.heroWidth, positions.aboutWidth],
    { clamp: true, ease: easingFn }
  )

  const height = useTransform(
    scrollY,
    [positions.scrollStart, positions.scrollEnd],
    [positions.heroHeight, positions.aboutHeight],
    { clamp: true, ease: easingFn }
  )

  const borderRadius = useTransform(
    scrollY,
    [positions.scrollStart, positions.scrollEnd],
    [0, 16],
    { clamp: true, ease: easingFn }
  )

  // Opacity fade effect - slight fade during movement, fully visible at start/end
  const opacity = useTransform(
    scrollY,
    [
      positions.scrollStart,
      positions.scrollStart + (positions.scrollEnd - positions.scrollStart) * 0.2,
      positions.scrollStart + (positions.scrollEnd - positions.scrollStart) * 0.8,
      positions.scrollEnd
    ],
    [1, 0.7, 0.7, 1],
    { clamp: true }
  )

  // Scale effect for smoother transition
  const scale = useTransform(
    scrollY,
    [
      positions.scrollStart,
      positions.scrollStart + (positions.scrollEnd - positions.scrollStart) * 0.5,
      positions.scrollEnd
    ],
    [1, 0.95, 1],
    { clamp: true }
  )

  // Blur effect during transition
  const blur = useTransform(
    scrollY,
    [
      positions.scrollStart,
      positions.scrollStart + (positions.scrollEnd - positions.scrollStart) * 0.3,
      positions.scrollStart + (positions.scrollEnd - positions.scrollStart) * 0.7,
      positions.scrollEnd
    ],
    [0, 2, 2, 0],
    { clamp: true }
  )

  // Calculate the correct top position accounting for scroll (with easing)
  const top = useTransform(scrollY, (latest) => {
    const linearProgress = Math.min(
      1,
      Math.max(0, (latest - positions.scrollStart) / (positions.scrollEnd - positions.scrollStart))
    )
    // Apply easing to the progress
    const easedProgress = easingFn(linearProgress)
    const targetY = positions.heroY + (positions.aboutY - positions.heroY) * easedProgress
    return targetY - latest
  })

  // Convert blur to filter string
  const filter = useTransform(blur, (v) => `blur(${v}px)`)

  return (
    <motion.div
      className="fixed z-40 pointer-events-none"
      style={{
        left: x,
        top: top,
        width: width,
        height: height,
        scale,
      }}
    >
      <motion.img
        src="/profile.png"
        alt="Nisal Fonseka"
        className="w-full h-full object-contain transition-shadow duration-300"
        style={{
          borderRadius,
          opacity,
          filter,
        }}
      />
    </motion.div>
  )
}

export default ScrollingProfileImage
