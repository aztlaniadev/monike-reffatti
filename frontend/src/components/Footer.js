import { Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-16 pb-12">
          <div className="col-span-1">
            <img 
              src="https://customer-assets.emergentagent.com/job_9e23b2a9-51c7-41cd-83a7-5e8d7fdabac6/artifacts/s8lrwfvo_WhatsApp%20Image%202026-02-03%20at%2020.50.39.jpeg"
              alt="Monik Reffatti Nails"
              className="h-16 w-16 rounded-full object-cover mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              Elegância em cada detalhe. Transformando suas mãos em obras de arte.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-serif font-normal mb-6 text-foreground tracking-wide">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-xs text-muted-foreground hover:text-accent transition-colors font-light tracking-wide" data-testid="footer-link-home">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-xs text-muted-foreground hover:text-accent transition-colors font-light tracking-wide" data-testid="footer-link-services">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-xs text-muted-foreground hover:text-accent transition-colors font-light tracking-wide" data-testid="footer-link-about">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-xs text-muted-foreground hover:text-accent transition-colors font-light tracking-wide" data-testid="footer-link-blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-serif font-normal mb-6 text-foreground tracking-wide">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-xs text-muted-foreground font-light">
                <Phone size={14} className="mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span>(41) 98506-7554</span>
              </li>
              <li className="flex items-start space-x-3 text-xs text-muted-foreground font-light">
                <Mail size={14} className="mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span>contato@monikreffatti.com</span>
              </li>
              <li className="flex items-start space-x-3 text-xs text-muted-foreground font-light">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span>Curitiba, Paraná</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-serif font-normal mb-6 text-foreground tracking-wide">Redes Sociais</h3>
            <div className="flex space-x-3">
              <motion.a
                href="https://instagram.com/monik_reffatti"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="instagram-link"
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </motion.a>
              <motion.a
                href="https://wa.me/5541985067554"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="whatsapp-link"
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} strokeWidth={1.5} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 font-light"
            >
              © {new Date().getFullYear()} Monik Reffatti Nails. Todos os direitos reservados.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 font-light">
                Designed & Developed by
              </span>
              <motion.a
                href="https://alandroriz.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 hover:text-accent font-light transition-all duration-500"
                whileHover={{ opacity: 1, scale: 1.02 }}
              >
                Aland Roriz Development
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
