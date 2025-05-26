import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeFilter, setActiveFilter] = useState("all");
  const magneticRef = useMagnetic();

  const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced filtering, payment integration, and responsive design.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: "2",
      title: "Fitness Tracker App",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with real-time sync.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: "3",
      title: "Creative Portfolio",
      description: "Interactive portfolio website with advanced animations, 3D elements, and immersive user experience.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "web",
      technologies: ["Three.js", "GSAP", "WebGL"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: "4",
      title: "Banking App UI",
      description: "Complete UI/UX design for a modern banking application with focus on security and user experience.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "design",
      technologies: ["Figma", "Principle", "Adobe XD"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: "5",
      title: "Analytics Dashboard",
      description: "Comprehensive data visualization platform with real-time charts, interactive filters, and export capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "web",
      technologies: ["D3.js", "Vue.js", "Python"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: "6",
      title: "Social Network App",
      description: "Feature-rich social networking app with real-time messaging, media sharing, and community features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "mobile",
      technologies: ["Flutter", "GraphQL", "AWS"],
      demoUrl: "#",
      codeUrl: "#"
    },
  ];

  const filters = [
    { label: "All", value: "all" },
    { label: "Web Apps", value: "web" },
    { label: "Mobile", value: "mobile" },
    { label: "Design", value: "design" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="min-h-screen py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work and creative solutions
          </p>
        </motion.div>
        
        {/* Project Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.value}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-primary text-white"
                  : "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white"
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass rounded-2xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                rotateX: 2,
                z: 50
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <motion.button
                          className="bg-primary text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                      )}
                      {project.codeUrl && (
                        <motion.button
                          className="bg-secondary text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-space font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <motion.div ref={magneticRef}>
            <Button
              className="bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
