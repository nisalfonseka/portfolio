import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft, Send, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Button } from '../components/ui/button'
import { ScrollAnimation, StaggerContainer, StaggerItem } from '../components/ScrollAnimation'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 3000)
    } catch (error) {
      console.error('Failed to send email:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 lg:px-16 xl:px-24 py-6">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors font-outfit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <section className="flex-1 py-32 sm:py-40 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <ScrollAnimation animation="fadeRight" delay={0.1}>
            <h2 className="text-sm font-medium text-neutral-500 tracking-widest uppercase flex items-center gap-3 font-space mb-4">
              <motion.span
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                *
              </motion.span>
              Get in Touch
            </h2>
          </ScrollAnimation>

          <StaggerContainer className="space-y-8" staggerDelay={0.15}>
            <StaggerItem animation="fadeUp">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-light font-playfair leading-tight">
                Let's work together
              </h1>
            </StaggerItem>

            <StaggerItem animation="fadeUp">
              <p className="text-lg text-neutral-400 leading-relaxed font-outfit max-w-2xl">
                Have a project in mind or just want to chat? Fill out the form below 
                and I'll get back to you as soon as possible.
              </p>
            </StaggerItem>

            {/* Animated divider */}
            <StaggerItem animation="reveal">
              <motion.div
                className="h-px bg-gradient-to-r from-neutral-700 via-white to-neutral-700"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </StaggerItem>

            {/* Contact Form */}
            <StaggerItem animation="fadeUp">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl text-white font-playfair mb-2">Message Sent!</h3>
                  <p className="text-neutral-400 font-outfit">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-neutral-400 font-outfit">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-neutral-900/50 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-white focus:ring-white/20 h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-neutral-400 font-outfit">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-neutral-900/50 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-white focus:ring-white/20 h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-neutral-400 font-outfit">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="bg-neutral-900/50 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-white focus:ring-white/20 h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-neutral-400 font-outfit">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={6}
                      className="bg-neutral-900/50 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-white focus:ring-white/20 resize-none"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-6 bg-white text-black hover:bg-neutral-200 font-outfit font-medium text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              )}
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </main>
  )
}

export default Contact
