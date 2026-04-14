import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Premium Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 blur-[140px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Badge className="bg-surface/40 backdrop-blur-xl border border-white/5 px-5 py-2 text-xs uppercase tracking-widest shadow-2xl text-primary font-bold">
            <Sparkles className="w-3.5 h-3.5 mr-2 animate-pulse" />
            Full-Stack Engineer & Architect
          </Badge>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
        >
          <span className="block text-text-main">CREATIVE</span>
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block">DEVELOPMENT</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mb-12 leading-relaxed font-medium"
        >
          Modern teknolojilerle yüksek performanslı dijital deneyimler inşa ediyorum. 
          <span className="text-text-main font-semibold"> Next.js 15, React 19 ve TypeScript</span> uzmanlığı ile 
          karmaşık problemleri şık çözümlere dönüştürüyorum.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-5 mb-16"
        >
          <a href="#projects" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95">
              Projeleri Keşfet
            </Button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-10 text-base border-white/10 hover:bg-white/5 active:scale-95 transition-all">
              Bana Ulaşın
            </Button>
          </a>
        </motion.div>

        {/* Social Links Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-10 text-text-muted/60"
        >
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-all duration-300 transform hover:scale-125">
            <Github className="w-7 h-7" />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-all duration-300 transform hover:scale-125">
            <Linkedin className="w-7 h-7" />
          </a>
          <a href={`mailto:${profile.socials.email}`} className="hover:text-primary transition-all duration-300 transform hover:scale-125">
            <Mail className="w-7 h-7" />
          </a>
        </motion.div>
      </div>

      {/* Decorative side text */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 rotate-90 hidden lg:block">
        <span className="text-[140px] font-black text-white/5 select-none pointer-events-none">PORTFOLIO</span>
      </div>
    </section>
  );
};
