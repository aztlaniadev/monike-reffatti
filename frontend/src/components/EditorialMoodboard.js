import { motion } from 'framer-motion';
import { Coffee, Sparkles, Wine } from 'lucide-react';

const EditorialMoodboard = () => {
  const moods = [
    {
      id: 1,
      vibe: 'Minimalist Sunday',
      nail: 'Nude Rosé',
      lifestyle: 'Café, livro de arte e conversas profundas',
      nailImage: 'https://images.unsplash.com/photo-1761110690057-d022bc524524?crop=entropy&cs=srgb&fm=jpg&q=85',
      lifestyleImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=srgb&fm=jpg&q=85',
      icon: Coffee,
      color: '#FFC0CB',
      time: 'Manhãs tranquilas'
    },
    {
      id: 2,
      vibe: 'Gala Night',
      nail: 'Vermelho Imperial',
      lifestyle: 'Salto agulha, luzes da cidade e poder',
      nailImage: 'https://images.unsplash.com/photo-1767515341175-d4b19ef34ddd?crop=entropy&cs=srgb&fm=jpg&q=85',
      lifestyleImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=srgb&fm=jpg&q=85',
      icon: Sparkles,
      color: '#8B0000',
      time: 'Noites inesquecíveis'
    },
    {
      id: 3,
      vibe: 'Garden Party',
      nail: 'French Floral',
      lifestyle: 'Champagne, flores e elegância atemporal',
      nailImage: 'https://images.unsplash.com/photo-1722872112546-936593441be8?crop=entropy&cs=srgb&fm=jpg&q=85',
      lifestyleImage: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?crop=entropy&cs=srgb&fm=jpg&q=85',
      icon: Wine,
      color: '#E5D3B3',
      time: 'Tardes sofisticadas'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background" data-testid="moodboard-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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
            Psicologia das Cores
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-tight">
            The Editorial Moodboard
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Não vendemos cores. Vendemos a pessoa que você se torna ao sair do salão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {moods.map((mood, index) => (
            <motion.div
              key={mood.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative"
              data-testid={`mood-card-${mood.id}`}
            >
              <div className="relative h-[600px] overflow-hidden">
                <motion.div
                  className="absolute inset-0 grid grid-rows-2 gap-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={mood.nailImage}
                      alt={mood.nail}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                  </div>

                  <div className="relative overflow-hidden">
                    <img
                      src={mood.lifestyleImage}
                      alt={mood.lifestyle}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 pointer-events-none"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                    className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mb-6 backdrop-blur-sm"
                    style={{ backgroundColor: `${mood.color}20` }}
                  >
                    <mood.icon size={28} className="text-white" strokeWidth={1.5} />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                    className="text-3xl font-serif mb-3 text-white"
                  >
                    {mood.vibe}
                  </motion.h3>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 60 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                    className="h-[0.5px] bg-white/50 mb-4"
                  />

                  <p className="text-sm text-white/80 mb-2 font-light tracking-wide">
                    {mood.nail}
                  </p>
                  <p className="text-xs text-white/60 mb-4 font-light italic">
                    {mood.lifestyle}
                  </p>

                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-light"
                  >
                    {mood.time}
                  </motion.span>

                  <motion.a
                    href={`https://wa.me/5541985067554?text=Gostaria%20de%20agendar%20${encodeURIComponent(mood.vibe)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 px-6 py-2 border border-white/30 text-white text-xs uppercase tracking-[0.2em] font-light hover:bg-white/10 transition-all duration-300"
                    data-testid={`mood-cta-${mood.id}`}
                  >
                    Agendar Este Mood
                  </motion.a>
                </div>

                <motion.div
                  className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-700 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/50 font-light italic">
            Escolha sua identidade
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EditorialMoodboard;
