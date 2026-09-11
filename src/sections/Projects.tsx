import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { fetchProjects, type GitHubRepo } from '../lib/github';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Github, ExternalLink, Loader2 } from 'lucide-react';

export const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepos = async () => {
      const data = await fetchProjects();
      setRepos(data);
      setLoading(false);
    };
    loadRepos();
  }, []);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader 
          title="Öne Çıkan Çalışmalar" 
          subtitle="GitHub üzerindeki en güncel ve profesyonel projelerimin canlı demoları ve kaynak kodları."
        />
        
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {repos.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="flex flex-col h-full border-white/5 bg-surface/30 backdrop-blur-xl overflow-hidden group" hoverEffect>
                  {/* Decorative Header */}
                  <div className="h-3 w-full bg-gradient-to-r from-primary via-secondary to-accent opacity-70" />
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.language && (
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            {project.language}
                          </Badge>
                        )}
                      </div>
                      <span className="text-text-muted/40 text-xs font-mono">#{project.id.toString().slice(-4)}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-text-main group-hover:text-primary transition-colors capitalize">
                      {project.name.replace(/-/g, ' ')}
                    </h3>
                    
                    <p className="text-text-muted text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                      {project.description || "Bu proje için henüz bir açıklama girilmemiş."}
                    </p>
                    
                    <div className="flex items-center gap-3 mt-auto pt-6 border-t border-white/5">
                      <a href={project.html_url} target="_blank" rel="noreferrer" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full gap-2 text-xs border-white/10 hover:bg-white/5 translate-y-0 active:scale-95 transition-all">
                          <Github className="w-3.5 h-3.5" /> Kod
                        </Button>
                      </a>
                      {/* Use deployment link if exists, otherwise github pages convention */}
                      <a 
                        href={project.homepage || `https://Emretetik0.github.io/${project.name}`} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full gap-2 text-xs translate-y-0 active:scale-95 transition-all">
                          <ExternalLink className="w-3.5 h-3.5" /> Demo
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
