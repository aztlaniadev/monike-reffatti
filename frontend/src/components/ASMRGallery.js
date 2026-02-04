import { motion } from 'framer-motion';
import { useState } from 'react';

const ASMRGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const videos = [
    {
      id: 1,
      title: 'Viscosidade Perfeita',
      description: 'Esmalte de alta qualidade deslizando',
      placeholder: 'https://images.unsplash.com/photo-1659391542239-9648f307c0b1?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
      color: '#E5D3B3'
    },
    {
      id: 2,
      title: 'Textura Aveludada',
      description: 'Acabamento matte profundo',
      placeholder: 'https://images.unsplash.com/photo-1686130353022-57b22b4ee3e1?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
      color: '#2C2C2C'
    },
    {
      id: 3,
      title: 'Brilho Vítreo',
      description: 'Reflexo espelhado cristalino',
      placeholder: 'https://images.unsplash.com/photo-1727199433272-70fdb94c8430?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
      color: '#8B0000'
    },
    {
      id: 4,
      title: 'Pigmento Mineral',
      description: 'Cobertura intensa em uma camada',
      placeholder: 'https://images.unsplash.com/photo-1727199433231-346fd8101839?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
      color: '#FFC0CB'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden" data-testid="asmr-gallery-section">
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
            Experiência Sensorial
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-tight">
            The Sound of Color
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Cada textura conta uma história. Explore a viscosidade, o brilho e a profundidade dos nossos acabamentos premium.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
              data-testid={`asmr-video-${index}`}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={video.placeholder}
                  alt={video.title}
                  className="w-full h-full object-cover"
                  style={{
                    filter: hoveredIndex === index 
                      ? 'grayscale(0%) saturate(1.2)' 
                      : 'grayscale(100%) brightness(0.8)'
                  }}
                />
                
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: video.color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.2 : 0 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-500" />

              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: hoveredIndex === index ? 0 : 20,
                  opacity: hoveredIndex === index ? 1 : 0 
                }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-lg font-serif mb-2">{video.title}</h3>
                <p className="text-xs text-muted-foreground font-light tracking-wide">
                  {video.description}
                </p>
              </motion.div>

              <motion.div
                className="absolute top-4 right-4 z-10"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: hoveredIndex === index ? 1 : 0,
                  rotate: hoveredIndex === index ? 0 : -180
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: video.color }}
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-all duration-700 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/50 font-light italic">
            Passe o mouse para revelar a cor
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ASMRGallery;
