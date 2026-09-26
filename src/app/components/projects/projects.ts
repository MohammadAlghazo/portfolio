import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProjectItem {
  title: string;
  badge: string;
  badgeType?: 'featured' | 'production' | 'enterprise' | 'ai' | 'automation';
  description: string;
  tech: string[];
  live?: string;
  github?: string;
  featured?: boolean;
  logoUrl?: string;
  monogram?: string;
}

export interface ClientDeployment {
  name: string;
  category: string;
  url: string;
  tech: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: ProjectItem[] = [
    {
      title: 'Place On — Workspace Marketplace & SaaS',
      badge: 'Featured SaaS',
      badgeType: 'featured',
      description: 'Scalable digital marketplace connecting enterprises with flexible workspaces across Saudi Arabia. Features split tenant/provider onboarding portals, multi-criteria search, inquiry request funnels, and an operational admin control room.',
      tech: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'MySQL', 'Coolify', 'VPS', 'Docker'],
      live: 'https://place-on.com/',
      featured: true,
      monogram: 'PO'
    },
    {
      title: 'Bosala (بوصلة المتاجر) — E-Commerce Intelligence SaaS',
      badge: 'Intelligence SaaS',
      badgeType: 'featured',
      description: 'SaaS intelligence platform for Saudi e-commerce merchants tracking trending products, market graphs, and purchasing metrics. Powered by automated daily Python scraping pipelines feeding into Supabase.',
      tech: ['Next.js', 'Python Automation', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
      live: 'https://www.bosala.best/',
      featured: true,
      monogram: 'BS'
    },
    {
      title: 'Trade Nox Platform Rebuild',
      badge: 'Production Platform',
      badgeType: 'production',
      description: "Spearheaded the complete re-engineering of Trade Nox's flagship platform from WordPress to a high-speed custom Next.js/Node.js stack with an administrative dashboard, drastically boosting page load speeds and SEO ranking.",
      tech: ['Next.js', 'Node.js', 'Tailwind CSS', 'VPS', 'Docker', 'SEO Architecture'],
      live: 'https://trade-nox.com/',
      featured: false,
      monogram: 'TN'
    },
    {
      title: 'Kawadir (كوادر) — Enterprise HRMS Platform',
      badge: 'Enterprise HRMS',
      badgeType: 'enterprise',
      description: 'Full-stack HRMS managing employee lifecycles, attendance, payroll workflows, and role-based organizational hierarchies. Built with Clean Architecture, ASP.NET Core Web API, Angular, Docker, and Cloudflare.',
      tech: ['ASP.NET Core', 'Angular', 'PostgreSQL', 'Docker', 'Cloudflare', 'Render', 'JWT/RBAC'],
      live: 'https://kawadir-hrms.pages.dev/',
      github: 'https://github.com/MohammadAlghazo/HRMS',
      featured: false,
      logoUrl: 'hrms_logo.png'
    },
    {
      title: 'StockMaster — AI-Assisted Inventory Management',
      badge: 'AI-Integrated SaaS',
      badgeType: 'ai',
      description: 'Smart inventory platform integrated with Groq LLM API for natural-language stock queries and automated restock suggestions based on inventory velocity. Enterprise security and containerized deployments.',
      tech: ['ASP.NET Core', 'Angular', 'Groq API (LLM)', 'PostgreSQL', 'Docker', 'Cloudflare'],
      live: 'https://stockmaster-48q.pages.dev/login',
      github: 'https://github.com/MohammadAlghazo/Inventory-Management-System',
      featured: false,
      logoUrl: 'inventory_logo.png'
    },
    {
      title: 'Python Automation & Bot Suite',
      badge: 'Automation Suite',
      badgeType: 'automation',
      description: 'Custom automation bots and scraping pipelines including a real-time financial market/gold alert Telegram bot and high-speed automated booking webhook tools with cron-scheduled tasks.',
      tech: ['Python', 'Telegram Bot API', 'Playwright', 'Webhooks', 'AsyncIO', 'Data Pipelines'],
      featured: false,
      monogram: 'PY'
    }
  ];

  clientDeployments: ClientDeployment[] = [
    {
      name: 'Smaa Cars',
      category: 'Automotive Marketplace',
      url: 'https://smaacars.com/',
      tech: 'Next.js · Node.js · Cloud VPS'
    },
    {
      name: 'Clavel Dental',
      category: 'Medical & Dental Clinic',
      url: 'https://www.claveldental.com/',
      tech: 'Modern Web · Responsive UI'
    },
    {
      name: 'SWL Law Firm',
      category: 'Corporate Legal Practice (KSA)',
      url: 'https://www.swl-lawfirm.com.sa/',
      tech: 'Corporate Portal · SEO'
    },
    {
      name: 'Budgetha PWA',
      category: 'Personal Finance Platform',
      url: 'https://budgetha.pages.dev/?source=pwa',
      tech: 'Progressive Web App · Cloudflare'
    }
  ];
}
