import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/services', label: 'Serviços' },
    { path: '/about', label: 'Sobre' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contato' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/5"
      style={{ height: '64px' }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 h-full">
        <div className="flex items-center justify-between h-full">
          <Link 
            to="/" 
            className="group flex items-center space-x-3" 
            data-testid="logo-link"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="https://customer-assets.emergentagent.com/job_9e23b2a9-51c7-41cd-83a7-5e8d7fdabac6/artifacts/s8lrwfvo_WhatsApp%20Image%202026-02-03%20at%2020.50.39.jpeg"
                alt="Monik Reffatti Nails"
                className="h-10 w-10 rounded-full object-cover relative z-10"
              />
            </motion.div>
            <span className="font-serif text-lg font-light tracking-wide hidden sm:block">
              Monik Reffatti
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className="relative group"
              >
                <span className={`text-xs uppercase tracking-[0.2em] font-extralight transition-opacity duration-300 ${
                  isActive(link.path)
                    ? 'text-accent opacity-100'
                    : 'text-foreground/60 hover:text-foreground hover:opacity-100'
                }`}>
                  {link.label}
                </span>
                <motion.span
                  className="absolute -bottom-1 left-1/2 h-[0.5px] bg-accent"
                  initial={{ width: 0, x: '-50%' }}
                  animate={{ 
                    width: isActive(link.path) ? '100%' : 0,
                    x: '-50%'
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.span
                  className="absolute -bottom-1 left-1/2 h-[0.5px] bg-foreground/30"
                  initial={{ width: 0, x: '-50%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="https://wa.me/5541985067554?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-cta-button"
              className="px-6 py-2 text-xs uppercase tracking-[0.2em] font-light border border-accent/40 text-accent hover:bg-accent hover:text-primary-foreground transition-all duration-500 rounded-none"
            >
              Agendar
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-foreground/60 hover:text-foreground transition-colors"
            data-testid="mobile-menu-button"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
            </motion.div>
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-6 space-y-4 border-t border-white/5">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: mobileMenuOpen ? 0 : -20,
                  opacity: mobileMenuOpen ? 1 : 0
                }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                  className={`block text-sm uppercase tracking-[0.2em] font-extralight transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-accent pl-4'
                      : 'text-foreground/60 hover:text-foreground hover:pl-4'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ 
                x: mobileMenuOpen ? 0 : -20,
                opacity: mobileMenuOpen ? 1 : 0
              }}
              transition={{ 
                delay: navLinks.length * 0.1,
                duration: 0.3
              }}
              className="pt-4"
            >
              <a
                href="https://wa.me/5541985067554?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."
                target="_blank"
                rel="noopener noreferrer"
                data-testid="mobile-cta-button"
                className="inline-block px-6 py-2 text-xs uppercase tracking-[0.2em] font-light border border-accent/40 text-accent hover:bg-accent hover:text-primary-foreground transition-all duration-500 rounded-none"
              >
                Agendar
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
