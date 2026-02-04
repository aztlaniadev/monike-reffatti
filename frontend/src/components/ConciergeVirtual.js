import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Sparkles, Heart, Zap, Send } from 'lucide-react';

const ConciergeVirtual = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [showResponse, setShowResponse] = useState(false);

  const moods = [
    {
      id: 'powerful',
      label: 'Poderosa',
      icon: Zap,
      color: '#8B0000',
      suggestion: 'Vermelho Imperial com acabamento vítreo',
      description: 'Para reuniões importantes e momentos de liderança',
      time: 'Melhor horário: 14h-17h'
    },
    {
      id: 'delicate',
      label: 'Delicada',
      icon: Heart,
      color: '#FFC0CB',
      suggestion: 'Nude Rosé com brilho suave',
      description: 'Para encontros românticos e ocasiões íntimas',
      time: 'Melhor horário: 10h-12h'
    },
    {
      id: 'invisible',
      label: 'Natural',
      icon: Sparkles,
      color: '#E5D3B3',
      suggestion: 'French Manicure Clássica',
      description: 'Para o dia a dia profissional e elegância atemporal',
      time: 'Melhor horário: 9h-11h'
    }
  ];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setShowResponse(true);
  };

  return (
    <section className="py-24 md:py-32 bg-secondary relative overflow-hidden" data-testid="concierge-section">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[0.5px] bg-accent mx-auto mb-6"
          />
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-light">
            Atendimento Personalizado
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-tight">
            Concierge Virtual
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Como você quer se sentir hoje? Deixe-nos sugerir a nail art perfeita para o seu momento.
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-effect rounded-none p-8 border border-white/10"
          >
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Sparkles size={18} className="text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-light text-foreground mb-2">
                  Olá! Sou a assistente virtual da Monik Reffatti Nails. 
                </p>
                <p className="text-sm font-light text-muted-foreground">
                  Vou te ajudar a encontrar o nail art perfeito para o seu momento. Como você quer se sentir hoje?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {moods.map((mood, index) => (
                <motion.button
                  key={mood.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  onClick={() => handleMoodSelect(mood)}
                  data-testid={`mood-button-${mood.id}`}
                  className={`p-6 border transition-all duration-500 group ${
                    selectedMood?.id === mood.id
                      ? 'border-accent bg-accent/5'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${
                        selectedMood?.id === mood.id ? 'scale-110' : 'scale-100'
                      }`}
                      style={{ 
                        backgroundColor: `${mood.color}20`,
                        border: `2px solid ${selectedMood?.id === mood.id ? mood.color : 'transparent'}`
                      }}
                    >
                      <mood.icon 
                        size={24} 
                        style={{ color: mood.color }}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-lg font-serif mb-1">{mood.label}</h3>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence>
            {showResponse && selectedMood && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass-effect rounded-none p-8 border border-accent/30"
              >
                <div className="flex items-start gap-3 mb-6">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${selectedMood.color}20` }}
                  >
                    <selectedMood.icon 
                      size={18} 
                      style={{ color: selectedMood.color }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-light text-foreground mb-4">
                      Perfeito! Para você se sentir <span className="text-accent">{selectedMood.label.toLowerCase()}</span>, eu sugiro:
                    </p>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mb-4"
                    >
                      <h4 className="text-xl font-serif mb-2" style={{ color: selectedMood.color }}>
                        {selectedMood.suggestion}
                      </h4>
                      <p className="text-sm text-muted-foreground font-light mb-2">
                        {selectedMood.description}
                      </p>
                      <p className="text-xs text-accent font-light">
                        {selectedMood.time}
                      </p>
                    </motion.div>

                    <motion.a
                      href={`https://wa.me/5541985067554?text=Olá!%20Gostaria%20de%20agendar%20${encodeURIComponent(selectedMood.suggestion)}.%20Como%20sugerido%20pelo%20Concierge%20Virtual.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      data-testid="concierge-book-button"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary-foreground text-xs uppercase tracking-[0.2em] font-light hover:bg-accent/90 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send size={14} strokeWidth={1.5} />
                      Agendar Este Horário
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/50 font-light italic">
            Atendimento personalizado antes mesmo de chegar
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ConciergeVirtual;
