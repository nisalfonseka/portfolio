import { motion, useInView } from 'motion/react'
import { useRef, useState, useMemo } from 'react'
import CountUp from '../components/CountUp'
import { ScrollAnimation } from '../components/ScrollAnimation'

interface StatItem {
  value: number
  suffix: string
  label: string
}

const stats: StatItem[] = [
  { value: 10, suffix: 'K+', label: 'AI Tokens Used' },
  { value: 500, suffix: '+', label: 'Coffee Consumed' },
  { value: 1.2, suffix: 'K+', label: 'Code Commits' },
]

const StatCard = ({ stat, index }: { stat: StatItem; index: number }) => {
  const [key, setKey] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const handleMouseEnter = () => {
    setKey((prev) => prev + 1)
  }

  return (
    <motion.div
      ref={ref}
      className="text-center cursor-pointer relative"
      onMouseEnter={handleMouseEnter}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-neutral-800/50 to-transparent rounded-full blur-xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ delay: index * 0.15 + 0.3 }}
      />

      <motion.div
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 relative"
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(10px)' }}
        transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
      >
        <CountUp
          key={key}
          from={0}
          to={stat.value}
          duration={1}
          separator=","
        />
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
          transition={{ delay: index * 0.15 + 0.5 }}
        >
          {stat.suffix}
        </motion.span>
      </motion.div>
      <motion.div
        className="text-neutral-500 text-sm font-outfit"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.15 + 0.4 }}
      >
        {stat.label}
      </motion.div>
    </motion.div>
  )
}

const Stats = () => {
  const activityRef = useRef(null)
  const isActivityInView = useInView(activityRef, { once: true, amount: 0.3 })

  // Generate mock GitHub activity data with useMemo to prevent regeneration
  const activityData = useMemo(() => {
    const weeks = 20
    const days = 7
    const data = []
    for (let w = 0; w < weeks; w++) {
      const week = []
      for (let d = 0; d < days; d++) {
        week.push(Math.random())
      }
      data.push(week)
    }
    return data
  }, [])

  const getIntensityClass = (value: number) => {
    if (value < 0.2) return 'bg-neutral-800'
    if (value < 0.4) return 'bg-neutral-700'
    if (value < 0.6) return 'bg-neutral-500'
    if (value < 0.8) return 'bg-neutral-300'
    return 'bg-white'
  }

  return (
    <section
      id="stats"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16 xl:px-24 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* GitHub Activity */}
        <motion.div
          ref={activityRef}
          initial={{ opacity: 0, y: 60 }}
          animate={isActivityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.div
            className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 sm:p-8 relative overflow-hidden"
            whileHover={{ borderColor: '#555' }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
              initial={{ x: '-100%' }}
              animate={isActivityInView ? { x: '200%' } : { x: '-100%' }}
              transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
            />

            <div className="flex items-center justify-between mb-6">
              <motion.h3
                className="text-sm font-medium text-neutral-400 font-space"
                initial={{ opacity: 0, x: -20 }}
                animate={isActivityInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.2 }}
              >
                GitHub Activity
              </motion.h3>
              <motion.span
                className="text-xs text-neutral-600"
                initial={{ opacity: 0 }}
                animate={isActivityInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                (Work commits in another dimension)
              </motion.span>
            </div>

            {/* Activity Grid */}
            <div className="flex gap-1 overflow-x-auto pb-2">
              {activityData.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => (
                    <motion.div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-3 h-3 rounded-sm ${getIntensityClass(day)}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isActivityInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{
                        delay: 0.3 + weekIndex * 0.03 + dayIndex * 0.01,
                        duration: 0.2,
                        type: 'spring',
                        stiffness: 200
                      }}
                      whileHover={{
                        scale: 1.5,
                        transition: { duration: 0.1 }
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Legend */}
            <motion.div
              className="flex items-center justify-end gap-2 mt-4 text-xs text-neutral-500"
              initial={{ opacity: 0 }}
              animate={isActivityInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 }}
            >
              <span>Less</span>
              <div className="flex gap-1">
                {['bg-neutral-800', 'bg-neutral-700', 'bg-neutral-500', 'bg-neutral-300', 'bg-white'].map((bg, i) => (
                  <motion.div
                    key={bg}
                    className={`w-3 h-3 rounded-sm ${bg}`}
                    initial={{ scale: 0 }}
                    animate={isActivityInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1 + i * 0.1, type: 'spring' }}
                  />
                ))}
              </div>
              <span>More</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
