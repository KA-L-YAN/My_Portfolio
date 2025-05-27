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

function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeFilter, setActiveFilter] = useState("all");
  const magneticRef = useMagnetic();

  const projects: Project[] = [
    {
      id: "1",
      title: "Vehicle Service Management System",
      description: "A comprehensive system for managing vehicle service operations, including service scheduling, inventory tracking, and customer management with automated service reminders.",
      image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "web",
      technologies: ["Spring Boot", "MySQL", "Java"],
      demoUrl: "#",
      codeUrl: "https://github.com/KA-L-YAN/VehicleServiceManagement"
    },
    {
      id: "2",
      title: "Brain Tumor Detection",
      description: "Deep learning-based system for automated brain tumor detection and classification using MRI scans. Implements advanced image processing and CNN architecture for accurate medical diagnosis assistance.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "ml",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Scikit-learn"],
      demoUrl: "#",
      codeUrl: "https://github.com/KA-L-YAN/Brain_tumor_detection_bpk"
    },
    {
      id: "3",
      title: "Creative Portfolio",
      description: "Modern and responsive personal portfolio website featuring smooth animations, interactive UI elements, and a dark theme. Implements best practices in web development with a focus on user experience.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "web",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: "4",
      title: "Bird Species Identification",
      description: "AI-powered model for real-time bird species identification using computer vision. Features transfer learning with pre-trained models and custom dataset training.",
      image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "ml",
      technologies: ["Python", "TensorFlow", "Streamlit", "OpenCV"],
      demoUrl: "#",
      codeUrl: "https://github.com/KA-L-YAN/Bird-Species-Recognition"
    },
    {
      id: "5",
      title: "SuperMarket Sale Analysis",
      description: "Advanced data analytics system for retail sales prediction using machine learning. Features sales forecasting, customer segmentation, and inventory optimization with interactive dashboards for business insights.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "ml",
      technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
      demoUrl: "#",
      codeUrl: "https://github.com/KA-L-YAN/BB-Internship-Project"
    },
    {
      id: "6",
      title: "My First Ever Protfolio Website",
      description: "My first venture into web development - a personal portfolio showcasing my initial projects. Built from scratch using fundamental web technologies, this project marked the beginning of my journey in web development.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://kalyan-here.netlify.app/",
      codeUrl: "https://github.com/KA-L-YAN/Personal-Website"
    },
  ];

  const filters = [
    { label: "All", value: "all" },
    { label: "Web Apps", value: "web" },
    { label: "Machine Learning", value: "ml" },
    { label: "More", value: "more" },
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
                          onClick={() => window.open(project.demoUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                      )}
                      {project.codeUrl && (
                        <motion.button
                          className="bg-secondary text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.open(project.codeUrl, '_blank')}
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

export default ProjectsSection;
