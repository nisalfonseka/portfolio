export type Project = {
  slug: string
  number: string
  title: string
  summary: string
  description: string
  category: string
  tags: string[]
  metric: string
  metricLabel: string
  role: string
  timeline: string
  status: string
  problem: string
  approach: string
  decisions: string[]
  results: string[]
  image: string
  externalUrl?: string
  repoUrl?: string
}

export type Achievement = {
  id: string
  title: string
  year: string
  category: string
  description: string
  image: string
  imageAlt: string
}

export type SiteContent = {
  projects: Project[]
  achievements: Achievement[]
}

export type Inquiry = {
  id: string
  name: string
  email: string
  company: string
  service: string
  timeline: string
  budget: string
  message: string
  createdAt: string
}

export const defaultContent: SiteContent = {
  projects: [
    {
      slug: "sliit-coeai-chatbot",
      number: "01",
      title: "SLIIT COEAI Chatbot",
      summary: "Enterprise AI chat platform used by 300+ students across Psychology, Computing and Business at SLIIT.",
      description:
        "An enterprise-level AI chat platform developed independently for research use at SLIIT, combining conversational AI, document intelligence, voice interaction, AI personas and image generation.",
      category: "Enterprise AI",
      tags: ["RAG", "Multi-LLM", "Voice AI", "pgvector"],
      metric: "300+",
      metricLabel: "active student users",
      role: "Solo Developer · Gen AI Applications Intern",
      timeline: "Oct 2025 — Present",
      status: "Active at SLIIT",
      problem:
        "Students and researchers across several departments needed one capable AI workspace that could reason over their documents, maintain useful context and support more than text-only interaction.",
      approach:
        "I designed and built the complete platform around production-grade retrieval, interchangeable model providers, layered memory and real-time voice, while keeping prompts and assistant behavior manageable as the system evolved.",
      decisions: [
        "Built RAG pipelines with PostgreSQL, pgvector, embeddings and semantic document retrieval.",
        "Implemented conversation summarization, semantic user memory and long-term contextual retrieval.",
        "Integrated OpenAI, Anthropic Claude and xAI Grok behind a prompt-version management system.",
        "Used the OpenAI Realtime API and WebSockets for live voice interaction.",
      ],
      results: [
        "Actively used by more than 300 students across Psychology, Computing and Business.",
        "Delivered document intelligence, AI personas, image generation and voice in one platform.",
        "Created a production-oriented multi-provider system instead of a single-model prototype.",
      ],
      image: "/images/work-ai-assistant.svg",
    },
    {
      slug: "sliit-academic-chatbot-platform",
      number: "02",
      title: "SLIIT Academic Chatbot Platform",
      summary: "Module-specific academic assistants designed for a planned university-wide rollout to 2,000+ students.",
      description:
        "An independently developed academic AI platform that grounds each assistant in module resources and combines document ingestion, vector retrieval and student memory for personalized learning support.",
      category: "Academic AI",
      tags: ["RAG", "Vector Search", "AI Memory", "PostgreSQL"],
      metric: "2,000+",
      metricLabel: "planned student rollout",
      role: "Solo Developer · Gen AI Applications Intern",
      timeline: "2025 — Present",
      status: "Planned university rollout",
      problem:
        "A university-wide assistant must keep answers within the correct module material, personalize support without losing context and scale beyond a small pilot group.",
      approach:
        "I designed module-specific assistants backed by automated document extraction, chunking, embeddings and vector search, then added separate conversation, semantic student and knowledge-base memory layers.",
      decisions: [
        "Separated module knowledge so retrieval remains relevant to each learner's academic context.",
        "Automated resource ingestion from text extraction through chunking and embedding generation.",
        "Designed scalable backend services and database architecture for expansion across faculties.",
      ],
      results: [
        "Platform architecture prepared for a planned 2,000+ first- and second-year student rollout.",
        "Personalized learning context across conversation, student memory and module knowledge.",
        "A reusable ingestion pipeline for academic resources and future faculty expansion.",
      ],
      image: "/images/work-academic.svg",
    },
    {
      slug: "sinai",
      number: "03",
      title: "SinAI — SinhalaJournalLLM",
      summary: "Sinhala-focused AI writing research built from 700K+ news articles and a 36,000+ row grammar dataset.",
      description:
        "A final-year research project developing a Sinhala-focused AI writing assistant for journalism using a fine-tuned language model, with my work centered on grammar correction, data engineering and research leadership.",
      category: "Sinhala NLP Research",
      tags: ["SinLlama", "LoRA", "Unsloth", "NLP"],
      metric: "36,000+",
      metricLabel: "grammar dataset rows",
      role: "Group Leader · Grammar Correction Researcher",
      timeline: "2025 — 2026",
      status: "Final-year research",
      problem:
        "Sinhala journalism lacks mature language tools that can reliably correct spelling, grammar, punctuation and sentence structure while respecting real editorial language.",
      approach:
        "I led the research team and developed the grammar-correction component, using Llama-based models, LoRA fine-tuning and Sinhala-specific datasets created from large-scale news collection and error analysis.",
      decisions: [
        "Scraped and processed more than 700,000 Sinhala newspaper articles for language-model research.",
        "Created a 36,000+ row correction dataset spanning 18 Sinhala grammar categories.",
        "Used LoRA, Unsloth, TRL and PEFT to adapt Llama-based models efficiently.",
        "Evaluated controlled sentence examples separately from real-news paragraphs.",
      ],
      results: [
        "87.7% sentence-level grammar correction accuracy.",
        "75.0% accuracy on real-news paragraphs.",
        "A 700K+ article Sinhala news corpus and a 36,000+ row dataset across 18 grammar categories.",
      ],
      image: "/images/work-sinai.svg",
    },
    {
      slug: "samadhirice",
      number: "04",
      title: "SamadhiRice.lk",
      summary: "AI-powered e-commerce for a Sri Lankan rice brand with a live-catalog product discovery assistant.",
      description:
        "A full e-commerce platform with an intelligent Rice Finder that recommends products through contextual conversations grounded in live catalog, inventory and blog data.",
      category: "AI-Powered Commerce",
      tags: ["Next.js", "OpenAI", "Gemini", "PostgreSQL"],
      metric: "Live",
      metricLabel: "AI commerce platform",
      role: "Full-Stack Developer",
      timeline: "2025",
      status: "Live product",
      problem:
        "Customers needed a clearer way to discover and compare rice products while the brand needed an e-commerce platform connected to real catalog and inventory information.",
      approach:
        "I built the commerce platform and connected OpenAI and Gemini-powered assistance to dynamic product, inventory and editorial context so recommendations remain relevant to the live store.",
      decisions: [
        "Injected current catalog, inventory and blog context into AI conversations.",
        "Used contextual dialogue to guide product discovery instead of a static recommendation form.",
        "Built the storefront, database, authentication, caching and AI features as one maintainable product.",
      ],
      results: [
        "Launched a complete e-commerce experience for a Sri Lankan rice brand.",
        "Delivered an AI Rice Finder grounded in live business data.",
        "Connected product discovery, recommendations and commerce workflows in one system.",
      ],
      image: "/images/work-samadhi.svg",
      externalUrl: "https://samadhirice.lk",
    },
  ],
  achievements: [
    {
      id: "coeai-student-adoption",
      title: "300+ active student users",
      year: "2025 — Present",
      category: "Product adoption",
      description:
        "The SLIIT COEAI Chatbot is actively used by students across Psychology, Computing and Business.",
      image: "/images/achievement-students.svg",
      imageAlt: "Abstract grid representing student adoption across SLIIT departments",
    },
    {
      id: "academic-platform-scale",
      title: "Designed for 2,000+ students",
      year: "2025 — Present",
      category: "Academic AI architecture",
      description:
        "The Academic Chatbot Platform was architected for a planned university-wide rollout to first- and second-year students.",
      image: "/images/achievement-engineering.svg",
      imageAlt: "Abstract systems graphic representing a scalable academic AI platform",
    },
    {
      id: "sinai-language-corpus",
      title: "700K+ Sinhala news articles",
      year: "2025 — 2026",
      category: "Research data milestone",
      description:
        "Built a large-scale Sinhala language corpus by scraping and processing newspaper content from Sinhala news sources.",
      image: "/images/achievement-research.svg",
      imageAlt: "Abstract editorial graphic representing a large Sinhala news corpus",
    },
    {
      id: "sinai-grammar-dataset",
      title: "36,000+ grammar correction rows",
      year: "2025 — 2026",
      category: "Dataset development",
      description:
        "Created a Sinhala grammar correction dataset spanning 18 categories through cleaning, annotation and error-pattern analysis.",
      image: "/images/achievement-research.svg",
      imageAlt: "Abstract research graphic representing an annotated Sinhala grammar dataset",
    },
    {
      id: "sinai-accuracy",
      title: "87.7% sentence-level accuracy",
      year: "2026",
      category: "Research result",
      description:
        "SinAI grammar correction reached 87.7% on sentence-level evaluation and 75.0% on real-news paragraphs.",
      image: "/images/achievement-engineering.svg",
      imageAlt: "Abstract evaluation graphic representing SinAI grammar correction results",
    },
  ],
}

export const services = [
  {
    slug: "ai-engineering",
    title: "AI Engineering",
    summary: "Reliable AI features designed as part of a complete software system.",
    description:
      "I design and build AI applications using modern language models, retrieval, evaluation and orchestration—connected to the product, data and controls that make them genuinely useful.",
    deliverables: ["LLM application architecture", "Model and provider integration", "Evaluation workflows", "AI features for existing products"],
    process: ["Define the job the AI must do", "Choose an architecture that can be evaluated", "Build the product and AI layers together", "Test behavior, reliability and cost"],
  },
  {
    slug: "rag-ai-chatbot-development",
    title: "RAG & AI Assistants",
    summary: "Domain-specific assistants grounded in your own knowledge.",
    description:
      "I build assistants that retrieve from documents, knowledge bases and business data so responses can be relevant, traceable and managed over time.",
    deliverables: ["Document ingestion", "Vector retrieval", "Grounded chat experiences", "Source and access management"],
    process: ["Audit the knowledge sources", "Design chunking and retrieval", "Build the assistant experience", "Evaluate answer quality and failure cases"],
  },
  {
    slug: "ai-product-development",
    title: "AI Product Development",
    summary: "From an AI idea to a usable, production-oriented product.",
    description:
      "I combine product thinking, interface design, full-stack engineering and AI integration to turn a promising concept into software people can actually use.",
    deliverables: ["Product definition", "UX and interface implementation", "Backend and AI integration", "Deployment and handover"],
    process: ["Clarify users and outcomes", "Prototype the riskiest workflow", "Build in useful increments", "Launch with measurement and documentation"],
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    summary: "End-to-end web applications with strong product foundations.",
    description:
      "I build modern applications across frontend, backend, database, authentication and deployment, with an emphasis on maintainability and a calm user experience.",
    deliverables: ["Responsive web interfaces", "APIs and application logic", "Database and authentication", "Deployment-ready implementation"],
    process: ["Map the core workflows", "Choose the simplest sound architecture", "Build and review incrementally", "Validate, document and launch"],
  },
]

export const notes = [
  {
    slug: "multi-llm-without-lock-in",
    title: "Designing multi-LLM products without vendor lock-in",
    date: "06 Oct 2026",
    readTime: "6 min",
    intro: "The model should be a replaceable capability inside the product—not the architecture of the entire product.",
    sections: [
      ["Start with a stable contract", "A provider adapter should translate product-level requests into each vendor's format. The rest of the system should deal in capabilities, context and responses rather than provider-specific SDK objects."],
      ["Route for a reason", "Model routing is useful when it follows an explicit requirement: capability, latency, cost, context size or availability. Routing without evaluation only makes behavior harder to understand."],
      ["Observe every boundary", "Record provider, latency, usage, retrieval context and failure mode. Interchangeability is only valuable when the team can see how each option behaves under real workloads."],
    ],
  },
  {
    slug: "rag-with-postgres-pgvector",
    title: "Keeping RAG and product data together with PostgreSQL",
    date: "21 Sep 2026",
    readTime: "7 min",
    intro: "For many products, pgvector is compelling because retrieval can live beside the structured data the application already depends on.",
    sections: [
      ["Reduce infrastructure before increasing it", "A separate vector system can be valuable at scale, but it also creates another security, deployment and observability boundary. PostgreSQL is often a pragmatic starting point."],
      ["Retrieval is more than similarity", "Useful retrieval combines semantic search with ownership, module, organization and freshness filters. Relational data makes those constraints explicit."],
      ["Measure the full answer path", "Chunk quality, filters, ranking, prompt context and model behavior all affect the result. Evaluate retrieval and generation separately before tuning either one."],
    ],
  },
  {
    slug: "evaluating-sinhala-grammar-correction",
    title: "Evaluating Sinhala grammar correction beyond one score",
    date: "11 Aug 2026",
    readTime: "5 min",
    intro: "A sentence benchmark and a real newspaper paragraph test reveal different failure modes—and both matter.",
    sections: [
      ["Separate controlled and natural text", "Sentence-level examples isolate correction behavior. Real-news paragraphs introduce style, context and error combinations that make the task closer to editorial use."],
      ["Explain what accuracy means", "A metric needs its unit, dataset and matching rule. Without those, a percentage is impressive-looking but difficult to trust or reproduce."],
      ["Read the misses", "Error analysis is where the next experiment comes from. Grouping missed cases by grammar pattern, ambiguity and style gives the score an engineering purpose."],
    ],
  },
]

export const experience = [
  {
    role: "Software Engineer Intern — Gen AI Applications",
    company: "SLIIT",
    period: "Oct 2025 — Present",
    description: "Designing and independently developing enterprise AI platforms across multi-model orchestration, retrieval, memory, voice and full-stack product engineering.",
    contributions: ["SLIIT COEAI Chatbot", "Academic Chatbot Platform", "RAG and AI memory", "Realtime voice systems"],
  },
  {
    role: "Software Engineer Intern",
    company: "Sri Lanka Telecom",
    period: "Jan 2025 — Jul 2025",
    description: "Contributed to software work in an enterprise telecommunications environment and gained experience with operational systems.",
    contributions: ["Enterprise software exposure", "Team delivery", "Operational systems"],
  },
]
