import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { projects } from '../data/projects';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader 
          title="Öne Çıkan Projeler" 
          subtitle="Karmaşık web uygulamalarından deneysel kullanıcı arayüzü tasarımlarına kadar uzanan son çalışmalarımın bir seçkisi."
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="flex flex-col h-full border-white/5" hoverEffect>
                {/* Project Image Placeholder / Decorative background */}
                <div className="h-48 w-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-surface/40 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="text-text-muted/20 font-black text-6xl select-none group-hover:scale-110 transition-transform duration-700">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map(tech => (
                      <Badge key={tech} className="bg-primary/5 text-primary/80 border-primary/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-text-main group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-muted leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        <Button size="sm" className="gap-2">
                          <ExternalLink className="w-4 h-4" /> Canlı Demo
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Github className="w-4 h-4" /> Kaynak Kod
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
