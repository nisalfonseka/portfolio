import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { ScrollAnimation, StaggerContainer, StaggerItem } from '../components/ScrollAnimation'

interface ExperienceItem {
  title: string
  type: string
  period: string
  description: string
  company: string
  url: string
}

const experiences: ExperienceItem[] = [
  {
    title: 'Software Engineer Intern',
    type: 'Internship',
    period: 'Sep 2025 - Present',
    description:
      'Building an enterprise-grade AI chatbot platform with RAG (Retrieval-Augmented Generation) for a research project at SLIIT Faculty of Computing, under the supervision of the Vice Chancellor. Developed multi-LLM integration (OpenAI, Anthropic, Grok), document-based knowledge retrieval, and admin dashboard using React, Express, PostgreSQL, and Drizzle ORM.',
    company: 'SLIIT',
    url: '#',
  },
  {
    title: 'Software Engineer Intern',
    type: 'Internship',
    period: 'Jan 2025 - Jul 2025',
    description:
      'Contributed to software development projects and gained hands-on experience with enterprise-level systems and telecommunications infrastructure.',
    company: 'Sri Lanka Telecom',
    url: '#',
  },
  {
    title: 'Full-Stack Developer',
    type: 'Freelance',
    period: '2023 - 2025',
    description:
      'Developed and maintained web applications using modern technologies. Built full-stack solutions for various clients, handling both frontend and backend development.',
    company: 'Self-employed',
    url: '#',
  },
]

const ExperienceCard = ({ exp, index }: { exp: ExperienceItem; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-neutral-800 border-2 border-neutral-600 z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
      />

      {/* Glowing effect on hover */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-neutral-800/0 via-neutral-800/50 to-neutral-800/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-12 border-b border-neutral-800 last:border-0">
        {/* Left: Title & Meta */}
        <div className="lg:col-span-4">
          <motion.h3
            className="text-xl font-semibold text-white mb-2 font-syne"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.2 + 0.1 }}
          >
            {exp.title}
          </motion.h3>
          <motion.div
            className="flex items-center gap-3 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.2 + 0.2 }}
          >
            <span className="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-xs">
              {exp.type}
            </span>
            <span className="text-neutral-500">{exp.period}</span>
          </motion.div>
        </div>

        {/* Right: Description & Link */}
        <div className="lg:col-span-8">
          <motion.p
            className="text-neutral-400 leading-relaxed mb-4 font-outfit"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.2 + 0.3 }}
          >
            {exp.description}
          </motion.p>
          <motion.a
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-medium text-sm transition-all"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.2 + 0.4 }}
            whileHover={{ gap: '12px' }}
          >
            {exp.company}
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16 xl:px-24 bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <ScrollAnimation animation="fadeUp" delay={0.1}>
          <div className="mb-16">
            <h2 className="text-sm font-medium text-neutral-500 tracking-widest uppercase flex items-center gap-3 font-space">
              <span>*</span>
              My Experience
            </h2>
          </div>
        </ScrollAnimation>

        {/* Experience List with Timeline */}
        <div className="relative pl-8 border-l-2 border-neutral-800 space-y-12">
          {/* Animated timeline progress */}
          <motion.div
            className="absolute left-[-1px] top-0 w-[2px] bg-gradient-to-b from-white via-neutral-400 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.title} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
