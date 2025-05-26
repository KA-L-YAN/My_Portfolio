import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";

export default function HeroSection() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  const phrases = [
    "Creative Frontend Developer",
    "UI/UX Designer", 
    "Animation Specialist",
    "Digital Experience Creator"
  ];

  const magneticRef = useMagnetic();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const typeText = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isTyping) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          timeout = setTimeout(typeText, 100);
        } else {
          timeout = setTimeout(() => setIsTyping(false), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          timeout = setTimeout(typeText, 50);
        } else {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setIsTyping(true);
        }
      }
    };

    timeout = setTimeout(typeText, 100);
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentPhraseIndex, phrases]);

  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-purple-900/20" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-accent/30 rounded-full"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-24 h-24 bg-secondary/25 rounded-full"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full"
        style={{ background: "hsl(var(--accent-pink) / 0.2)" }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-space font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span
              className="block overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Hello, I'm
            </motion.span>
            <motion.span
              className="block overflow-hidden gradient-text"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              Alex Chen
            </motion.span>
          </motion.h1>
          
          <motion.div
            className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto h-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span>{displayText}</span>
            <motion.span
              className="ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.div>
          
          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div ref={magneticRef}>
              <Button
                className="bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full text-white font-semibold shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
                onClick={() => smoothScroll("projects")}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div ref={magneticRef}>
              <Button
                variant="outline"
                className="border-2 border-primary px-8 py-4 rounded-full text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                onClick={() => smoothScroll("contact")}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center cursor-pointer"
             onClick={() => smoothScroll("about")}>
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
