import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { ScrollAnimation } from '../components/ScrollAnimation'

const FeaturedWork = () => {
  const tags = ['RAG', 'Multi-LLM', 'React', 'Express', 'PostgreSQL', 'Drizzle ORM']
  const sectionRef = useRef(null)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <section
      id="featured-work"
      ref={sectionRef}
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16 xl:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fadeUp" delay={0.1}>
          <div className="mb-12">
            <h2 className="text-sm font-medium text-neutral-500 tracking-wide uppercase mb-2">
              Featured Work
            </h2>
          </div>
        </ScrollAnimation>

        <motion.div
          ref={cardRef}
          className="border border-neutral-200 rounded-lg p-8 sm:p-12 transition-colors duration-300 relative overflow-hidden"
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.95 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          whileHover={{
            borderColor: '#000',
            boxShadow: '0 20px 40px -20px rgba(0,0,0,0.3)',
            y: -5
          }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-neutral-100/50 to-transparent pointer-events-none"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative z-10">
            <div>
              <motion.h3
                className="text-2xl sm:text-3xl font-semibold text-black mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                AI Chat Assistant Platform
              </motion.h3>
              <motion.p
                className="text-neutral-600 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                An enterprise-grade AI chatbot platform with document-based knowledge retrieval
                built for SLIIT Faculty of Computing research. Features multi-LLM integration
                (OpenAI, Anthropic, Grok), PDF-powered RAG pipeline, bot management system,
                role-based access control, and a comprehensive admin dashboard.
              </motion.p>
            </div>

            <div className="flex flex-col justify-center">
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 }}
              >
                {tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm font-medium rounded cursor-default"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: '#000',
                      color: '#fff',
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedWork
