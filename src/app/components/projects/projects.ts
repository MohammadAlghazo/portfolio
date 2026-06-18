import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
    {
      title: 'Kawadir HRMS',
      description: 'A comprehensive Human Resource Management System built full-stack. Features include employee management, attendance tracking, payroll, leave management, role-based permissions, and a real-time dashboard. Deployed on Cloudflare Pages with a .NET backend and PostgreSQL database.',
      tech: ['Angular', '.NET / ASP.NET Core', 'PostgreSQL', 'Cloudflare', 'Entity Framework', 'JWT Auth'],
      github: 'https://github.com/MohammadAlghazo',
      live: 'https://kawadir-hrms.pages.dev',
      featured: true
    },
    {
      title: 'AI-Powered Web App',
      description: 'A Progressive Web App integrating third-party AI services via API keys to deliver intelligent features. Built with offline support and a native app-like experience across all devices.',
      tech: ['Angular', 'OpenAI API', 'PWA', '.NET', 'REST APIs'],
      github: 'https://github.com/MohammadAlghazo',
      live: '',
      featured: false
    },
    {
      title: 'Cloud-Deployed REST API',
      description: 'A scalable RESTful backend built with .NET and PostgreSQL hosted on Supabase. Implements JWT authentication, role-based access control, and is deployed on Render with media managed via Cloudinary.',
      tech: ['.NET Core', 'PostgreSQL', 'Supabase', 'Render', 'Cloudinary', 'JWT'],
      github: 'https://github.com/MohammadAlghazo',
      live: '',
      featured: false
    }
  ];
}
