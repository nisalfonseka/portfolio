import { motion, useInView } from 'motion/react'
import type { Transition, Variants } from 'motion/react'
import { useRef } from 'react'
import type { ReactNode } from 'react'

type AnimationType =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'scale'
  | 'scaleUp'
  | 'blur'
  | 'rotate'
  | 'slideRotate'
  | 'elastic'
  | 'bounce'
  | 'flip'
  | 'reveal'
  | 'maskUp'
  | 'glitch'

interface ScrollAnimationProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  threshold?: number
  stagger?: boolean
  staggerDelay?: number
  index?: number
}

const animations: Record<AnimationType, Variants> = {
  fadeUp: {
    hidden: {
      opacity: 0,
      y: 80,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)'
    }
  },
  fadeDown: {
    hidden: {
      opacity: 0,
      y: -80,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)'
    }
  },
  fadeLeft: {
    hidden: {
      opacity: 0,
      x: 100,
      filter: 'blur(8px)'
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)'
    }
  },
  fadeRight: {
    hidden: {
      opacity: 0,
      x: -100,
      filter: 'blur(8px)'
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)'
    }
  },
  scale: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)'
    }
  },
  scaleUp: {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0
    }
  },
  blur: {
    hidden: {
      opacity: 0,
      filter: 'blur(20px)',
      scale: 1.1
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1
    }
  },
  rotate: {
    hidden: {
      opacity: 0,
      rotate: -10,
      y: 50
    },
    visible: {
      opacity: 1,
      rotate: 0,
      y: 0
    }
  },
  slideRotate: {
    hidden: {
      opacity: 0,
      x: -100,
      rotate: -5
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0
    }
  },
  elastic: {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0
    }
  },
  bounce: {
    hidden: {
      opacity: 0,
      y: -100,
      scale: 0.3
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  },
  flip: {
    hidden: {
      opacity: 0,
      rotateX: 90,
      y: 50
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0
    }
  },
  reveal: {
    hidden: {
      opacity: 0,
      clipPath: 'inset(0 100% 0 0)'
    },
    visible: {
      opacity: 1,
      clipPath: 'inset(0 0% 0 0)'
    }
  },
  maskUp: {
    hidden: {
      opacity: 0,
      clipPath: 'inset(100% 0 0 0)'
    },
    visible: {
      opacity: 1,
      clipPath: 'inset(0% 0 0 0)'
    }
  },
  glitch: {
    hidden: {
      opacity: 0,
      x: -20,
      skewX: 10
    },
    visible: {
      opacity: 1,
      x: 0,
      skewX: 0
    }
  }
}

const getTransition = (animation: AnimationType, duration: number, delay: number): Transition => {
  const baseTransition: Transition = {
    duration,
    delay,
    ease: 'easeInOut'
  }

  switch (animation) {
    case 'elastic':
      return {
        type: 'spring',
        delay,
        stiffness: 100,
        damping: 10
      }
    case 'bounce':
      return {
        type: 'spring',
        delay,
        stiffness: 300,
        damping: 20
      }
    case 'flip':
      return {
        ...baseTransition,
        duration: duration * 1.2,
        ease: 'easeInOut'
      }
    case 'reveal':
    case 'maskUp':
      return {
        ...baseTransition,
        duration: duration * 1.5,
        ease: 'easeInOut'
      }
    case 'glitch':
      return {
        ...baseTransition,
        duration: duration * 0.6
      }
    default:
      return baseTransition
  }
}

export const ScrollAnimation = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.8,
  className = '',
  once = true,
  threshold = 0.2,
  stagger = false,
  staggerDelay = 0.1,
  index = 0
}: ScrollAnimationProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const totalDelay = stagger ? delay + (index * staggerDelay) : delay

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={animations[animation]}
      transition={getTransition(animation, duration, totalDelay)}
      style={{ willChange: 'transform, opacity, filter' }}
    >
      {children}
    </motion.div>
  )
}

// Staggered container for multiple children
interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
  threshold?: number
}

export const StaggerContainer = ({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true,
  threshold = 0.2
}: StaggerContainerProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}

// Item for use inside StaggerContainer
interface StaggerItemProps {
  children: ReactNode
  className?: string
  animation?: AnimationType
  duration?: number
}

const itemVariants: Record<AnimationType, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 }
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  fadeRight: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)' }
  },
  rotate: {
    hidden: { opacity: 0, rotate: -5, y: 20 },
    visible: { opacity: 1, rotate: 0, y: 0 }
  },
  slideRotate: {
    hidden: { opacity: 0, x: -30, rotate: -3 },
    visible: { opacity: 1, x: 0, rotate: 0 }
  },
  elastic: {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
  },
  bounce: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  },
  flip: {
    hidden: { opacity: 0, rotateX: 45 },
    visible: { opacity: 1, rotateX: 0 }
  },
  reveal: {
    hidden: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
    visible: { opacity: 1, clipPath: 'inset(0 0% 0 0)' }
  },
  maskUp: {
    hidden: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
    visible: { opacity: 1, clipPath: 'inset(0% 0 0 0)' }
  },
  glitch: {
    hidden: { opacity: 0, x: -10, skewX: 5 },
    visible: { opacity: 1, x: 0, skewX: 0 }
  }
}

export const StaggerItem = ({
  children,
  className = '',
  animation = 'fadeUp',
  duration = 0.6
}: StaggerItemProps) => {
  return (
    <motion.div
      className={className}
      variants={itemVariants[animation]}
      transition={{
        duration,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  )
}

// Parallax scroll effect
interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
}

export const Parallax = ({ children, speed = 0.5, className = '' }: ParallaxProps) => {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: 0
      }}
      whileInView={{
        y: [0, speed * -50]
      }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0
      }}
    >
      {children}
    </motion.div>
  )
}

// Text reveal animation for headings
interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  once?: boolean
}

export const TextReveal = ({ children, className = '', delay = 0, once = true }: TextRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.5 })

  const words = children.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.01, delay: delay + i * 0.1 }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: '100%', rotate: 5 }}
            animate={isInView ? { y: 0, rotate: 0 } : { y: '100%', rotate: 5 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.08,
              ease: 'easeOut'
            }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </span>
  )
}

// Magnetic hover effect
interface MagneticProps {
  children: ReactNode
  className?: string
  strength?: number
}

export const Magnetic = ({ children, className = '', strength = 0.3 }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0, 0)'
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.3s cubic-bezier(0.25, 0.4, 0.25, 1)' }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimation
