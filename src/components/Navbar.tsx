import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './Button';
import { profile } from '../data/profile';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hakkımda', href: '#about' },
    { name: 'Yetenekler', href: '#skills' },
    { name: 'Projeler', href: '#projects' },
    { name: 'Deneyim', href: '#experience' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter">
          {profile.name.split(' ')[0]}<span className="text-primary">.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact">
            <Button variant="primary" size="sm">İletişime Geç</Button>
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-text-main focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass border-t border-surface-border p-4 md:hidden flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="px-4 py-2 text-text-muted hover:text-text-main hover:bg-surface/50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="primary" className="w-full">İletişime Geç</Button>
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};
