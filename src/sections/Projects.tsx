import { motion, useInView, AnimatePresence } from 'motion/react'
import { useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { ScrollAnimation } from '../components/ScrollAnimation'

interface Project {
  title: string
  description: string
  url: string
  tags: string[]
  previewImage?: string
}

const projects: Project[] = [
  {
    title: 'AI Chatbot',
    description:
      'Intelligent conversational interface powered by modern LLMs with context-aware responses.',
    url: 'https://chatty-ai-chatbot.netlify.app/',
    tags: ['React', 'OpenAI', 'Node.js'],
    previewImage: `https://api.microlink.io/?url=https://chatty-ai-chatbot.netlify.app/&screenshot=true&meta=false&embed=screenshot.url`,
  },
  {
    title: 'AI Image Generator',
    description:
      'Text-to-image generation tool with refined prompt engineering and stunning outputs.',
    url: 'https://ai-imagegenerater.netlify.app/',
    tags: ['Next.js', 'AI API', 'Tailwind'],
    previewImage: `https://api.microlink.io/?url=https://ai-imagegenerater.netlify.app/&screenshot=true&meta=false&embed=screenshot.url`,
  },
  {
    title: 'Royal Arena',
    description:
      'Interactive web platform with real-time user engagement and dynamic content.',
    url: 'https://royalarena.netlify.app/',
    tags: ['React', 'WebSockets', 'Express'],
    previewImage: `https://api.microlink.io/?url=https://royalarena.netlify.app/&screenshot=true&meta=false&embed=screenshot.url`,
  },
]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:border-neutral-600 transition-colors duration-300 relative overflow-visible"
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: 15 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      style={{ transformPerspective: 1000 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Preview Tooltip */}
      <AnimatePresence>
        {isHovered && project.previewImage && (
          <motion.div
            className="absolute z-50 pointer-events-none"
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y - 100,
            }}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-64 h-40 rounded-lg overflow-hidden border border-neutral-700 shadow-2xl bg-neutral-800">
              <img
                src={project.previewImage}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hover gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          boxShadow: '0 0 20px rgba(255,255,255,0.1), inset 0 0 20px rgba(255,255,255,0.05)'
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <motion.h3
            className="text-lg font-semibold text-white group-hover:text-neutral-200 transition-colors font-syne"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.15 + 0.2 }}
          >
            {project.title}
          </motion.h3>
          <motion.div
            whileHover={{ rotate: 45, scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
          </motion.div>
        </div>

        <motion.p
          className="text-neutral-400 text-sm leading-relaxed mb-4 font-outfit"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.15 + 0.3 }}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: index * 0.15 + 0.4 }}
        >
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded group-hover:bg-neutral-700 group-hover:text-neutral-300 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.15 + 0.4 + tagIndex * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.a>
  )
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef(null)
  const isFeaturedInView = useInView(featuredRef, { once: true, amount: 0.3 })

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16 xl:px-24 bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <ScrollAnimation animation="fadeUp" delay={0.1}>
          <div className="mb-16">
            <h2 className="text-sm font-medium text-neutral-500 tracking-widest uppercase flex items-center gap-3 font-space">
              <span>*</span>
              My Projects
            </h2>
          </div>
        </ScrollAnimation>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Featured Work */}
        <motion.div
          ref={featuredRef}
          className="mt-16"
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={isFeaturedInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.95 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 sm:p-12 relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '24px 24px']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <motion.span
                  className="text-neutral-500 text-sm tracking-widest uppercase font-space"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFeaturedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 }}
                >
                  Featured Work
                </motion.span>
                <motion.h3
                  className="text-2xl sm:text-3xl font-bold text-black mt-2 mb-4 font-playfair"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFeaturedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                >
                  AI Chat Assistant Platform
                </motion.h3>
                <motion.p
                  className="text-neutral-600 leading-relaxed font-outfit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFeaturedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                >
                  An enterprise-grade AI chatbot platform with document-based
                  knowledge retrieval built for SLIIT Faculty of Computing
                  research. Features multi-LLM integration (OpenAI, Anthropic,
                  Grok), PDF-powered RAG pipeline, and admin dashboard.
                </motion.p>
              </div>
              <motion.div
                className="flex flex-wrap gap-2 lg:justify-end"
                initial={{ opacity: 0 }}
                animate={isFeaturedInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                {['RAG', 'Multi-LLM', 'React', 'Express', 'PostgreSQL'].map(
                  (tag, index) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-2 bg-black/10 text-black text-sm rounded hover:bg-black hover:text-white transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isFeaturedInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  )
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
