import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skillCategories = [
    {
      title: "Core Languages",
      skills: ["C#", "TypeScript", "JavaScript", "Java", "Python", "SQL"]
    },
    {
      title: "Frontend & UI",
      skills: ["Angular", "RxJS", "GSAP", "HTML5", "CSS3", "PWA", "Responsive Design"]
    },
    {
      title: "Backend & API",
      skills: [".NET / ASP.NET Core", "Entity Framework", "REST APIs", "JWT Auth", "SignalR", "Spring Boot"]
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "SQL Server", "Supabase", "MongoDB", "Entity Framework Migrations"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Cloudflare Pages", "Render", "Cloudinary", "Supabase", "Docker", "Git & GitHub", "CI/CD"]
    },
    {
      title: "AI & Integrations",
      skills: ["OpenAI API", "AI API Integration", "Webhooks", "Third-Party APIs", "OAuth 2.0"]
    }
  ];
}
