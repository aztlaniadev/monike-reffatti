import { motion } from 'framer-motion';
import { useState } from 'react';

const AnatomySection = () => {
  const [activePoint, setActivePoint] = useState(null);

  const anatomyPoints = [
    {
      id: 1,
      left: '36%',
      top: '68%',
      title: 'Base de Cálcio',
      description: 'Fortalecimento intensivo com proteínas e cálcio para unhas resistentes',
      icon: '💎'
    },
    {
      id: 2,
      left: '50%',
      top: '80%',
      title: 'Pigmento Mineral',
      description: 'Pigmentos puros de origem mineral para cores vibrantes e duradouras',
      icon: '🎨'
    },
    {
      id: 3,
      left: '64%',
      top: '74%',
      title: 'Top Coat Diamante',
      description: 'Acabamento vítreo com micropartículas de diamante sintético para brilho intenso',
      icon: '✨'
    },
    {
      id: 4,
      left: '76%',
      top: '60%',
      title: 'Gel UV Premium',
      description: 'Tecnologia de cura LED com durabilidade de até 4 semanas sem lascar',
      icon: '💅'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary relative overflow-hidden" data-testid="anatomy-section">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
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
            Ciência & Arte
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-tight">
            Nail Art Anatomy
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Cada unha é uma engenharia de precisão. Descubra os materiais premium que transformam beleza em durabilidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-white/5 shadow-2xl shadow-accent/5">
                <motion.img
                    src="https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20macro%20photography%20of%20elegant%20female%20hand%20with%20flawless%20manicure%2C%20vibrant%20glossy%20nail%20polish%20with%20diamond%20shine%2C%20strong%20healthy%20nails%2C%20luxury%20beauty%20aesthetic%2C%20dark%20background%2C%20soft%20studio%20lighting%2C%20high%20detail%2C%208k&image_size=landscape_4_3"
                    alt="Anatomia da Unha - Produtos Premium"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                />
                
                {/* Overlay gradient for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent pointer-events-none" />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-xs uppercase tracking-[0.3em] text-muted-foreground/50 font-light text-center mt-6 italic"
            >
              Tecnologia e beleza em cada detalhe
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {anatomyPoints.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.15 }}
                onMouseEnter={() => setActivePoint(point.id)}
                onMouseLeave={() => setActivePoint(null)}
                className={`glass-effect rounded-none p-6 border-l-2 transition-all duration-500 cursor-pointer ${
                  activePoint === point.id 
                    ? 'border-accent bg-accent/5' 
                    : 'border-white/10'
                }`}
                whileHover={{ x: 10 }}
                data-testid={`anatomy-info-${point.id}`}
              >
                <div className="flex items-start gap-4">
                  <motion.span
                    className="text-3xl"
                    animate={{ scale: activePoint === point.id ? 1.2 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {point.icon}
                  </motion.span>
                  <div>
                    <h3 className="text-xl font-serif mb-2 text-foreground">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnatomySection;