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
      description: 'A production-deployed, full-stack Human Resources Management System handling employee management, payroll, attendance, and role-based access. Features a real-time dashboard and an integrated AI assistant (Groq API). Containerized with Docker, backend on Render, frontend on Cloudflare Pages.',
      tech: ['Angular', '.NET Core', 'PostgreSQL', 'Docker', 'Render', 'Cloudflare', 'Groq API'],
      github: 'https://github.com/MohammadAlghazo/HRMS',
      live: 'https://kawadir-hrms.pages.dev',
      featured: true,
      logoUrl: 'hrms_logo.png'
    },
    {
      title: 'StockMaster — Inventory Management',
      description: 'A full-stack Inventory Management System built for real-world use. Tracks stock, orders, and suppliers with role-based access control and an integrated AI assistant (Groq API) for smart insights. Containerized with Docker, deployed on Render & Cloudflare Pages.',
      tech: ['Angular', '.NET Core', 'PostgreSQL', 'Docker', 'Render', 'Cloudflare', 'Groq API'],
      github: 'https://github.com/MohammadAlghazo/Inventory-Management-System',
      live: 'https://stockmaster-48q.pages.dev',
      featured: true,
      logoUrl: 'inventory_logo.png'
    }
  ];
}
