import { z } from "zod"

const imageSchema = z.string().trim().min(1).max(1000).refine((value) => value.startsWith("/") || value.startsWith("https://") || value.startsWith("neon:"), "Use a local path, HTTPS image URL or Neon storage key")

export const projectSchema = z.object({
  slug: z.string().trim().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(80),
  number: z.string().trim().min(1).max(8),
  title: z.string().trim().min(2).max(120),
  summary: z.string().trim().min(10).max(240),
  description: z.string().trim().min(20).max(1000),
  category: z.string().trim().min(2).max(80),
  tags: z.array(z.string().trim().min(1).max(40)).max(12),
  metric: z.string().trim().max(30),
  metricLabel: z.string().trim().max(80),
  role: z.string().trim().min(2).max(120),
  timeline: z.string().trim().min(2).max(80),
  status: z.string().trim().min(2).max(80),
  problem: z.string().trim().min(20).max(1500),
  approach: z.string().trim().min(20).max(1500),
  decisions: z.array(z.string().trim().min(5).max(500)).min(1).max(10),
  results: z.array(z.string().trim().min(5).max(500)).min(1).max(10),
  image: imageSchema,
  externalUrl: z.union([z.url(), z.literal("")]).optional(),
  repoUrl: z.union([z.url(), z.literal("")]).optional(),
})

export const achievementSchema = z.object({
  id: z.string().trim().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(80),
  title: z.string().trim().min(2).max(120),
  year: z.string().trim().min(2).max(40),
  category: z.string().trim().min(2).max(80),
  description: z.string().trim().min(10).max(500),
  image: imageSchema,
  imageAlt: z.string().trim().min(5).max(250),
})

export const siteContentSchema = z.object({
  projects: z.array(projectSchema).max(30),
  achievements: z.array(achievementSchema).max(60),
}).refine((value) => new Set(value.projects.map((item) => item.slug)).size === value.projects.length, "Project slugs must be unique")
  .refine((value) => new Set(value.achievements.map((item) => item.id)).size === value.achievements.length, "Achievement IDs must be unique")
