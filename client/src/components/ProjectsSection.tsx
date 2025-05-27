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
  const isInView = useInView(ref, { once: true, amount: 0.2 });
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
    <section id="projects" className="py-12 sm:py-16 md:py-20 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space font-bold mb-4 sm:mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            A showcase of my latest work and creative solutions
          </p>
        </motion.div>
        
        {/* Project Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.value}
              className={`px-3 py-1.5 text-xs sm:px-4 sm:py-2 md:px-6 md:py-3 md:text-base rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-primary text-white"
                  : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white"
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card bg-background/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-primary/10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                  <div className="flex gap-2 sm:gap-3">
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        className="bg-primary text-white rounded-full hover:scale-105 transition-transform duration-200"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    )}
                    {project.codeUrl && (
                      <Button
                        size="sm"
                        className="bg-secondary text-white rounded-full hover:scale-105 transition-transform duration-200"
                        onClick={() => window.open(project.codeUrl, '_blank')}
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg md:text-xl font-space font-semibold mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2 sm:line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[10px] sm:text-xs whitespace-nowrap"
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
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <Button
            className="bg-gradient-to-r from-primary to-secondary px-6 py-2 sm:px-8 sm:py-4 rounded-full text-white text-sm sm:text-base font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
          >
            View All Projects
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
