import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { skillCategories } from '../data/skills';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 bg-surface/30 border-y border-surface-border/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader 
          title="Kullandığım Teknolojiler" 
          subtitle="Fikirleri hayata geçirmek için kullandığım araç ve teknolojilerin kapsamlı bir listesi."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <Card className="p-6 h-full flex flex-col border-t border-t-white/5">
                <h3 className="text-lg font-bold mb-4 text-text-main border-b border-surface-border/50 pb-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {category.skills.map(skill => (
                    <Badge key={skill} className="bg-surface-border/50 text-text-main border-surface-border hover:bg-surface-border hover:text-primary transition-colors cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
