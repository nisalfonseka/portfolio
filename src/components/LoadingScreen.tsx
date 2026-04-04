import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface LoadingScreenProps {
  onComplete: () => void
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)

  const words = ['Initializing', 'Processing', 'Learning', 'Optimizing']

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsFading(true)
            setTimeout(onComplete, 800)
          }, 300)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onComplete])

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 400)

    return () => clearInterval(wordInterval)
  }, [])

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isFading ? 0 : 1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => isFading && onComplete()}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-neutral-500/10 to-transparent blur-2xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ bottom: '20%', right: '15%' }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Main animated text */}
        <div className="mb-12 overflow-hidden">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-white tracking-tight">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="inline-block"
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
            </h1>
          </motion.div>
        </div>

        {/* Progress section */}
        <div className="w-72 sm:w-96">
          {/* Progress bar container */}
          <div className="relative">
            <div className="h-[2px] bg-neutral-800 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-neutral-400 via-white to-neutral-400"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>
            
            {/* Glowing dot at progress end */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              style={{ left: `${progress}%`, marginLeft: '-4px' }}
            />
          </div>

          {/* Progress info */}
          <div className="flex justify-between items-center mt-4">
            <motion.span
              className="text-neutral-500 text-xs font-space tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Loading
            </motion.span>
            <motion.span
              className="text-white text-sm font-space tabular-nums"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {progress.toString().padStart(3, '0')}
              <span className="text-neutral-500">%</span>
            </motion.span>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-neutral-800" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-neutral-800" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-neutral-800" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-neutral-800" />
    </motion.div>
  )
}

export default LoadingScreen
