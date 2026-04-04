import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { GraduationCap } from 'lucide-react'
import { ScrollAnimation } from '../components/ScrollAnimation'

interface EducationItem {
  degree: string
  institution: string
  period: string
  type: string
}

const education: EducationItem[] = [
  {
    degree: 'BSc (Hons) in Information Technology (Software Engineering)',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: 'Oct 2022 – Present',
    type: 'Undergraduate',
  },
  {
    degree: 'GCE Advanced Level',
    institution: 'Dharmaraja College, Kandy',
    period: 'Completed 2021',
    type: 'Secondary',
  },
  {
    degree: 'Diploma in Information Technology (DiTEC)',
    institution: 'ESOFT Metro Campus',
    period: 'Jan 2019 – Apr 2019',
    type: 'Diploma',
  },
]

const EducationCard = ({ edu, index }: { edu: EducationItem; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-12 border-b border-neutral-800 last:border-0 relative"
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated line on hover */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-full"
          initial={{ scaleY: 0, originY: 0 }}
          whileHover={{ scaleY: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Left: Degree & Meta */}
        <div className="lg:col-span-4">
          <motion.h3
            className="text-xl font-semibold text-white mb-2 font-syne"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: index * 0.2 + 0.1 }}
          >
            {edu.degree}
          </motion.h3>
          <motion.div
            className="flex items-center gap-3 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.2 + 0.2 }}
          >
            <motion.span
              className="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-xs"
              whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
              transition={{ duration: 0.2 }}
            >
              {edu.type}
            </motion.span>
            <span className="text-neutral-500">{edu.period}</span>
          </motion.div>
        </div>

        {/* Right: Institution */}
        <motion.div
          className="lg:col-span-8 flex items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ delay: index * 0.2 + 0.3 }}
        >
          <div className="inline-flex items-center gap-2 text-neutral-400 font-medium text-sm font-outfit group-hover:text-white transition-colors">
            <motion.div
              animate={{
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3 + index
              }}
            >
              <GraduationCap className="w-4 h-4" />
            </motion.div>
            {edu.institution}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16 xl:px-24 bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <ScrollAnimation animation="fadeUp" delay={0.1}>
          <div className="mb-16">
            <h2 className="text-sm font-medium text-neutral-500 tracking-widest uppercase flex items-center gap-3 font-space">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                *
              </motion.span>
              Education
            </h2>
          </div>
        </ScrollAnimation>

        {/* Education List */}
        <div className="space-y-12">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
