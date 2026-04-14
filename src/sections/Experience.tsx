import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { experiences } from '../data/experience';
import { Card } from '../components/Card';
import { Calendar, Briefcase } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description?: string;
}

export const Experience = () => {
  const experienceData = experiences as ExperienceItem[];

  return (
    <section id="experience" className="py-24 relative z-10 bg-surface/30 border-y border-surface-border/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader 
          title="Profesyonel Yolculuk" 
          subtitle="Kariyer gelişimimin bir zaman çizelgesi ve yol boyunca edindiğim değerli deneyimler."
        />
        
        <div className="mt-16 relative">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />
          
          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal group ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 group-hover:scale-125 transition-transform duration-300" />
                
                {/* Content Card */}
                <div className="ml-8 md:ml-0 md:w-1/2 w-full px-0 md:px-8">
                  <Card className="p-6 border-white/5" hoverEffect>
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-text-main mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-text-muted mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.company}</span>
                    </div>
                    
                    {exp.description && (
                      <p className="text-text-muted leading-relaxed text-sm">
                        {exp.description}
                      </p>
                    )}
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
