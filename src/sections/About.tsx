import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Code2, Lightbulb, Zap } from 'lucide-react';

const highlights = [
  {
    title: "Temiz Mimari",
    description: "İyi yapılandırılmış, bakımı kolay ve ölçeklenebilir kod tabanları oluşturuyorum.",
    icon: <Code2 className="w-6 h-6 text-primary" />
  },
  {
    title: "Problem Çözücü",
    description: "Karmaşık zorlukları stratejik ve verimli çözümlerle ele alıyorum.",
    icon: <Lightbulb className="w-6 h-6 text-accent" />
  },
  {
    title: "Önce Performans",
    description: "Her piksel ve bayt, yıldırım hızında bir deneyim için optimize edilmiştir.",
    icon: <Zap className="w-6 h-6 text-secondary" />
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader 
          title="Hakkımda" 
          subtitle="Hem alttaki koda hem de üstteki kullanıcı deneyimine önem veren bir geliştiriciyim." 
        />
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {highlights.map((item, i) => (
             <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
             >
                <Card className="p-6 h-full flex flex-col border-t border-t-white/5" hoverEffect>
                  <div className="w-12 h-12 bg-surface-border/50 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-text-main">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed">{item.description}</p>
                </Card>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
