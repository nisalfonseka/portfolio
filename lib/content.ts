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
      slug: "sliit-ai-assistant",
      number: "01",
      title: "SLIIT AI Assistant",
      summary: "Enterprise AI platform supporting multiple assistants across departments.",
      description:
        "A production-oriented assistant platform combining interchangeable language models, document-grounded retrieval, voice interaction and administrative controls.",
      category: "AI Systems",
      tags: ["Multi-LLM", "RAG", "Voice", "PostgreSQL"],
      metric: "300+",
      metricLabel: "students reached",
      role: "AI Engineer · Full-Stack Developer",
      timeline: "2025 — Present",
      status: "Active",
      problem:
        "Different university teams needed useful AI support without depending on answers drawn only from a model's general training data.",
      approach:
        "I designed a modular application where retrieval, model selection and the product interface remain separate, making the system easier to evaluate and extend.",
      decisions: [
        "Kept model providers interchangeable so the application is not coupled to one vendor.",
        "Used PostgreSQL with vector retrieval so structured product data and document search can live together.",
        "Built administrative controls around the AI layer instead of treating it as an isolated chat demo.",
      ],
      results: [
        "Supported a platform used by more than 300 students.",
        "Combined OpenAI, Anthropic and xAI model providers.",
        "Created one system for document retrieval, assistants, voice and administration.",
      ],
      image: "/images/work-ai-assistant.svg",
    },
    {
      slug: "sliit-academic-ai",
      number: "02",
      title: "SLIIT Academic AI",
      summary: "Module-aware learning support grounded in academic material.",
      description:
        "An education-focused AI product that structures retrieval around modules and learning context rather than exposing students to a generic chatbot.",
      category: "Education AI",
      tags: ["RAG", "Education", "Full-Stack", "Analytics"],
      metric: "RAG",
      metricLabel: "grounded learning",
      role: "Software Engineer",
      timeline: "2025 — Present",
      status: "Active",
      problem:
        "Academic assistants need to answer within the boundaries of the right subject material while remaining simple for students to use.",
      approach:
        "I structured the application around module context, source documents and usable learning flows, with the supporting authentication and administration required by a real platform.",
      decisions: [
        "Organized retrieval around modules so answers stay relevant to the learner's context.",
        "Made source management an administrative workflow rather than a developer-only task.",
        "Kept the interface direct so product complexity stays behind the experience.",
      ],
      results: [
        "A coherent full-stack platform rather than a standalone model prototype.",
        "Grounded responses tied to managed academic content.",
        "Administrative visibility into content and usage workflows.",
      ],
      image: "/images/work-academic.svg",
    },
    {
      slug: "sinai",
      number: "03",
      title: "SinAI",
      summary: "Style-controlled language research for Sinhala newspaper writing.",
      description:
        "A Sinhala NLP research project exploring model adaptation and evaluation for grammar correction within the language and stylistic patterns of Sri Lankan journalism.",
      category: "Research",
      tags: ["Sinhala LLM", "LoRA", "Unsloth", "Evaluation"],
      metric: "87.7%",
      metricLabel: "sentence accuracy",
      role: "Researcher · Grammar Correction",
      timeline: "2025 — 2026",
      status: "Research",
      problem:
        "Sinhala journalism has linguistic and stylistic characteristics that are poorly served by generic language tooling.",
      approach:
        "I focused on grammar correction using parameter-efficient fine-tuning, completion-only loss and evaluation grounded in real Sinhala news text.",
      decisions: [
        "Used LoRA to adapt the model efficiently while keeping the training footprint manageable.",
        "Used completion-only training so loss focuses on the expected corrected response.",
        "Evaluated sentence-level and real-news paragraph performance separately.",
      ],
      results: [
        "87.7% sentence-level grammar correction accuracy.",
        "75.0% accuracy on real-news paragraphs.",
        "Research grounded in a corpus of approximately 700,000 Sinhala news articles.",
      ],
      image: "/images/work-sinai.svg",
    },
    {
      slug: "samadhirice",
      number: "04",
      title: "SamadhiRice.lk",
      summary: "A complete digital commerce product for a Sri Lankan rice brand.",
      description:
        "A fast, search-ready commerce experience built around real product operations, customer journeys and maintainable full-stack foundations.",
      category: "Product Engineering",
      tags: ["Next.js", "E-commerce", "AI", "Product"],
      metric: "01",
      metricLabel: "end-to-end product",
      role: "Full-Stack Developer",
      timeline: "2025",
      status: "Live product",
      problem:
        "The product needed a credible digital storefront and operational system rather than a brochure website disconnected from the business.",
      approach:
        "I treated storefront, product data, search visibility and operational reliability as one product surface.",
      decisions: [
        "Used Next.js to combine fast public pages with application workflows.",
        "Designed around real product information and purchasing intent.",
        "Kept performance and search fundamentals part of the implementation.",
      ],
      results: [
        "Delivered a complete commerce-facing product experience.",
        "Connected public presentation with the underlying operational model.",
        "Created a maintainable base for continued content and product growth.",
      ],
      image: "/images/work-samadhi.svg",
      externalUrl: "https://samadhirice.lk",
    },
    {
      slug: "cravely",
      number: "05",
      title: "Cravely",
      summary: "A food-delivery platform designed around independently deployable services.",
      description:
        "A full-stack product exploring microservice boundaries, containerized deployment and the operational concerns behind a modern delivery platform.",
      category: "Distributed Systems",
      tags: ["Microservices", "Docker", "Kubernetes", "Full-Stack"],
      metric: "05",
      metricLabel: "service domains",
      role: "Full-Stack Developer",
      timeline: "2025",
      status: "Completed",
      problem:
        "A delivery workflow spans users, restaurants, orders, payments and fulfilment, each with different responsibilities and scaling needs.",
      approach:
        "I separated the system into clear service domains and packaged the application for repeatable container-based environments.",
      decisions: [
        "Defined service boundaries around business capabilities.",
        "Used containers to make environments reproducible.",
        "Designed frontend flows around the state transitions of a real order lifecycle.",
      ],
      results: [
        "A complete multi-service application architecture.",
        "Repeatable local and orchestrated deployment workflows.",
        "Practical experience with distributed application trade-offs.",
      ],
      image: "/images/work-cravely.svg",
    },
  ],
  achievements: [
    {
      id: "sinai-research",
      title: "Sinhala language research",
      year: "2026",
      category: "Research milestone",
      description:
        "Grammar-correction research for SinAI reached 87.7% sentence-level accuracy and 75.0% on real-news paragraphs.",
      image: "/images/achievement-research.svg",
      imageAlt: "Abstract editorial graphic representing Sinhala language model research",
    },
    {
      id: "student-reach",
      title: "300+ student reach",
      year: "2025",
      category: "Product milestone",
      description:
        "An AI platform moved beyond prototype status to support learning workflows for more than 300 students.",
      image: "/images/achievement-students.svg",
      imageAlt: "Abstract grid graphic representing a growing community of students",
    },
    {
      id: "sliit-engineering",
      title: "AI engineering at SLIIT",
      year: "2025 — Present",
      category: "Professional milestone",
      description:
        "Engineering production-oriented AI systems across retrieval, multiple models, voice and full-stack product development.",
      image: "/images/achievement-engineering.svg",
      imageAlt: "Abstract systems diagram representing AI engineering work",
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
    role: "Software Engineer Intern",
    company: "SLIIT Faculty of Computing",
    period: "Sep 2025 — Present",
    description: "Building AI-powered software across multi-model orchestration, retrieval, voice, administration and full-stack product engineering.",
    contributions: ["Multi-LLM architecture", "RAG pipelines", "Full-stack AI applications", "Voice and administration workflows"],
  },
  {
    role: "Software Engineer Intern",
    company: "Sri Lanka Telecom",
    period: "Jan 2025 — Jul 2025",
    description: "Contributed to software work in an enterprise telecommunications environment and gained experience with operational systems.",
    contributions: ["Enterprise software exposure", "Team delivery", "Operational systems"],
  },
  {
    role: "Full-Stack Developer",
    company: "Independent",
    period: "2023 — 2025",
    description: "Designed and delivered web applications across frontend, backend and deployment for varied product needs.",
    contributions: ["Product implementation", "Frontend and backend", "Deployment and maintenance"],
  },
]
