import { profile } from '../data/profile';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-surface-border/30 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm font-medium tracking-tight">
            {profile.name.split(' ')[0]}<span className="text-primary">.dev</span>
          </p>
        </div>
        
        <p className="text-text-muted text-sm text-center">
          &copy; {currentYear} • Tutku ve hassasiyetle el yapımı olarak üretildi.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#hero" className="text-sm text-text-muted hover:text-text-main transition-colors">Başa dön</a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-sm text-text-muted hover:text-text-main transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};
