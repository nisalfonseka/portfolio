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
      showOnHome: true,
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
        "Pitched a Sinhala journalism AI system to the judging panel at the National AI Expo during Sri Lanka AI Week 2026—one platform that takes a raw article through understanding, grammar and spelling correction, summarisation, headline generation and style rewriting to publish-ready content.",
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
  publications: [],
}

export const services: ServiceDetail[] = [
  {
    slug: "ai-engineering",
    title: "AI Engineering",
    seoTitle: "Custom AI Engineering Services",
    metaDescription: "Custom AI engineering for reliable LLM applications, model integrations, evaluations and production AI features in Sri Lanka and worldwide.",
    heading: "Custom AI engineering for reliable, production-ready systems",
    summary: "Reliable AI features designed as part of a complete software system.",
    description:
      "I design and build AI applications using modern language models, retrieval, evaluation and orchestration—connected to the product, data and controls that make them genuinely useful.",
    bestFor: "Teams that have a defined AI use case and need an engineer to design and build the working system.",
    startingPoint: "A workflow, product requirement or prototype that needs a dependable technical implementation.",
    delivery: "Architecture, implementation, testing, deployment support and practical documentation.",
    problems: [
      { title: "A prototype is not production-ready", description: "Turn an experimental AI feature into a maintainable product with clear data flows, controls, fallbacks and monitoring." },
      { title: "The model is disconnected from the product", description: "Connect language models to the application, business data and user experience instead of leaving AI as an isolated demo." },
      { title: "Quality and cost are unpredictable", description: "Add evaluation, provider choices, usage controls and observable system boundaries so trade-offs can be managed." },
    ],
    outcomes: ["A working AI capability connected to real product workflows", "An architecture that can evolve as models and providers change", "Evaluation and safeguards suited to the use case", "A documented system your team can operate and extend"],
    deliverables: ["LLM application architecture", "Model and provider integration", "Evaluation workflows", "AI features for existing products"],
    process: ["Define the job the AI must do", "Choose an architecture that can be evaluated", "Build the product and AI layers together", "Test behavior, reliability and cost"],
    faqs: [
      { question: "Do you train a new AI model for every project?", answer: "No. Most business use cases are better served by combining an existing model with the right data, retrieval, tools and product controls. Fine-tuning is considered only when it solves a measured limitation." },
      { question: "Can you work with OpenAI, Claude, Gemini or open-source models?", answer: "Yes. I can design a provider-specific or multi-provider architecture based on capability, privacy, latency, availability and cost requirements." },
      { question: "Can you improve an AI feature that already exists?", answer: "Yes. I can review the current workflow, prompts, retrieval, data boundaries and failure cases, then improve the parts that are limiting quality or reliability." },
    ],
    relatedServices: ["ai-integration-services", "rag-ai-chatbot-development", "ai-product-development"],
  },
  {
    slug: "rag-ai-chatbot-development",
    title: "RAG & AI Assistants",
    seoTitle: "RAG Chatbot & AI Assistant Development",
    metaDescription: "RAG chatbot and AI assistant development grounded in your documents, knowledge base and business data, with citations, access controls and evaluation.",
    heading: "AI assistants grounded in your documents and business knowledge",
    summary: "Domain-specific assistants grounded in your own knowledge.",
    description:
      "I build assistants that retrieve from documents, knowledge bases and business data so responses can be relevant, traceable and managed over time.",
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
    relatedServices: ["ai-integration-services", "ai-engineering", "ai-automation-for-business"],
  },
  {
    slug: "ai-product-development",
    title: "AI Product Development",
    seoTitle: "AI Product Development Services",
    metaDescription: "End-to-end AI product development from focused MVP to production-oriented software, combining UX, full-stack engineering and AI integration.",
    heading: "Turn a strong AI idea into software people can actually use",
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
    relatedServices: ["ai-consulting-sri-lanka", "ai-engineering", "full-stack-development"],
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
    relatedServices: ["ai-integration-services", "ai-product-development", "ai-engineering"],
  },
]

export const businessAiServices: ServiceDetail[] = [
  {
    slug: "ai-consulting-sri-lanka",
    title: "AI Consulting for Businesses",
    seoTitle: "AI Consulting Services in Sri Lanka & Worldwide",
    metaDescription: "Practical AI consulting for SMEs and growing businesses in Sri Lanka and worldwide: identify use cases, assess readiness and plan a focused pilot.",
    heading: "Practical AI consulting for businesses in Sri Lanka and worldwide",
    summary: "Find the right AI opportunity, define a realistic first project and move from discussion to implementation.",
    description:
      "I help small and medium-sized businesses identify where AI can create measurable value, assess the data and systems already available, and turn the strongest opportunity into a practical implementation plan or working pilot.",
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
    relatedServices: ["ai-integration-services", "ai-automation-for-business", "ai-product-development"],
  },
  {
    slug: "ai-integration-services",
    title: "AI Integration for Existing Software",
    seoTitle: "AI Integration Services for Existing Software",
    metaDescription: "AI integration services for existing software, portals and internal systems. Add useful AI features without rebuilding your entire application.",
    heading: "Add useful AI capabilities to the software your business already uses",
    summary: "Integrate AI into existing applications, portals and internal systems without rebuilding everything from the beginning.",
    description:
      "I design and implement AI integrations for existing software—connecting language models, retrieval, automation and business data to the workflows your customers or staff already understand.",
    bestFor: "Companies with an existing web application, CRM, portal, database or internal system that should gain a specific AI capability.",
    startingPoint: "A technical review of the current application, target workflow, available APIs, data boundaries and quality requirements.",
    delivery: "Integration architecture, AI feature implementation, data connections, testing, safeguards and deployment support.",
    problems: [
      { title: "Your current product needs an AI capability", description: "Add search, summarization, recommendations, document understanding or conversational support inside the existing experience." },
      { title: "Business data is isolated from the model", description: "Connect AI to approved databases, APIs and knowledge sources with explicit access and validation rules." },
      { title: "A separate AI tool would disrupt the workflow", description: "Place the capability where employees or customers already work rather than forcing them into another disconnected application." },
    ],
    outcomes: ["An AI feature embedded in the existing user journey", "Secure connections to the data and tools the feature requires", "Fallbacks, permissions and human review where the workflow needs them", "An integration that can be monitored and improved after launch"],
    deliverables: ["Existing-system technical assessment", "Model and API integration", "Business-data and knowledge connections", "User interface and workflow changes", "Testing, observability and deployment"],
    process: ["Review the current architecture and workflow", "Define the AI task and its boundaries", "Build the smallest useful integration", "Evaluate quality, security, latency and cost", "Roll out with monitoring and documentation"],
    faqs: [
      { question: "Do we have to replace our existing software to use AI?", answer: "Usually not. If the current system has usable APIs, database access or extension points, an AI capability can often be added around the workflow that needs it." },
      { question: "What kinds of AI features can be integrated?", answer: "Common examples include knowledge search, document extraction, summarization, drafting, classification, recommendations, natural-language interfaces and workflow assistants." },
      { question: "How do you protect private business data?", answer: "The design starts with data boundaries, permissions, provider terms, retention requirements and the minimum context needed for each request. The exact controls depend on your systems and compliance needs." },
      { question: "Can you integrate AI with a custom internal system?", answer: "Yes. I can work with custom systems where the application, database or API access is available and the ownership rules are clear." },
    ],
    relatedServices: ["ai-consulting-sri-lanka", "ai-engineering", "rag-ai-chatbot-development"],
  },
  {
    slug: "ai-automation-for-business",
    title: "AI Automation for Business Workflows",
    seoTitle: "AI Automation Services for Business Workflows",
    metaDescription: "AI automation services for document, customer support and operational workflows, with human review, system integrations and measurable outcomes.",
    heading: "Automate repetitive knowledge work while keeping people in control",
    summary: "Use AI to reduce manual handling across documents, customer requests, reporting and operational workflows.",
    description:
      "I build focused AI automation for repeatable business processes, combining language models with rules, APIs and human approval so the result is useful, observable and appropriate for real operations.",
    bestFor: "Teams spending significant time reading, sorting, summarizing, drafting or transferring information between systems.",
    startingPoint: "One frequent workflow with a clear owner, representative examples and a measurable cost in time, delay or errors.",
    delivery: "Workflow design, integrations, AI processing, approval controls, auditability, measurement and handover.",
    problems: [
      { title: "Staff repeat the same information-heavy task", description: "Assist with classification, extraction, comparison, summarization or drafting while preserving the decisions that require human judgment." },
      { title: "Customer requests move slowly between systems", description: "Route and prepare information automatically so the responsible person can respond with better context and less manual copying." },
      { title: "Automation is difficult to trust", description: "Use confidence thresholds, review steps, logs and clear exception handling instead of hiding the workflow behind an autonomous black box." },
    ],
    outcomes: ["Less time spent on repetitive information handling", "Faster handoffs and more consistent first drafts", "Human approval retained for sensitive or uncertain decisions", "A measurable workflow with logs and defined failure handling"],
    deliverables: ["Workflow and ROI assessment", "Document or message processing", "Business-system integrations", "Human review and exception paths", "Monitoring and operational documentation"],
    process: ["Measure the current workflow", "Separate rules, AI tasks and human decisions", "Build a controlled pilot with real examples", "Compare quality, time and exception rates", "Integrate and expand only after validation"],
    faqs: [
      { question: "Which business processes are suitable for AI automation?", answer: "Good candidates are frequent, information-heavy tasks with repeatable inputs and a clear definition of a useful output—for example document intake, request classification, summarization, drafting and knowledge retrieval." },
      { question: "Will AI automation replace the people doing the work?", answer: "The goal is usually to remove repetitive handling and give people better prepared information. High-impact, sensitive or ambiguous decisions should keep an explicit human review step." },
      { question: "How do we know whether the automation is worth it?", answer: "A pilot should compare the current and proposed workflow using measures such as handling time, turnaround time, correction rate, exception rate and operating cost." },
      { question: "Can automation connect to our current business tools?", answer: "Yes, when those tools provide suitable APIs, exports, webhooks or database access. The assessment identifies the safest and simplest integration path." },
    ],
    relatedServices: ["ai-consulting-sri-lanka", "ai-integration-services", "rag-ai-chatbot-development"],
  },
]

export const servicePages: ServiceDetail[] = [...businessAiServices, ...services]

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
    role: "Software Development Intern",
    company: "Sri Lanka Telecom",
    period: "Jan 2025 — Jul 2025",
    description: "Contributed to software work in an enterprise telecommunications environment and gained experience with operational systems.",
    contributions: ["Enterprise software exposure", "Team delivery", "Operational systems"],
  },
]
