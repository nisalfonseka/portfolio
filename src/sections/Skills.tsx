import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { ScrollAnimation } from '../components/ScrollAnimation'

const skills = [
  'LLM Integration',
  'RAG',
  'Prompt Engineering',
  'Machine Learning',
  'Model Training',
  'Random Forest',
  'SVM',
  'XGBoost',
  'Data Preprocessing',
  'Feature Engineering',
  'Scikit-learn',
  'TensorFlow',
  'Neural Networks',
  'Node.js',
  'Express',
  'WebSockets',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Docker',
  'Kubernetes',
  'Python',
  'TypeScript',
  'Git',
]

const SkillPill = ({ skill, index }: { skill: string; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className="px-4 py-3 bg-neutral-900 border border-neutral-800 rounded text-sm font-medium text-neutral-300 font-outfit cursor-default relative overflow-hidden group"
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Hover background animation */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ x: '-100%' }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        animate={isInView ? { x: '200%' } : { x: '-100%' }}
        transition={{
          duration: 1,
          delay: index * 0.05 + 0.5,
          ease: 'easeInOut'
        }}
      />

      <span className="relative z-10 group-hover:text-black transition-colors duration-300">
        {skill}
      </span>
    </motion.div>
  )
}

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef(null)
  const isGridInView = useInView(gridRef, { once: true, amount: 0.2 })

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16 xl:px-24 bg-background overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <ScrollAnimation animation="fadeUp" delay={0.1}>
          <div className="mb-16">
            <h2 className="text-sm font-medium text-neutral-500 tracking-widest uppercase flex items-center gap-3 font-space">
              <motion.span
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              >
                *
              </motion.span>
              My Skills
            </h2>
          </div>
        </ScrollAnimation>

        {/* Skills Grid */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={isGridInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {skills.map((skill, index) => (
            <SkillPill key={skill} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Decorative floating elements */}
        <div className="relative mt-16 h-20 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-neutral-700"
              style={{ left: `${20 + i * 15}%` }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
