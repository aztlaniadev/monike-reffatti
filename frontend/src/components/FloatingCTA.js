import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingCTA = () => {
  const whatsappNumber = '5541985067554';
  const message = 'Olá! Gostaria de agendar um horário.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp-button"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white rounded-full px-6 py-4 shadow-2xl flex items-center space-x-3 hover:scale-105 transition-transform"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={24} />
      <span className="font-medium hidden sm:inline">Agendar Agora</span>
    </motion.a>
  );
};

export default FloatingCTA;
