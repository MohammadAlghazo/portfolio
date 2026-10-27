export type ProjectCategory = 'Platforms' | 'Client websites' | 'Engineering';

export interface ProjectImage {
  src: string;
  srcset?: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  name: string;
  nameLanguage?: 'ar';
  arabicName?: string;
  category: ProjectCategory;
  sector: string;
  summary: string;
  role: string;
  challenge: string;
  approach: string;
  features: { title: string; detail: string }[];
  stack: string[];
  live?: string;
  github?: string;
  status?: string;
  cover: { background: string; foreground: string; accent: string; motif: string; label: string };
}

export const PROJECTS: readonly Project[] = [
  {
    slug: 'place-on',
    name: 'PLACE ON',
    arabicName: 'بليس أون',
    category: 'Platforms',
    sector: 'Workspace marketplace',
    summary:
      'Discover a workspace. Run the business behind it. A marketplace with dedicated tools for providers, customers, and platform administrators',
    role: 'Full-stack development, interface design, database architecture & deployment',
    challenge:
      'Workspace discovery and booking inquiries were split across messages and manual records. Providers needed a place to manage their inventory while customers needed a clear way to compare spaces',
    approach:
      'Built a shared marketplace with separate customer, provider, and administration workflows. Connected discovery, structured inquiries, workspace moderation, and subscriptions in one product',
    features: [
      {
        title: 'Discovery with context',
        detail:
          'Search by city, space type, capacity, and price, then review facilities and workspace details before making an inquiry',
      },
      {
        title: 'Three sides of the marketplace',
        detail:
          'Dedicated portals for customers, workspace providers, and administrators, with role-based access to the appropriate operations',
      },
      {
        title: 'A structured corporate brief',
        detail:
          'A multi-step office-finding journey captures team size, budget, start date, and space requirements',
      },
      {
        title: 'Operations beyond the listing',
        detail:
          'Workspace approval, provider management, inquiry tracking, subscriptions, and a community area support the platform after launch',
      },
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Prisma 6',
      'MySQL',
      'Docker',
      'Coolify',
    ],
    live: 'https://place-on.com/',
    cover: {
      background: '#e6e4dd',
      foreground: '#263c36',
      accent: '#73856c',
      motif: 'architecture',
      label: 'A place to do your best work',
    },
  },
  {
    slug: 'bosala',
    name: 'Bosala',
    arabicName: 'بوصلة',
    category: 'Platforms',
    sector: 'E-commerce intelligence',
    summary:
      'From scattered product data to a clearer selling decision. Market reports, product discovery, and a profit calculator for Saudi merchants',
    role: 'Full-stack development, data workflows, subscriptions & deployment',
    challenge:
      'Merchants need more than a list of popular products. Purchase costs, shipping, payment fees, and advertising all affect whether an opportunity is worth pursuing',
    approach:
      'Connected product intelligence with practical decision tools: automated collection workflows, subscriber reports, and a public calculator that makes the cost model visible',
    features: [
      {
        title: 'Product and market research',
        detail:
          'Product discovery and research reports bring together market data for merchants serving Saudi Arabia',
      },
      {
        title: 'Profit before promotion',
        detail:
          'An interactive calculator accounts for product cost, shipping, payment fees, and VAT to estimate margins and break-even advertising returns',
      },
      {
        title: 'Subscriber operations',
        detail:
          'Account access, plans, payments through Paylink, and report delivery are connected to the platform’s data model',
      },
      {
        title: 'Report attribution',
        detail:
          'A signed text watermark and an administrative investigation tool help trace copied subscriber reports',
      },
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Python',
      'Prisma',
      'PostgreSQL',
      'Supabase',
      'Upstash Redis',
      'Paylink',
      'Vercel',
    ],
    live: 'https://www.bosala.best/',
    cover: {
      background: '#e8edde',
      foreground: '#253c2f',
      accent: '#829766',
      motif: 'compass',
      label: 'A clearer direction for commerce',
    },
  },
  {
    slug: 'huwia',
    name: 'Huwia',
    arabicName: 'هوية',
    category: 'Platforms',
    sector: 'Digital business profiles',
    summary:
      'One link for a business’s identity. Bilingual profiles, QR codes, configurable themes, and the tools to manage them at scale',
    role: 'Product architecture, full-stack development, design system & deployment',
    challenge:
      'A generic link page does not give an Arabic-speaking business the right tools for its branding, opening hours, contact details, and bilingual content',
    approach:
      'Created a managed profile platform with Arabic and English support, three presentation themes, business-level customization, and separate client and administration experiences',
    features: [
      {
        title: 'A profile with its own identity',
        detail:
          'Three themes, brand colors, logos, offers, social links, and scheduled announcements adapt each page to its business',
      },
      {
        title: 'Arabic and English, considered together',
        detail:
          'Profiles support RTL and LTR layouts, localized contact information, and timezone-aware opening hours',
      },
      {
        title: 'Useful beyond a browser',
        detail:
          'QR codes, vCard downloads, and action buttons connect the profile to real-world visits and conversations',
      },
      {
        title: 'Managed without losing control',
        detail:
          'Client editing and analytics sit alongside administrative business management, invitations, audit logs, and session controls',
      },
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Better Auth',
      'Prisma 6',
      'MySQL',
      'Sharp',
      'Docker',
    ],
    live: 'https://huwia.id/',
    cover: {
      background: '#e7ebe3',
      foreground: '#315b4c',
      accent: '#8d9d87',
      motif: 'identity',
      label: 'Every business has an identity',
    },
  },
  {
    slug: 'trade-nox',
    name: 'TRADE NOX',
    arabicName: 'نوكس للأعمال',
    category: 'Client websites',
    sector: 'Digital agency & operations',
    summary:
      'An agency website that also does the work: instant estimates, structured project briefs, and a custom operational dashboard',
    role: 'Platform rebuild, full-stack development, operations tooling & infrastructure',
    challenge:
      'The agency needed more than a replacement for its WordPress website. Service pricing, client requirements, and internal meeting records also needed a more consistent workflow',
    approach:
      'Rebuilt the public website and connected it to custom pricing, briefing, content, and administrative tools, rather than treating the marketing site and internal operations as separate projects',
    features: [
      {
        title: 'An estimate clients can explore',
        detail:
          'Service scopes and optional additions update a quote interactively, including VAT and a printable quotation',
      },
      {
        title: 'A better project handover',
        detail:
          'A multi-step digital brief collects business context and project requirements, with local draft recovery',
      },
      {
        title: 'Meeting minutes as a workflow',
        detail:
          'An internal studio records participants, decisions, responsibilities, and dates, with document export',
      },
      {
        title: 'One operational workspace',
        detail:
          'Pricing, inquiries, briefs, resources, portfolio content, and first-party visit analytics are managed through the administration area',
      },
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Prisma 6',
      'MySQL',
      'GSAP',
      'Docker',
      'Coolify',
    ],
    live: 'https://trade-nox.com/',
    cover: {
      background: '#e9e8e5',
      foreground: '#222826',
      accent: '#7f8e81',
      motif: 'wordmark',
      label: 'From first contact to delivery',
    },
  },
  {
    slug: 'clavel-dental',
    name: 'Clavel Dental',
    arabicName: 'كلافيل لطب الأسنان',
    category: 'Client websites',
    sector: 'Healthcare & appointment management',
    summary:
      'A considered patient journey, supported by appointment tracking, medical content, and configurable booking periods',
    role: 'Full-stack development, patient experience, database design & deployment',
    challenge:
      'The clinic needed a clear public presence and a reliable way for reception staff to organize online appointment requests and patient inquiries',
    approach:
      'Designed the patient-facing service and doctor pages around booking, then built the administrative workflows that help the clinic handle those requests',
    features: [
      {
        title: 'Services and specialists',
        detail:
          'Dedicated service and doctor pages give visitors context before choosing an appointment',
      },
      {
        title: 'Booking with the right information',
        detail:
          'The booking journey captures the requested service, preferred doctor, date, and booking period with input validation',
      },
      {
        title: 'A practical reception dashboard',
        detail:
          'Staff can review appointments and inquiries and manage booking statuses in a dedicated administration area',
      },
      {
        title: 'Hours that the clinic can change',
        detail:
          'Working hours, available periods, articles, and FAQs can be managed without a code deployment',
      },
    ],
    stack: [
      'Next.js 14',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'NextAuth',
      'Prisma',
      'MySQL',
      'Zod',
      'Docker',
    ],
    live: 'https://www.claveldental.com/',
    cover: {
      background: '#e4e9df',
      foreground: '#1b4332',
      accent: '#a59263',
      motif: 'dental',
      label: 'Care, from the first interaction',
    },
  },
  {
    slug: 'smaa-cars',
    name: 'SMAA Cars',
    arabicName: 'سما التوريد',
    category: 'Client websites',
    sector: 'Automotive inventory & lead management',
    summary:
      'A digital showroom connected to inventory management and separate inquiry journeys for buyers, fleet customers, and partners',
    role: 'Full-stack development, inventory & inquiry workflows, deployment',
    challenge:
      'Car availability and customer requests needed a common home, while individual buyers and corporate fleet clients required different information and follow-up',
    approach:
      'Built a searchable vehicle catalogue and detailed car pages, backed by a custom inventory dashboard and purpose-specific contact forms',
    features: [
      {
        title: 'A showroom with substance',
        detail:
          'Vehicle detail pages combine photographs, specifications, pricing, and direct contact options',
      },
      {
        title: 'Inventory staff can maintain',
        detail:
          'The administration area manages car details, images, and availability, including available and sold states',
      },
      {
        title: 'Five inquiry streams',
        detail:
          'Individual requests, fleet inquiries, partnerships, complaints, and general messages each capture the details relevant to their purpose',
      },
      {
        title: 'An image pipeline behind the scenes',
        detail:
          'Server-side Sharp processing creates WebP vehicle images; editorial content is managed through the custom CMS',
      },
    ],
    stack: [
      'Next.js 14',
      'TypeScript',
      'Tailwind CSS',
      'Prisma 6',
      'Sharp',
      'JWT',
      'Zod',
      'Docker',
      'Coolify',
    ],
    live: 'https://smaacars.com/',
    cover: {
      background: '#e2e6e8',
      foreground: '#20384c',
      accent: '#879aa5',
      motif: 'road',
      label: 'From sourcing to the showroom',
    },
  },
  {
    slug: 'swl-lawfirm',
    name: 'سمو الحكمة',
    nameLanguage: 'ar',
    arabicName: 'للمحاماة والاستشارات القانونية',
    category: 'Client websites',
    sector: 'Legal services & custom CMS',
    summary:
      'A legal practice’s digital front door, with Arabic-first service pages, editorial publishing, and consultation intake',
    role: 'Interface design, full-stack development, custom CMS & deployment',
    challenge:
      'The firm needed a professional Arabic presence and a manageable publishing workflow, while consultation requests needed to remain available even if an email notification failed',
    approach:
      'Built a custom website and lightweight CMS. Consultation requests are stored before the separate email notification step, and published article content is sanitized',
    features: [
      {
        title: 'A clear legal practice',
        detail:
          'Services, firm information, team profiles, and legal articles make the practice’s expertise easier to explore',
      },
      {
        title: 'Consultation intake that persists first',
        detail:
          'The contact flow saves the request in MySQL before attempting the Resend email notification',
      },
      {
        title: 'Arabic publishing tools',
        detail:
          'The custom CMS supports rich-text editing, draft and published states, and Arabic-friendly article URLs',
      },
      {
        title: 'A focused administration area',
        detail:
          'Signed sessions protect the content and inquiry tools; article HTML passes through a sanitization layer',
      },
    ],
    stack: [
      'Next.js 15',
      'React',
      'TypeScript',
      'Prisma',
      'MySQL',
      'JOSE',
      'Quill',
      'Resend',
      'Sharp',
    ],
    live: 'https://www.swl-lawfirm.com.sa/',
    cover: {
      background: '#e6e4de',
      foreground: '#34495d',
      accent: '#b08d57',
      motif: 'balance',
      label: 'Clarity. Counsel. Confidence',
    },
  },
  {
    slug: 'maha-museum',
    name: 'Almaha Museum',
    arabicName: 'متحف المها',
    category: 'Client websites',
    sector: 'Art collection & digital experiences',
    summary:
      'A restrained digital gallery for a private art collection, with immersive viewing and a direct WhatsApp purchase journey',
    role: 'Experience design, frontend development, media presentation & deployment',
    challenge:
      'A private collection needed a digital presentation that gave the artwork room to breathe and made requesting a curated digital package straightforward',
    approach:
      'Chose a statically generated gallery with an interactive lightbox and direct contact, avoiding account creation or a shopping-cart workflow the business did not need',
    features: [
      {
        title: 'The artwork leads',
        detail:
          'An image-led presentation and full-screen viewing experience keep attention on the collection',
      },
      {
        title: 'A direct purchase journey',
        detail: 'Visitors review package options and continue the conversation through WhatsApp',
      },
      {
        title: 'Architecture matched to the brief',
        detail:
          'Static generation suits the curated collection; there is no separate public administration dashboard in this project',
      },
      {
        title: 'Ready to share and discover',
        detail:
          'Page metadata, structured collection data, and campaign tracking support discovery and promotion',
      },
    ],
    stack: ['Next.js 16', 'React', 'TypeScript', 'CSS Modules', 'SSG', 'Canvas', 'JSON-LD'],
    live: 'https://maha-museum.com/',
    cover: {
      background: '#eee7db',
      foreground: '#3d342a',
      accent: '#a08c5f',
      motif: 'gallery',
      label: 'A collection, given room to breathe',
    },
  },
  {
    slug: 'lamsa',
    name: 'Lamsa',
    arabicName: 'لمسة',
    category: 'Client websites',
    sector: 'Events & bespoke experiences',
    summary:
      'A booking experience for a live customization cart, connecting event packages and practical setup details to day-to-day operations',
    role: 'Interface design, full-stack development, booking operations & deployment',
    challenge:
      'Event hosts need to understand the experience, compare packages, and check the cart’s practical requirements before sharing their event details',
    approach:
      'Built a brand-led website with a cart dimensions guide, packages, and a multi-step booking request that connects to an administrative workflow and WhatsApp follow-up',
    features: [
      {
        title: 'An experience visitors can understand',
        detail:
          'The customization journey explains how guests choose their piece, patches, and finish',
      },
      {
        title: 'Practical planning, considered',
        detail:
          'A visual cart guide communicates dimensions and electrical requirements to venues and event planners',
      },
      {
        title: 'From package to booking request',
        detail:
          'The booking journey collects event details and produces a reference for the subsequent WhatsApp conversation',
      },
      {
        title: 'Event operations behind the brand',
        detail:
          'Bookings, inquiry messages, availability settings, and contact information are managed through the custom dashboard',
      },
    ],
    stack: [
      'Next.js 15',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Prisma 6',
      'MySQL',
      'Framer Motion',
      'Docker',
    ],
    live: 'https://lamsadelamaison.com/',
    status: 'Client preview',
    cover: {
      background: '#f0e5df',
      foreground: '#5f0514',
      accent: '#af8a52',
      motif: 'thread',
      label: 'A small touch. A lasting memory',
    },
  },
  {
    slug: 'kawadir',
    name: 'Kawadir',
    arabicName: 'كوادر',
    category: 'Engineering',
    sector: 'Human resource management',
    summary:
      'An HR management system connecting employee records, attendance, payroll workflows, and organizational access',
    role: 'Full-stack development · graduation project',
    challenge:
      'Employee records, attendance, and payroll need a consistent relational model and clear boundaries between organizational roles',
    approach:
      'Built an Angular frontend and an ASP.NET Core Web API using Clean Architecture, with PostgreSQL persistence and role-based authorization',
    features: [
      {
        title: 'Connected HR workflows',
        detail:
          'Employee lifecycle, attendance, payroll calculations, and organizational hierarchies share a common application model',
      },
      {
        title: 'An explicit backend structure',
        detail:
          'Clean Architecture, repository patterns, dependency injection, and JWT-based access separate responsibilities',
      },
      {
        title: 'Delivered beyond development',
        detail: 'Docker, Render, and Cloudflare support the deployed application',
      },
    ],
    stack: [
      'Angular',
      'ASP.NET Core',
      'C#',
      'PostgreSQL',
      'Entity Framework Core',
      'Docker',
      'JWT',
    ],
    live: 'https://kawadir-hrms.pages.dev/',
    github: 'https://github.com/MohammadAlghazo/HRMS',
    cover: {
      background: '#e7e8e4',
      foreground: '#384139',
      accent: '#83917b',
      motif: 'architecture',
      label: 'People, processes, and a common system',
    },
  },
  {
    slug: 'stockmaster',
    name: 'StockMaster',
    category: 'Engineering',
    sector: 'Inventory & AI integration',
    summary:
      'Inventory tracking with a conversational assistant for stock questions and reorder suggestions',
    role: 'Full-stack development, relational data design & AI integration',
    challenge:
      'Inventory information is more useful when staff can ask questions about it without manually navigating every record',
    approach:
      'Connected an Angular application and ASP.NET Core API to PostgreSQL, then integrated a Groq-powered assistant for inventory queries',
    features: [
      {
        title: 'A connected inventory model',
        detail:
          'Relational inventory data is accessed through a dedicated REST API and Angular management interface',
      },
      {
        title: 'Questions in natural language',
        detail:
          'A Groq LLM integration supports conversational stock queries and restock suggestions',
      },
      {
        title: 'A deployed application',
        detail: 'The frontend and containerized backend use Cloudflare and Render infrastructure',
      },
    ],
    stack: ['Angular', 'ASP.NET Core', 'C#', 'PostgreSQL', 'Groq API', 'Docker'],
    live: 'https://stockmaster-48q.pages.dev/login',
    github: 'https://github.com/MohammadAlghazo/Inventory-Management-System',
    cover: {
      background: '#e4e8e8',
      foreground: '#344a4a',
      accent: '#809898',
      motif: 'identity',
      label: 'Make sense of what is in stock',
    },
  },
  {
    slug: 'python-automation',
    name: 'Automation workflows',
    category: 'Engineering',
    sector: 'Python & operational tooling',
    summary:
      'Purpose-built data collection, Telegram notifications, and scheduled tools for recurring operational work',
    role: 'Workflow design, Python development & integration',
    challenge:
      'Recurring data collection and time-sensitive notifications consume attention when handled manually',
    approach:
      'Developed focused scripts and integrations using Python, browser automation, webhooks, and scheduled execution',
    features: [
      {
        title: 'Scheduled data collection',
        detail:
          'Scraping and processing jobs turn source data into inputs for downstream workflows',
      },
      {
        title: 'Notifications where they are useful',
        detail:
          'Telegram integrations deliver monitoring updates without requiring a separate management interface',
      },
      {
        title: 'Tools shaped around a task',
        detail:
          'Webhooks and browser automation connect recurring actions with the systems used by the business',
      },
    ],
    stack: ['Python', 'Playwright', 'Requests', 'Telegram Bot API', 'Webhooks', 'AsyncIO'],
    status: 'Internal tools',
    cover: {
      background: '#e9e7df',
      foreground: '#4b4736',
      accent: '#9a906b',
      motif: 'compass',
      label: 'Less repetition. More useful work',
    },
  },
  {
    slug: 'budgetha',
    name: 'Budgetha',
    category: 'Engineering',
    sector: 'Personal finance PWA',
    summary: 'A personal finance web application with an installable, mobile-oriented experience',
    role: 'Web application development',
    challenge:
      'Personal finance tools should remain convenient to access on a phone without requiring a separate native application',
    approach:
      'Delivered a progressive web application hosted on Cloudflare Pages, keeping access through a web link and an installable experience',
    features: [
      {
        title: 'Web access, with an app-like entry point',
        detail:
          'The progressive web application supports use through a browser and installation on compatible devices',
      },
      {
        title: 'Mobile-oriented delivery',
        detail:
          'A responsive interface makes the personal finance application available across screen sizes',
      },
    ],
    stack: ['Progressive Web App', 'Responsive UI', 'Cloudflare Pages'],
    live: 'https://budgetha.pages.dev/?source=pwa',
    cover: {
      background: '#e7e9df',
      foreground: '#404c31',
      accent: '#919c74',
      motif: 'wordmark',
      label: 'A little more clarity, every day',
    },
  },
];
