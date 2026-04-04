import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { ScrollAnimation, StaggerContainer, StaggerItem } from '../components/ScrollAnimation'

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16 xl:px-24 bg-background overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Section Title */}
          <div className="lg:col-span-4">
            <ScrollAnimation animation="fadeRight" delay={0.1}>
              <h2 className="text-sm font-medium text-neutral-500 tracking-widest uppercase flex items-center gap-3 font-space">
                <motion.span
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                >
                  *
                </motion.span>
                About Me
              </h2>
            </ScrollAnimation>
          </div>

          {/* Content */}
          <StaggerContainer className="lg:col-span-8 space-y-8" staggerDelay={0.2}>
            <StaggerItem animation="fadeUp">
              <motion.p
                className="text-2xl sm:text-2xl lg:text-3xl text-white leading-relaxed font-light font-playfair"
                style={{ x }}
              >
                Hello, I'm Nisal, an AI Systems Developer based in Sri Lanka.
                Currently focused on building intelligent systems with LLMs.
              </motion.p>
            </StaggerItem>

            <StaggerItem animation="fadeUp">
              <p className="text-lg text-neutral-400 leading-relaxed font-outfit">
                My passion for AI and software engineering drives me to create
                practical, scalable solutions that solve real-world problems. I
                specialize in RAG pipelines, multi-LLM orchestration, and
                voice-enabled AI systems.
              </p>
            </StaggerItem>

            {/* Animated highlight line */}
            <StaggerItem animation="reveal">
              <motion.div
                className="h-px bg-gradient-to-r from-neutral-700 via-white to-neutral-700"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

export default About
