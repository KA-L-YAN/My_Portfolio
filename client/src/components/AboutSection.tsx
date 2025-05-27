import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Lightbulb, Heart } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { value: "1+", label: "Years", delay: 0 },
    { value: "7+", label: "Projects", delay: 0.2 },
    { value: "5+", label: "Badges", delay: 0.4 },
  ];

  const aboutItems = [
    {
      icon: User,
      title: "Who I Am",
      content: "I'm a creative developer with 1+ years of experience in crafting exceptional digital experiences. I specialize in Web development, Machine Learning, and Databases.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Lightbulb,
      title: "What I Do",
      content: "I transform ideas into stunning digital realities through modern web technologies, creating responsive designs that captivate users and drive business success.",
      gradient: "from-secondary to-pink-500"
    },
    {
      icon: Heart,
      title: "What I Love",
      content: "I'm passionate about pushing the boundaries of web development, exploring new technologies, and creating seamless user experiences that leave lasting impressions.",
      gradient: "from-accent to-pink-500"
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital experiences that inspire and engage
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div className="about-content space-y-8">
            {aboutItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="about-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mr-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-space font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.div
            className="about-visual relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/prof.jpg"
                  alt="Professional developer portrait"
                  className="w-full h-full object-cover object-[center_40%] scale-125"
                />
              </motion.div>
              
              {/* Floating Stats */}
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={`absolute glass rounded-2xl p-4 ${
                    index === 0 ? "-top-4 -right-4" :
                    index === 1 ? "-bottom-4 -left-4" :
                    "top-1/2 -left-8"
                  }`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -10, 0]
                  } : { 
                    opacity: 0, 
                    scale: 0 
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 1 + stat.delay },
                    scale: { duration: 0.6, delay: 1 + stat.delay },
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: stat.delay
                    }
                  }}
                >
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${
                      index === 0 ? "text-primary" :
                      index === 1 ? "text-secondary" :
                      "text-accent"
                    }`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
