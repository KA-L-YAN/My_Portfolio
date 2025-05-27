import { useEffect } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import ParticleBackground from "./ParticleBackground";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function Portfolio() {
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-indicator"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      
      {/* Floating Particles Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900/50 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="text-3xl font-space font-bold gradient-text mb-4">
              Pavan Kalyan
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Creating digital experiences that inspire and engage. 
              Let's build something amazing together.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-300">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-300">Skills</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-muted-foreground">
              © 2025 Pavan Kalyan. All rights reserved. Built with passion and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
