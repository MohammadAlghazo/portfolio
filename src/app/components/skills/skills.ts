import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  imports: [RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly capabilities = [
    {
      title: 'Interfaces & product',
      description:
        'Responsive interfaces, Arabic RTL experiences, and the workflows people use every day',
      tools: 'Next.js · React · Angular · TypeScript · Tailwind CSS',
      example: 'Huwia',
      slug: 'huwia',
    },
    {
      title: 'APIs & data',
      description:
        'Relational models, practical APIs, authentication, and role-based business systems',
      tools: 'Node.js · ASP.NET Core · C# · Prisma · PostgreSQL · MySQL',
      example: 'Kawadir',
      slug: 'kawadir',
    },
    {
      title: 'Infrastructure & delivery',
      description:
        'Taking an application from a local build to a containerized production environment',
      tools: 'Docker · Linux · Coolify · VPS · Cloudflare · Git',
      example: 'PLACE ON',
      slug: 'place-on',
    },
    {
      title: 'Automation & integrations',
      description:
        'Data collection, notifications, payment integrations, and focused AI-assisted workflows',
      tools: 'Python · Playwright · Webhooks · Telegram API · Groq',
      example: 'Bosala',
      slug: 'bosala',
    },
  ];
}
