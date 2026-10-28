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
  /** Shown in the home page "Selected work" section. Older content without this flag is treated as shown. */
  showOnHome?: boolean
}

export type GalleryImage = {
  image: string
  alt: string
}

export type Achievement = {
  id: string
  title: string
  year: string
  category: string
  description: string
  image: string
  imageAlt: string
  /** Optional event photos. Achievements with a gallery are shown as featured stories. */
  gallery?: GalleryImage[]
  location?: string
  link?: string
}

export type Publication = {
  id: string
  title: string
  authors: string
  venue: string
  year: string
  type: string
  status: string
  abstract: string
  url?: string
  pdf?: string
  doi?: string
}

export type SiteContent = {
  projects: Project[]
  achievements: Achievement[]
  publications: Publication[]
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

export type ServiceFaq = {
  question: string
  answer: string
}

export type ServiceDetail = {
  slug: string
  title: string
  seoTitle: string
  metaDescription: string
  heading: string
  summary: string
  description: string
  bestFor: string
  startingPoint: string
  delivery: string
  problems: { title: string; description: string }[]
  outcomes: string[]
  deliverables: string[]
  process: string[]
  faqs: ServiceFaq[]
  relatedServices: string[]
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
      timeline: "Oct 2025 - Present",
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
      showOnHome: true,
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
      timeline: "2025 - Present",
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
      showOnHome: true,
      image: "/images/work-academic.svg",
    },
    {
      slug: "sinai",
      number: "03",
      title: "SinAI - SinhalaJournalLLM",
      summary: "Sinhala-focused AI writing research built from 700K+ news articles and a 36,000+ row grammar dataset.",
      description:
        "A research project developing a Sinhala-focused AI writing assistant for journalism using a fine-tuned language model, with my work centered on grammar correction, data engineering and research leadership.",
      category: "Sinhala NLP Research",
      tags: ["SinLlama", "LoRA", "Unsloth", "NLP"],
      metric: "36,000+",
      metricLabel: "grammar dataset rows",
      role: "Group Leader · Grammar Correction Researcher",
      timeline: "2025 - 2026",
      status: "Language AI research",
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
      showOnHome: true,
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
      showOnHome: true,
      image: "/images/work-samadhi.svg",
      externalUrl: "https://samadhirice.lk",
    },
  ],
  achievements: [
    {
      id: "ai-expo-codeblast-hackathon-2026",
      title: "SLTMobitel CodeBlast AI Hackathon",
      year: "Sep 2026",
      category: "Hackathon · University AI Innovation",
      description:
        "Pitched a Sinhala journalism AI system to the judging panel at the National AI Expo during Sri Lanka AI Week 2026: one platform that takes a raw article through understanding, grammar and spelling correction, summarisation, headline generation and style rewriting to publish-ready content.",
      image: "/images/achievements/ai-expo-2026/pitch-stage.jpg",
      imageAlt: "Nisal Fonseka's team presenting their Sinhala journalism AI system on stage at the AI Hackathon, Sri Lanka AI Week 2026",
      location: "SLT Auditorium, Colombo",
      gallery: [
        { image: "/images/achievements/ai-expo-2026/team.jpg", alt: "The four-member team in front of the SLTMobitel CodeBlast Hackathon Challenge 2026 backdrop" },
        { image: "/images/achievements/ai-expo-2026/pitch-team.jpg", alt: "Team presenting a journalism-focused AI system that helps prepare news content faster" },
        { image: "/images/achievements/ai-expo-2026/judging-panel.jpg", alt: "Team answering questions from the judging panel at the National AI Expo" },
        { image: "/images/achievements/ai-expo-2026/certificates.jpg", alt: "Team receiving certificates on stage at the CodeBlast Hackathon Challenge" },
        { image: "/images/achievements/ai-expo-2026/judging-qa.jpg", alt: "Team member speaking to judges during the AI Hackathon question round" },
        { image: "/images/achievements/ai-expo-2026/check-in.jpg", alt: "Team checking in with organisers at the National AI Expo hackathon venue" },
        { image: "/images/achievements/ai-expo-2026/expo-hall.jpg", alt: "Main hall of the National AI Expo with stage lighting and a large audience" },
      ],
    },
    {
      id: "coeai-student-adoption",
      title: "300+ active student users",
      year: "2025 - Present",
      category: "Product adoption",
      description:
        "The SLIIT COEAI Chatbot is actively used by students across Psychology, Computing and Business.",
      image: "/images/achievement-students.svg",
      imageAlt: "Abstract grid representing student adoption across SLIIT departments",
    },
    {
      id: "academic-platform-scale",
      title: "Designed for 2,000+ students",
      year: "2025 - Present",
      category: "Academic AI architecture",
      description:
        "The Academic Chatbot Platform was architected for a planned university-wide rollout to first- and second-year students.",
      image: "/images/achievement-engineering.svg",
      imageAlt: "Abstract systems graphic representing a scalable academic AI platform",
    },
    {
      id: "sinai-language-corpus",
      title: "700K+ Sinhala news articles",
      year: "2025 - 2026",
      category: "Research data milestone",
      description:
        "Built a large-scale Sinhala language corpus by scraping and processing newspaper content from Sinhala news sources.",
      image: "/images/achievement-research.svg",
      imageAlt: "Abstract editorial graphic representing a large Sinhala news corpus",
    },
    {
      id: "sinai-grammar-dataset",
      title: "36,000+ grammar correction rows",
      year: "2025 - 2026",
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
  publications: [],
}

export const services: ServiceDetail[] = [
  {
    slug: "ai-development-sri-lanka",
    title: "Custom AI Development",
    seoTitle: "Freelance AI Developer in Colombo, Sri Lanka",
    metaDescription: "Freelance custom AI development for businesses in Colombo and across Sri Lanka, including useful AI applications, integrations and reliable production systems.",
    heading: "Custom AI development for businesses in Colombo and Sri Lanka",
    summary: "Custom AI applications built around a clear business need.",
    description:
      "As a freelance AI developer, I design and build custom software that helps people complete real work. This can include a new application, an AI feature for an existing product or a system connected to your business data.",
    bestFor: "Businesses with a clear problem that cannot be solved well by a ready-made AI tool.",
    startingPoint: "A business problem, target user or early prototype that needs to become a dependable application.",
    delivery: "Planning, design, development, testing, deployment support and clear documentation.",
    problems: [
      { title: "Ready-made tools do not fit", description: "Build around your users, data and workflow instead of changing the business to suit a generic tool." },
      { title: "The current prototype is unreliable", description: "Turn an early experiment into a complete system with testing, safeguards and clear failure handling." },
      { title: "The AI is separate from the real work", description: "Connect the AI to the application, information and actions people already use." },
    ],
    outcomes: ["A working AI application built for a defined use case", "A simple experience for customers or staff", "Testing and safeguards suited to the task", "A documented system that can be maintained and improved"],
    deliverables: ["Solution plan and architecture", "AI application development", "Data and system connections", "Testing and deployment support"],
    process: ["Define the problem and users", "Choose the simplest useful solution", "Build the application in clear stages", "Test quality, safety and cost", "Deploy and document the system"],
    faqs: [
      { question: "What kind of custom AI software can you build?", answer: "Examples include document tools, knowledge assistants, customer-support systems, internal copilots, AI agents and new AI-enabled web products." },
      { question: "Do we need to train our own AI model?", answer: "Usually not. Many projects can use an existing model connected to the right business information, rules and user experience." },
      { question: "Can we hire you as a freelance AI developer?", answer: "Yes. I work directly with Sri Lankan businesses and remote teams on focused AI development projects, from planning and implementation to deployment and handover." },
      { question: "Can you improve an AI system we already have?", answer: "Yes. I can review the current product, identify the main quality or reliability problems and improve the parts that matter most." },
    ],
    relatedServices: ["ai-consulting-sri-lanka", "ai-integration-sri-lanka", "ai-product-development-sri-lanka"],
  },
  {
    slug: "rag-ai-assistant-development-sri-lanka",
    title: "RAG & Knowledge Assistants",
    seoTitle: "RAG AI Assistant Development in Sri Lanka",
    metaDescription: "RAG and knowledge-assistant development for businesses in Colombo and Sri Lanka, using approved documents and business information to provide useful answers.",
    heading: "RAG assistants that answer from your business knowledge",
    summary: "AI assistants that use your approved documents and information.",
    description:
      "I build AI assistants that search your approved documents and business information before answering. This helps staff or customers find useful information without reading through many files.",
    bestFor: "Organizations with useful knowledge spread across documents, policies, product information or internal systems.",
    startingPoint: "A defined audience and a set of trusted information the assistant should use.",
    delivery: "Knowledge ingestion, retrieval, assistant experience, access controls, evaluation and deployment.",
    problems: [
      { title: "People cannot find the right information", description: "Make policies, manuals, product details or internal knowledge searchable through a conversational interface." },
      { title: "A generic chatbot gives generic answers", description: "Ground responses in approved sources and show citations so users can verify important information." },
      { title: "Knowledge changes over time", description: "Create a manageable ingestion and update process instead of hard-coding information into prompts." },
    ],
    outcomes: ["Faster access to relevant organizational knowledge", "Answers grounded in controlled sources with traceability", "Access rules aligned with users and data", "A repeatable way to update and evaluate the knowledge base"],
    deliverables: ["Document ingestion", "Vector retrieval", "Grounded chat experiences", "Source and access management"],
    process: ["Audit the knowledge sources", "Design chunking and retrieval", "Build the assistant experience", "Evaluate answer quality and failure cases"],
    faqs: [
      { question: "What is a RAG chatbot?", answer: "A retrieval-augmented generation chatbot searches approved information first and gives the relevant context to a language model before it answers. This makes the response more specific to your organization than a generic chatbot." },
      { question: "Can the assistant cite its sources?", answer: "Yes. The interface can link answers to the documents or records used, subject to the source format and your access-control requirements." },
      { question: "Can different users see different information?", answer: "Yes. Retrieval can apply organization, department, role or user-level filters so the assistant only uses content each person is allowed to access." },
    ],
    relatedServices: ["ai-chatbot-development-sri-lanka", "ai-integration-sri-lanka", "document-ai-solutions-sri-lanka"],
  },
  {
    slug: "ai-product-development-sri-lanka",
    title: "AI Product Development",
    seoTitle: "Freelance AI Product Developer in Sri Lanka",
    metaDescription: "Freelance AI product and MVP development for founders and businesses in Colombo and Sri Lanka, from a focused idea to usable software and launch support.",
    heading: "Turn an AI idea into a product people can use",
    summary: "From an AI idea to a usable, production-oriented product.",
    description:
      "I combine product thinking, interface design, full-stack engineering and AI integration to turn a promising concept into software people can actually use.",
    bestFor: "Founders and teams creating a new AI-enabled product, customer experience or internal platform.",
    startingPoint: "A business problem, target user and an idea that needs to be validated through a focused product build.",
    delivery: "Product definition, prototype or MVP, full-stack implementation, AI evaluation and launch support.",
    problems: [
      { title: "The idea is broad but the first product is unclear", description: "Reduce the concept to a valuable workflow that can be built, tested and explained to real users." },
      { title: "The AI demo lacks a complete experience", description: "Build the interface, backend, data model, authentication and operational controls around the model." },
      { title: "The team needs to validate before scaling", description: "Ship a focused version that tests the riskiest assumptions before committing to a larger platform." },
    ],
    outcomes: ["A clear product scope tied to a real user problem", "A usable MVP or production-oriented first release", "AI behavior tested within the complete workflow", "Deployment and handover documentation for the next stage"],
    deliverables: ["Product definition", "UX and interface implementation", "Backend and AI integration", "Deployment and handover"],
    process: ["Clarify users and outcomes", "Prototype the riskiest workflow", "Build in useful increments", "Launch with measurement and documentation"],
    faqs: [
      { question: "Can you build both the AI and the web application?", answer: "Yes. I work across the AI layer, backend, database and frontend, which is useful when the product needs one coherent implementation rather than separate disconnected prototypes." },
      { question: "Do you start with an MVP?", answer: "Usually. A focused MVP is often the best way to validate the user workflow, data requirements and AI quality before expanding the feature set." },
      { question: "Can you take over after another team built the prototype?", answer: "Yes. I can assess the existing code and product assumptions, identify what is reusable and plan the shortest responsible path to a maintainable release." },
    ],
    relatedServices: ["ai-consulting-sri-lanka", "ai-development-sri-lanka", "generative-ai-development-sri-lanka"],
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    seoTitle: "Full-Stack Web Application Development",
    metaDescription: "Full-stack web application development for portals, internal platforms and customer products, including frontend, backend, data and deployment.",
    heading: "Full-stack applications built around the way your business works",
    summary: "End-to-end web applications with strong product foundations.",
    description:
      "I build modern applications across frontend, backend, database, authentication and deployment, with an emphasis on maintainability and a calm user experience.",
    bestFor: "Organizations that need a new web application, internal platform, customer portal or modernization of an existing system.",
    startingPoint: "A set of users and business workflows that should become a clear, reliable web product.",
    delivery: "Responsive interface, backend services, database, authentication, deployment and documentation.",
    problems: [
      { title: "Work is spread across manual tools", description: "Bring important workflows into one application with the right data, roles and operational visibility." },
      { title: "An existing system is difficult to extend", description: "Improve the architecture or rebuild the high-value workflows without carrying unnecessary complexity forward." },
      { title: "A product needs end-to-end ownership", description: "Coordinate frontend, backend, data and deployment decisions as one system instead of several disconnected tasks." },
    ],
    outcomes: ["A responsive application designed for its real users", "Maintainable backend and database foundations", "Secure authentication and role-aware workflows", "A deployment-ready build with practical documentation"],
    deliverables: ["Responsive web interfaces", "APIs and application logic", "Database and authentication", "Deployment-ready implementation"],
    process: ["Map the core workflows", "Choose the simplest sound architecture", "Build and review incrementally", "Validate, document and launch"],
    faqs: [
      { question: "Can the application include AI later?", answer: "Yes. The product and data architecture can be designed so useful AI capabilities can be added without making the whole application dependent on one model provider." },
      { question: "Can you integrate with our existing APIs or database?", answer: "Yes. I can work with existing services and data sources after reviewing their interfaces, ownership rules and technical constraints." },
      { question: "Do you provide deployment and handover?", answer: "Yes. Delivery can include deployment configuration, environment guidance, documentation and a structured handover for your internal team." },
    ],
    relatedServices: ["ai-integration-sri-lanka", "ai-product-development-sri-lanka", "ai-development-sri-lanka"],
  },
]

export const businessAiServices: ServiceDetail[] = [
  {
    slug: "ai-services-sri-lanka",
    title: "AI Services & Solutions",
    seoTitle: "Freelance AI Services in Colombo, Sri Lanka",
    metaDescription: "Freelance AI services and custom solutions for businesses in Colombo and across Sri Lanka, from consulting and automation to complete AI applications.",
    heading: "Practical AI services for businesses in Colombo and Sri Lanka",
    summary: "Choose, build and introduce AI with a clear business purpose.",
    description:
      "I provide freelance AI consulting and development for businesses that want a useful result, not just an AI demonstration. I can help you choose the right opportunity, build the solution and connect it to the way your team already works.",
    bestFor: "Businesses exploring AI, improving an existing process or planning a custom AI product.",
    startingPoint: "A business problem, slow workflow, customer need or product idea you want to improve.",
    delivery: "Consulting, design, development, integration, testing, launch support and handover.",
    problems: [
      { title: "You are not sure where to begin", description: "Compare the possible uses of AI and choose one that is valuable, realistic and easy to measure." },
      { title: "Generic AI tools do not fit", description: "Create a solution around your information, users and existing way of working." },
      { title: "You need one person to connect the pieces", description: "Bring the AI, web application, data and integrations together as one complete system." },
    ],
    outcomes: ["A clear and realistic AI starting point", "A solution designed around a real business need", "One delivery path from planning to working software", "Support for businesses in Sri Lanka and remote teams worldwide"],
    deliverables: ["AI opportunity assessment", "Custom AI application development", "AI automation and integrations", "Testing, deployment and documentation"],
    process: ["Understand the business problem", "Choose the right type of AI solution", "Build a small useful version", "Test it with real examples", "Launch, measure and improve"],
    faqs: [
      { question: "What AI services do you provide?", answer: "I provide AI consulting, custom AI development, AI agents, chatbots, knowledge assistants, automation, integrations, document AI and AI product development." },
      { question: "Do you work as a freelance AI developer?", answer: "Yes. I provide freelance AI consulting and development from Sri Lanka for local businesses and remote international teams." },
      { question: "Can you help us decide what to build?", answer: "Yes. We can begin with the business problem, compare the available options and define a small first project before committing to a larger build." },
    ],
    relatedServices: ["ai-consulting-sri-lanka", "ai-development-sri-lanka", "ai-automation-sri-lanka"],
  },
  {
    slug: "ai-consulting-sri-lanka",
    title: "AI Consulting for Businesses",
    seoTitle: "Freelance AI Consultant in Colombo, Sri Lanka",
    metaDescription: "Practical freelance AI consulting for businesses in Colombo and across Sri Lanka: identify useful opportunities, assess readiness and plan a focused pilot.",
    heading: "Clear, practical AI consulting for businesses in Sri Lanka",
    summary: "Find the right AI opportunity, define a realistic first project and move from discussion to implementation.",
    description:
      "As a freelance AI consultant, I help businesses understand where AI can save time, improve a service or support better decisions. Together, we turn the best opportunity into a clear plan or a small working pilot.",
    bestFor: "Business owners and teams that want to adopt AI but need clarity on where to start, what is feasible and what should be built first.",
    startingPoint: "A discovery session focused on your workflows, customers, data, current software and operational bottlenecks.",
    delivery: "Opportunity assessment, prioritized use cases, solution architecture, pilot scope and an implementation path.",
    problems: [
      { title: "You know AI matters, but not where it fits", description: "Identify the workflows where better knowledge access, automation or decision support can produce a useful business result." },
      { title: "Your team has too many possible ideas", description: "Compare opportunities by value, data readiness, risk, cost and time to measurable learning." },
      { title: "You need more than a strategy document", description: "Define a focused pilot and, where appropriate, continue into engineering so the recommendation becomes a working system." },
    ],
    outcomes: ["A prioritized list of AI opportunities tied to business needs", "A clear recommendation on buy, integrate or build", "A realistic first-project scope with risks and success measures", "A technical path that works with your existing systems and team"],
    deliverables: ["AI readiness and workflow assessment", "Use-case prioritization", "Data and integration review", "Pilot roadmap and solution architecture", "Implementation support"],
    process: ["Understand the business and current workflows", "Identify valuable, feasible AI opportunities", "Prioritize one use case and define success", "Design and validate a focused pilot", "Plan integration, rollout and ownership"],
    faqs: [
      { question: "What does an AI consultant do for a small or medium-sized business?", answer: "An AI consultant identifies business problems that AI can realistically improve, checks whether the required data and systems are available, recommends an appropriate solution and helps the team validate it through a focused pilot or implementation." },
      { question: "Do we need an AI strategy before starting?", answer: "You need a clear business objective and decision criteria, but not a large strategy programme. For many businesses, the best first step is a short assessment followed by one measurable pilot." },
      { question: "Can you work with companies outside Sri Lanka?", answer: "Yes. I am based in Sri Lanka and work remotely with international teams. Discovery, architecture reviews, implementation updates and handover can all be delivered remotely." },
      { question: "Will you recommend an off-the-shelf tool if it is enough?", answer: "Yes. The recommendation can be to adopt an existing tool, integrate a platform or build a custom solution. The choice should follow the business need, data sensitivity, ownership requirements and expected return." },
    ],
    relatedServices: ["ai-services-sri-lanka", "ai-automation-sri-lanka", "ai-development-sri-lanka"],
  },
  {
    slug: "ai-agent-development-sri-lanka",
    title: "AI Agent Development",
    seoTitle: "Freelance AI Agent Developer in Sri Lanka",
    metaDescription: "AI agent development in Colombo and Sri Lanka for controlled business workflows, including tool use, approvals, monitoring and system integration.",
    heading: "AI agents that complete clear, controlled business tasks",
    summary: "AI agents that use approved tools to help complete multi-step work.",
    description:
      "I build AI agents that can follow steps, use approved tools and prepare work for a person to review. Each agent is given a clear job, limited access and a safe path when it is unsure.",
    bestFor: "Teams with a repeatable multi-step task that uses several systems or information sources.",
    startingPoint: "One workflow with clear inputs, allowed actions, approval points and a useful final result.",
    delivery: "Agent design, tool connections, permissions, human approvals, testing, monitoring and documentation.",
    problems: [
      { title: "A task requires too many manual steps", description: "Let an agent gather information, prepare the next action and move the task forward within clear limits." },
      { title: "Information is spread across several tools", description: "Connect the agent only to the systems and actions it needs for the job." },
      { title: "Uncontrolled automation feels risky", description: "Use permissions, approval steps, logs and limits so important decisions remain visible." },
    ],
    outcomes: ["A working agent with one clearly defined responsibility", "Safe access to approved tools and information", "Human review for important or uncertain actions", "Logs and tests that make the agent easier to manage"],
    deliverables: ["Agent workflow and boundaries", "Tool and API connections", "Approval and exception paths", "Testing, monitoring and handover"],
    process: ["Map the task step by step", "Define what the agent can and cannot do", "Connect the required tools", "Test normal and difficult cases", "Launch with monitoring and human oversight"],
    faqs: [
      { question: "What is an AI agent?", answer: "An AI agent is software that can work through several steps and use approved tools to complete a defined task, instead of only answering one question." },
      { question: "Can an AI agent take actions in our systems?", answer: "Yes, when safe APIs and permission rules are available. Sensitive actions can require a person to approve them before they happen." },
      { question: "Do you build agents as a freelance developer?", answer: "Yes. I can design and build a focused agent as a freelance project, including its interface, integrations, tests and handover." },
    ],
    relatedServices: ["ai-automation-sri-lanka", "ai-integration-sri-lanka", "ai-copilot-development-sri-lanka"],
  },
  {
    slug: "ai-chatbot-development-sri-lanka",
    title: "AI Chatbot Development",
    seoTitle: "Freelance AI Chatbot Developer in Sri Lanka",
    metaDescription: "Custom AI chatbot development for businesses in Colombo and Sri Lanka, including customer support, product help, lead capture and human handover.",
    heading: "Helpful AI chatbots for customers and staff",
    summary: "Custom chatbots that answer useful questions and know when to involve a person.",
    description:
      "I build custom AI chatbots that help customers or staff find information, understand products and complete simple requests. The chatbot can use approved business content and pass the conversation to a person when needed.",
    bestFor: "Businesses that receive repeated questions through a website, support channel or internal help desk.",
    startingPoint: "The main audience, common questions, trusted information and the point where a person should take over.",
    delivery: "Conversation design, chatbot interface, knowledge connection, integrations, testing, analytics and handover.",
    problems: [
      { title: "Customers wait for common answers", description: "Give immediate help with products, services, policies or frequently asked questions." },
      { title: "A basic chatbot feels unhelpful", description: "Use your approved information so answers are specific to your business instead of generic." },
      { title: "Important conversations need a person", description: "Collect useful context and hand the conversation to the right team member at the right time." },
    ],
    outcomes: ["Faster answers to common questions", "Responses based on approved business information", "A clear path from chatbot to human support", "Conversation data that shows what users need"],
    deliverables: ["Web or in-app chatbot", "Knowledge and content connection", "Lead or support integrations", "Human handover and basic analytics"],
    process: ["List the questions and user goals", "Prepare the trusted information", "Build the conversation experience", "Test answers and handover", "Launch and improve from real conversations"],
    faqs: [
      { question: "Can the chatbot answer from our documents or website?", answer: "Yes. It can search approved pages, documents or product information before answering, with source links where appropriate." },
      { question: "Can it collect leads or support requests?", answer: "Yes. The chatbot can collect the required details and send them to an email, CRM, help desk or another system with a suitable connection." },
      { question: "Can I hire you as a freelance chatbot developer?", answer: "Yes. I provide freelance chatbot development for Sri Lankan businesses and remote clients, from the first plan through deployment." },
    ],
    relatedServices: ["rag-ai-assistant-development-sri-lanka", "ai-integration-sri-lanka", "multilingual-ai-solutions-sri-lanka"],
  },
  {
    slug: "ai-automation-sri-lanka",
    title: "AI Automation",
    seoTitle: "AI Automation Services in Colombo, Sri Lanka",
    metaDescription: "AI automation services for businesses in Colombo and Sri Lanka, reducing repetitive document, customer and operational work with human review.",
    heading: "AI automation that reduces repetitive business work",
    summary: "Save time on repeated information work while keeping people in control.",
    description:
      "I build AI automation for repeated business tasks such as reading documents, sorting requests, preparing summaries and moving information between systems. Important decisions can stay with your team.",
    bestFor: "Teams spending too much time on frequent, repeatable information work.",
    startingPoint: "One repeated task with clear inputs, a useful output and examples of the work today.",
    delivery: "Workflow design, AI processing, system connections, human review, testing and measurement.",
    problems: [
      { title: "Staff repeat the same task", description: "Reduce time spent reading, copying, sorting, summarizing or preparing the same type of information." },
      { title: "Requests move slowly between systems", description: "Prepare and route information so the right person can act sooner." },
      { title: "Automation is difficult to trust", description: "Add review steps, logs and clear handling for cases the AI cannot complete safely." },
    ],
    outcomes: ["Less time spent on repetitive work", "Faster and more consistent first drafts", "Human review for sensitive decisions", "A measurable process with visible exceptions"],
    deliverables: ["Workflow and value assessment", "AI automation workflow", "System and data connections", "Review screen, logs and documentation"],
    process: ["Measure the current task", "Separate rules, AI work and human decisions", "Build a small pilot", "Compare time and quality", "Integrate and expand after validation"],
    faqs: [
      { question: "What tasks are suitable for AI automation?", answer: "Good examples include document intake, request sorting, information extraction, summaries, first drafts and repeated knowledge searches." },
      { question: "Will automation remove people from the process?", answer: "Not necessarily. The aim is often to remove repeated handling while people keep control of sensitive, uncertain or high-impact decisions." },
      { question: "Can it connect to our current tools?", answer: "Yes, when those tools provide an API, export, webhook or suitable database access." },
    ],
    relatedServices: ["ai-agent-development-sri-lanka", "document-ai-solutions-sri-lanka", "ai-integration-sri-lanka"],
  },
  {
    slug: "ai-integration-sri-lanka",
    title: "AI Integration",
    seoTitle: "AI Integration Services in Colombo, Sri Lanka",
    metaDescription: "AI integration services for businesses in Colombo and Sri Lanka. Add useful AI features to existing software, portals and internal systems.",
    heading: "Add AI to the software your business already uses",
    summary: "Introduce useful AI features without rebuilding your whole system.",
    description:
      "I add AI features to existing applications, websites, portals and internal systems. The new feature can use your approved data and fit into a workflow people already understand.",
    bestFor: "Businesses with existing software that needs search, summaries, recommendations, document understanding or conversational help.",
    startingPoint: "A review of the current software, the target user task and the information the AI is allowed to use.",
    delivery: "Integration plan, AI feature, data connections, interface changes, testing and deployment support.",
    problems: [
      { title: "Your current product needs an AI feature", description: "Add one useful capability inside the product instead of creating a separate tool." },
      { title: "Business information is disconnected", description: "Connect approved databases, documents and APIs to the AI with clear access rules." },
      { title: "Replacing the whole system is unnecessary", description: "Improve the workflow that matters while keeping the useful parts of the current software." },
    ],
    outcomes: ["An AI feature inside the existing user journey", "Secure access to the information the feature needs", "Fallbacks and human review where needed", "An integration that can be monitored and improved"],
    deliverables: ["Current-system review", "Model and API integration", "Business data connection", "Interface updates, testing and deployment"],
    process: ["Review the software and user task", "Define the AI feature and limits", "Build the smallest useful integration", "Test quality, privacy, speed and cost", "Launch with monitoring"],
    faqs: [
      { question: "Do we need to replace our existing software?", answer: "Usually not. If the current system provides suitable access, an AI feature can often be added to the workflow that needs it." },
      { question: "What AI features can be integrated?", answer: "Examples include document search, summaries, recommendations, data extraction, drafting, classification and conversational help." },
      { question: "Can you work with custom internal software?", answer: "Yes, when the application, database or API access is available and the ownership and security rules are clear." },
    ],
    relatedServices: ["ai-development-sri-lanka", "rag-ai-assistant-development-sri-lanka", "ai-copilot-development-sri-lanka"],
  },
  {
    slug: "custom-ai-tools-sri-lanka",
    title: "Custom AI Tools",
    seoTitle: "Custom AI Tools for Businesses in Sri Lanka",
    metaDescription: "Freelance development of custom AI tools for businesses in Colombo and Sri Lanka, including internal dashboards, document tools and team utilities.",
    heading: "Simple custom AI tools for everyday business work",
    summary: "Focused internal tools that make one repeated job easier and faster.",
    description:
      "I build custom AI tools for tasks that are too specific for a general chatbot. A tool may help staff compare information, prepare content, check documents, search records or complete a repeated internal task.",
    bestFor: "Small and medium-sized businesses that need a focused internal tool without a large software project.",
    startingPoint: "One task, the people who do it and a few real examples of the information they use.",
    delivery: "Tool design, simple interface, AI and data connections, testing, deployment and instructions.",
    problems: [
      { title: "General AI tools require too much manual work", description: "Create a purpose-built flow with the right inputs, prompts and output format already prepared." },
      { title: "The task uses private business information", description: "Build clear data boundaries and use only the information required for the job." },
      { title: "Staff need a simple interface", description: "Hide technical complexity behind a clear screen designed for the people doing the work." },
    ],
    outcomes: ["A focused tool for one valuable task", "Less copying between documents and systems", "Consistent output in the format the team needs", "Simple instructions and clear ownership"],
    deliverables: ["Custom web-based AI tool", "Data or document connection", "User access and basic controls", "Deployment and usage guide"],
    process: ["Watch how the task is done today", "Define the smallest useful tool", "Build and test with real examples", "Improve the interface and output", "Deploy and hand over"],
    faqs: [
      { question: "What is a custom AI tool?", answer: "It is a small application built for a specific task, such as checking documents, comparing information, preparing content or searching business records." },
      { question: "Can you build a tool for only our team?", answer: "Yes. It can be a private internal tool with user access and connections to approved company information." },
      { question: "Do you take small freelance AI tool projects?", answer: "Yes. A focused tool with a clear user and task can be a good freelance project and a practical first step into AI." },
    ],
    relatedServices: ["ai-copilot-development-sri-lanka", "document-ai-solutions-sri-lanka", "ai-development-sri-lanka"],
  },
  {
    slug: "ai-copilot-development-sri-lanka",
    title: "AI Copilot Development",
    seoTitle: "Business AI Copilot Development in Sri Lanka",
    metaDescription: "AI copilot development for teams in Colombo and Sri Lanka, helping staff search, draft and complete work inside existing business processes.",
    heading: "AI copilots that help your team work with better context",
    summary: "An AI helper that supports staff inside a familiar workflow.",
    description:
      "I build AI copilots that help staff find information, prepare drafts and complete tasks while the person remains in control. The copilot can sit inside an existing application or a focused internal workspace.",
    bestFor: "Teams that want day-to-day AI help without giving full control of the work to an autonomous system.",
    startingPoint: "A role, repeated task and trusted information the copilot should use.",
    delivery: "Copilot experience, knowledge and tool connections, permissions, testing, feedback controls and handover.",
    problems: [
      { title: "Staff spend time gathering context", description: "Bring the relevant information together before the person makes a decision." },
      { title: "First drafts take too long", description: "Prepare a useful starting point based on the task and approved company information." },
      { title: "A fully autonomous agent is not appropriate", description: "Keep the person in charge while AI assists with the time-consuming parts." },
    ],
    outcomes: ["Faster access to relevant context", "More consistent first drafts", "People remain responsible for final decisions", "A copilot fitted to the role and workflow"],
    deliverables: ["Copilot interface", "Knowledge and data connections", "Role and permission rules", "Feedback, testing and deployment"],
    process: ["Understand the role and daily task", "Choose the information and actions to support", "Build the copilot experience", "Test with representative users", "Launch and improve from feedback"],
    faqs: [
      { question: "How is an AI copilot different from an AI agent?", answer: "A copilot assists a person who remains in control. An agent is usually given more responsibility to work through several steps on its own within defined limits." },
      { question: "Can the copilot work inside our current application?", answer: "Yes, if the current system provides suitable extension points, APIs or database access." },
      { question: "Can different staff members have different access?", answer: "Yes. The design can apply role or user permissions so each person only sees and uses approved information." },
    ],
    relatedServices: ["custom-ai-tools-sri-lanka", "ai-agent-development-sri-lanka", "ai-integration-sri-lanka"],
  },
  {
    slug: "generative-ai-development-sri-lanka",
    title: "Generative AI & LLM Development",
    seoTitle: "Generative AI & LLM Developer in Sri Lanka",
    metaDescription: "Freelance generative AI and LLM development in Colombo and Sri Lanka for text, document, search and conversational business applications.",
    heading: "Generative AI applications built for a useful business result",
    summary: "Text, document and conversational applications powered by modern language models.",
    description:
      "I build applications that use language models to understand, create and organize text. The model is connected to clear instructions, approved information and a simple product experience.",
    bestFor: "Businesses building a text, document, search, content or conversational feature with modern language models.",
    startingPoint: "The user task, sample inputs and a clear description of what a good result should look like.",
    delivery: "Model selection, prompt and workflow design, application development, evaluation, controls and deployment.",
    problems: [
      { title: "A general AI chat does not fit the task", description: "Create a guided experience with the right context and output format for the job." },
      { title: "Results are inconsistent", description: "Use clear instructions, examples, validation and evaluation to make quality visible." },
      { title: "The model needs business context", description: "Connect approved information without placing the whole product inside a single prompt." },
    ],
    outcomes: ["A useful generative AI feature or application", "A model choice based on quality, speed, privacy and cost", "Evaluation using representative examples", "Controls for common failure cases"],
    deliverables: ["LLM application design", "Model and provider integration", "Prompt and structured-output workflows", "Evaluation and deployment support"],
    process: ["Define the user task and good output", "Test suitable models", "Build the complete user flow", "Evaluate quality and cost", "Deploy with safeguards and monitoring"],
    faqs: [
      { question: "Which language models can you work with?", answer: "I can work with suitable hosted or open models, including providers such as OpenAI, Anthropic and Google, based on the project requirements." },
      { question: "Can we change the model later?", answer: "Yes. The application can be designed so the model is a replaceable part of the system rather than the whole architecture." },
      { question: "Do you provide freelance LLM development?", answer: "Yes. I provide freelance LLM and generative AI development for focused applications, integrations and product features." },
    ],
    relatedServices: ["ai-development-sri-lanka", "rag-ai-assistant-development-sri-lanka", "ai-product-development-sri-lanka"],
  },
  {
    slug: "document-ai-solutions-sri-lanka",
    title: "Document AI Solutions",
    seoTitle: "Document AI Solutions in Colombo, Sri Lanka",
    metaDescription: "Document AI solutions for businesses in Colombo and Sri Lanka, including extraction, classification, summaries, search and human review.",
    heading: "Turn business documents into useful, structured information",
    summary: "Read, sort, search and summarize documents with less manual handling.",
    description:
      "I build document AI systems that help teams handle forms, reports, invoices, PDFs and other business files. The system can extract information, classify documents, prepare summaries or make approved content searchable.",
    bestFor: "Teams that receive many documents and spend time reading, copying, sorting or searching them.",
    startingPoint: "A sample set of documents, the information you need and the decision or task that follows.",
    delivery: "Document intake, text extraction, AI processing, review interface, exports, testing and documentation.",
    problems: [
      { title: "Important information is trapped in files", description: "Extract the fields and text the team needs into a useful structure." },
      { title: "People read the same type of document repeatedly", description: "Prepare summaries, categories or suggested next steps for review." },
      { title: "Document quality and formats vary", description: "Add validation and an exception path when a file cannot be handled confidently." },
    ],
    outcomes: ["Faster document intake and review", "Structured information ready for another system", "Searchable documents and clear source links", "Human review for uncertain or sensitive cases"],
    deliverables: ["Document upload or intake flow", "Extraction and classification", "Summary or search experience", "Review, export and system integration"],
    process: ["Review real document examples", "Define the required fields and outputs", "Build extraction and processing", "Test difficult and low-quality files", "Connect the result to the next business step"],
    faqs: [
      { question: "Which documents can be processed?", answer: "The exact formats depend on the project, but common examples include PDFs, office documents, forms, reports, invoices and scanned files." },
      { question: "Can the system extract information into our database?", answer: "Yes. Extracted information can be checked and sent to an existing system when suitable database or API access is available." },
      { question: "What happens when the AI is unsure?", answer: "The workflow can flag the document for a person to review instead of silently accepting an uncertain result." },
    ],
    relatedServices: ["ai-automation-sri-lanka", "rag-ai-assistant-development-sri-lanka", "ai-integration-sri-lanka"],
  },
  {
    slug: "multilingual-ai-solutions-sri-lanka",
    title: "Sinhala & Multilingual AI",
    seoTitle: "Sinhala & Multilingual AI Solutions in Sri Lanka",
    metaDescription: "Sinhala and multilingual AI solutions in Sri Lanka for language tools, assistants, content workflows and applications serving local users.",
    heading: "Sinhala and multilingual AI for Sri Lankan users",
    summary: "Language-aware AI experiences for Sinhala, English and multilingual workflows.",
    description:
      "I build and evaluate AI features for Sinhala and multilingual use cases. This can include writing support, search, assistants, content workflows and applications that need to serve Sri Lankan users more naturally.",
    bestFor: "Organizations serving Sinhala-speaking or multilingual users where English-only AI is not enough.",
    startingPoint: "The languages, audience, real text examples and the task the system should support.",
    delivery: "Language data review, solution design, model testing, application development, evaluation and deployment support.",
    problems: [
      { title: "English-only tools exclude users", description: "Design an experience that supports the languages people actually use." },
      { title: "Sinhala quality is difficult to judge", description: "Create representative examples and review the output for the real language task." },
      { title: "Translation alone is not enough", description: "Consider the local language, writing style, terminology and user experience together." },
    ],
    outcomes: ["A more accessible experience for local users", "Language quality evaluated on real examples", "Clear limits for unsupported or uncertain text", "A maintainable multilingual application workflow"],
    deliverables: ["Language-use-case assessment", "Sinhala or multilingual AI feature", "Data preparation and evaluation", "Application integration and documentation"],
    process: ["Define the languages and user task", "Collect representative examples", "Test suitable models and approaches", "Build the application flow", "Evaluate with real text and improve"],
    faqs: [
      { question: "Can you build AI applications in Sinhala?", answer: "Yes. I work on Sinhala language AI and can build or evaluate features for suitable Sinhala and multilingual use cases." },
      { question: "Does every project require model fine-tuning?", answer: "No. The first step is to test available models and workflows. Fine-tuning is useful only when it solves a measured language or task limitation." },
      { question: "Can the same application support Sinhala and English?", answer: "Yes. The product can support more than one language, with testing for each important user task and language." },
    ],
    relatedServices: ["generative-ai-development-sri-lanka", "ai-chatbot-development-sri-lanka", "ai-development-sri-lanka"],
  },
]

export const servicePages: ServiceDetail[] = [...businessAiServices, ...services]

export const notes = [
  {
    slug: "multi-llm-without-lock-in",
    title: "Designing multi-LLM products without vendor lock-in",
    date: "06 Oct 2026",
    readTime: "6 min",
    intro: "The model should be a replaceable capability inside the product, not the architecture of the entire product.",
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
    intro: "A sentence benchmark and a real newspaper paragraph test reveal different failure modes, and both matter.",
    sections: [
      ["Separate controlled and natural text", "Sentence-level examples isolate correction behavior. Real-news paragraphs introduce style, context and error combinations that make the task closer to editorial use."],
      ["Explain what accuracy means", "A metric needs its unit, dataset and matching rule. Without those, a percentage is impressive-looking but difficult to trust or reproduce."],
      ["Read the misses", "Error analysis is where the next experiment comes from. Grouping missed cases by grammar pattern, ambiguity and style gives the score an engineering purpose."],
    ],
  },
]

export const experience = [
  {
    role: "Software Engineer Intern - Gen AI Applications",
    company: "SLIIT",
    period: "Oct 2025 - Present",
    description: "Designing and independently developing enterprise AI platforms across multi-model orchestration, retrieval, memory, voice and full-stack product engineering.",
    contributions: ["SLIIT COEAI Chatbot", "Academic Chatbot Platform", "RAG and AI memory", "Realtime voice systems"],
  },
  {
    role: "Software Development Intern",
    company: "Sri Lanka Telecom",
    period: "Jan 2025 - Jul 2025",
    description: "Contributed to software work in an enterprise telecommunications environment and gained experience with operational systems.",
    contributions: ["Enterprise software exposure", "Team delivery", "Operational systems"],
  },
]
