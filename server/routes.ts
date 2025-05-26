import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertProjectSchema, insertSkillSchema, insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Portfolio API routes
  
  // Projects routes
  app.get("/api/projects", async (req, res) => {
    try {
      const { category } = req.query;
      const projects = category 
        ? await storage.getProjectsByCategory(category as string)
        : await storage.getProjects();
      res.json(projects);
    } catch (error) {
      console.error(`Error fetching projects: ${error}`);
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  app.get("/api/projects/featured", async (req, res) => {
    try {
      const projects = await storage.getFeaturedProjects();
      res.json(projects);
    } catch (error) {
      console.error(`Error fetching featured projects: ${error}`);
      res.status(500).json({ error: "Failed to fetch featured projects" });
    }
  });

  app.post("/api/projects", async (req, res) => {
    try {
      const validatedData = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(validatedData);
      res.status(201).json(project);
    } catch (error) {
      console.error(`Error creating project: ${error}`);
      res.status(400).json({ error: "Failed to create project" });
    }
  });

  // Skills routes
  app.get("/api/skills", async (req, res) => {
    try {
      const { category } = req.query;
      const skills = category 
        ? await storage.getSkillsByCategory(category as string)
        : await storage.getSkills();
      res.json(skills);
    } catch (error) {
      console.error(`Error fetching skills: ${error}`);
      res.status(500).json({ error: "Failed to fetch skills" });
    }
  });

  app.post("/api/skills", async (req, res) => {
    try {
      const validatedData = insertSkillSchema.parse(req.body);
      const skill = await storage.createSkill(validatedData);
      res.status(201).json(skill);
    } catch (error) {
      console.error(`Error creating skill: ${error}`);
      res.status(400).json({ error: "Failed to create skill" });
    }
  });

  // Contact routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ 
        message: "Thank you for your message! I'll get back to you soon.",
        id: submission.id 
      });
    } catch (error) {
      console.error(`Error creating contact submission: ${error}`);
      res.status(400).json({ error: "Failed to submit contact form" });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error(`Error fetching contact submissions: ${error}`);
      res.status(500).json({ error: "Failed to fetch contact submissions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
