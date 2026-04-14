import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { profile } from '../data/profile';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader 
              title="İletişime Geçin" 
              subtitle="Aklınızda bir proje mi var yoksa sadece sohbet mi etmek istiyorsunuz? Bana ulaşmaktan çekinmeyin!"
            />
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-surface-border/30 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-1">E-posta Gönder</p>
                  <a href={`mailto:${profile.socials.email}`} className="text-lg font-medium hover:text-primary transition-colors">
                    {profile.socials.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-6">
                <a href={profile.socials.github} target="_blank" rel="noreferrer" className="w-12 h-12 glass border-white/5 rounded-full flex items-center justify-center hover:bg-surface/50 hover:text-primary transition-all">
                  <Github className="w-6 h-6" />
                </a>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 glass border-white/5 rounded-full flex items-center justify-center hover:bg-surface/50 hover:text-primary transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-white/5">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-text-muted ml-1">Adınız</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-background/50 border border-surface-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-text-muted/40"
                      placeholder="Ad Soyad"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-text-muted ml-1">E-posta Adresiniz</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-background/50 border border-surface-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-text-muted/40"
                      placeholder="ornek@eposta.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-text-muted ml-1">Mesajınız</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-background/50 border border-surface-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-text-muted/40 resize-none"
                    placeholder="Projenizden bahsedin..."
                  />
                </div>

                <Button className="w-full gap-2 py-4 h-auto text-lg">
                  <Send className="w-5 h-5" /> Mesaj Gönder
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
