// Résumé content, kept in sync with Nisal Fonseka's CV.

export const resume = {
  name: "Nisal Fonseka",
  title: "AI Application Engineer",
  location: "Malabe, Sri Lanka",
  email: "hello@nisalfonseka.com",
  phone: "+94 71 076 7697",
  links: [
    { label: "linkedin.com/in/nisalfonseka", href: "https://www.linkedin.com/in/nisalfonseka/" },
    { label: "github.com/nisalfonseka", href: "https://github.com/nisalfonseka" },
  ],
  summary:
    "Generative AI Engineer and final-year BSc (Hons) Information Technology undergraduate specialising in Software Engineering, with hands-on experience designing and developing production-grade AI applications, LLM-powered platforms and full-stack systems. Experienced in generative AI, RAG, AI agents, NLP applications, chatbot development and scalable backend architectures. Currently contributing to enterprise AI platforms at SLIIT while developing research-driven Sinhala language AI solutions and customer-facing AI products.",
  experience: [
    { role: "Software Engineer Intern — Gen AI Applications", company: "SLIIT", period: "Oct 2025 — Present" },
    { role: "Software Development Intern", company: "Sri Lanka Telecom", period: "Jan 2025 — Jul 2025" },
  ],
  projects: [
    {
      title: "SLIIT COEAI Chatbot",
      context: "SLIIT Internship",
      summary:
        "Acted as the solo developer, designing and developing an enterprise-level AI chat platform for research purposes, actively used by 300+ students across departments including Psychology, Computing and Business at SLIIT.",
      points: [
        "Supports conversational AI, document intelligence, voice interactions, AI personas and image generation.",
        "Developed production-grade RAG pipelines using PostgreSQL pgvector, vector embeddings, semantic search and document-based knowledge retrieval.",
        "Implemented AI memory systems including conversation summarisation, semantic user memory and long-term contextual retrieval.",
        "Built AI-powered voice interaction systems using the OpenAI Realtime API and WebSockets.",
        "Integrated multiple LLM providers including OpenAI, Anthropic Claude and xAI Grok with a prompt version management system.",
      ],
      technologies: "TypeScript, React, Node.js, Express.js, PostgreSQL, Drizzle ORM, pgvector, OpenAI API, Anthropic Claude API, xAI API, WebSockets, RAG",
    },
    {
      title: "SLIIT Academic Chatbot Platform",
      context: "SLIIT Internship",
      summary:
        "Independently developed an AI-powered academic chatbot platform planned for university-wide deployment across 2,000+ first- and second-year students at SLIIT.",
      points: [
        "Designed the platform architecture for module-specific AI assistants using RAG-based knowledge retrieval from academic resources.",
        "Implemented a multi-layer AI memory architecture including conversation memory, student semantic memory and knowledge-base retrieval for personalised learning.",
        "Built document ingestion pipelines supporting academic resources with automated text extraction, chunking and vector embedding generation.",
        "Developed scalable backend services and database architecture to support future expansion across faculties.",
      ],
      technologies: "React, TypeScript, Node.js, Express.js, PostgreSQL, Drizzle ORM, pgvector, OpenAI API, RAG, Vector Search, JWT Authentication",
    },
    {
      title: "SinAI — SinhalaJournalLLM",
      context: "Final Year Research Project · Group Leader",
      href: "https://sinai.onrender.com/",
      summary: "Led a research team developing SinAI, a Sinhala-focused AI writing assistant for journalism using a fine-tuned Sinhala LLM.",
      points: [
        "Designed and developed the Sinhala grammar correction component, focusing on spelling, grammar, punctuation and sentence structure correction.",
        "Worked with Llama-based language models and LoRA fine-tuning approaches to adapt language models for Sinhala-specific NLP tasks.",
        "Built a large-scale Sinhala language dataset by scraping and processing 700K+ newspaper articles from Sinhala news sources.",
        "Created a 36,000+ row grammar correction dataset across 18 Sinhala grammar categories through data cleaning, annotation and error pattern analysis.",
      ],
      technologies: "Python, FastAPI, React, PostgreSQL, Llama-3-8B, SinLlama, LoRA fine-tuning, Unsloth, TRL, PEFT, NLP, Large Language Models",
    },
    {
      title: "SamadhiRice.lk — AI-Powered E-commerce Platform",
      context: "Client project",
      href: "https://samadhirice.lk",
      summary:
        "Developed an AI-powered e-commerce platform for a Sri Lankan rice brand, with an intelligent customer assistant for product discovery and recommendations.",
      points: [
        "Built an AI-powered Rice Finder assistant using the OpenAI and Gemini APIs to provide product recommendations through contextual conversations based on live product catalogue data.",
        "Implemented a dynamic AI context injection system that connects product information, inventory details and blog content with chatbot responses for accurate customer assistance.",
      ],
      technologies: "Next.js, React, TypeScript, PostgreSQL, Prisma ORM, Supabase, OpenAI API, Google Gemini API, NextAuth.js, Tailwind CSS, GSAP, Redis, Resend",
    },
  ],
  education: [
    { institution: "Sri Lanka Institute of Information Technology (SLIIT)", qualification: "BSc (Hons) in Information Technology, specialising in Software Engineering", period: "Oct 2022 — Present" },
    { institution: "ESOFT Metro Campus", qualification: "Diploma in Information Technology (DiTEC)", period: "Jan 2019 — Apr 2019" },
    { institution: "Dharmaraja College, Kandy", qualification: "GCE Advanced Level", period: "May 2019 — Dec 2021" },
  ],
  skills: [
    ["Programming languages", "Java, JavaScript, TypeScript, Python, Kotlin, C#"],
    ["Frontend", "React, Next.js, HTML, CSS, SCSS, Tailwind CSS"],
    ["Backend", "Node.js, Express.js, FastAPI, PHP, Laravel, REST APIs, WebSockets"],
    ["Databases", "PostgreSQL, MySQL, MongoDB, Prisma ORM, Drizzle ORM, pgvector, Supabase"],
    ["AI tools", "Claude Code, GitHub Copilot, Replit AI, Cursor, Codex"],
    ["Testing", "Postman, Cypress, ZAP, Jest"],
    ["Version control", "Git, GitHub, Bitbucket"],
    ["Development tools", "Visual Studio, Android Studio, Eclipse"],
    ["Containerisation", "Docker"],
    ["Other tools", "Adobe Photoshop, Adobe Premiere Pro, Microsoft Office Suite"],
    ["Soft skills", "Problem-solving, team collaboration, effective communication"],
    ["Languages", "Sinhala, English"],
  ],
  certifications: ["Foundational C# with Microsoft", "SLIIT AI/ML Engineer — Stage 1"],
  references: [
    { name: "Prof. Nuwan Kodagoda", title: "Deputy Vice Chancellor", organisation: "SLIIT" },
    { name: "M. Giridaran", title: "Manager Software Development", organisation: "Sri Lanka Telecom" },
  ],
}
