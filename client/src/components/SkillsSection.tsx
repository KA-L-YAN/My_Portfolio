import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Brain } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const magneticRef = useMagnetic();

  const skillCategories = [
    {
      icon: Code,
      title: "Web Dev",
      gradient: "from-primary to-secondary",
      skills: [
        { name: "React.js", level: 75 },
        { name: "Spring Boot", level: 82 },
        { name: "Java", level: 78 },
      ]
    },
    {
      icon: Brain,
      title: "Machine Learning",
      gradient: "from-secondary to-pink-500",
      skills: [
        { name: "TensorFlow/PyTorch", level: 85 },
        { name: "Scikit-Learn", level: 90 },
        { name: "Deep Learning", level: 80 },
      ]
    },
    {
      icon: Database,
      title: "Database",
      gradient: "from-accent to-pink-500",
      skills: [
        { name: "MySQl", level: 87 },
        { name: "Python", level: 82 },
        { name: "MongoDB", level: 78 },
      ]
    },
  ];

  const technologies = [
    "Spring Boot", "Java", "Python", "TensorFlow", "MySQL", "MongoDB", "Scikit-Learn", "REST APIs", "Hibernate", "Git"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-900/10 to-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="skill-category glass rounded-2xl p-8 hover:scale-105 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                ref={magneticRef}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-space font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="skill-item">
                      <div className="flex justify-between mb-2">
                        <span>{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 skill-bar overflow-hidden">
                        <motion.div
                          className={`bg-gradient-to-r ${category.gradient} h-2 rounded-full skill-progress`}
                          initial={{ width: "0%" }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: "0%" }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: "easeOut" 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Interactive Skills Showcase */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-space font-semibold mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="tech-item glass rounded-full px-6 py-3 cursor-pointer magnetic"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.2 + index * 0.1,
                  ease: "easeOut" 
                }}
                ref={magneticRef}
              >
                <span className="text-lg font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
