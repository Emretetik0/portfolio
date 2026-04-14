import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 translate-x-[-20%] translate-y-[-60%] w-[400px] h-[300px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Badge className="bg-surface/50 backdrop-blur-md border border-surface-border px-4 py-1.5 text-sm shadow-xl">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
            Yeni fırsatlar için müsait
          </Badge>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          <span className="block">{profile.role}</span>
          <span className="text-gradient block mt-2">{profile.headline}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed"
        >
          {profile.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <a href="#projects">
            <Button size="lg" className="w-full sm:w-auto">Projeleri Gör</Button>
          </a>
          <a href="#contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">İletişime Geç</Button>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-6 text-text-muted"
        >
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors p-2 hover:bg-surface/50 rounded-full">
            <Github className="w-6 h-6" />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors p-2 hover:bg-surface/50 rounded-full">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${profile.socials.email}`} className="hover:text-primary transition-colors p-2 hover:bg-surface/50 rounded-full">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
