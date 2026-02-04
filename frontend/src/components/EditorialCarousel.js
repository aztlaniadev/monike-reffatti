import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EditorialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const collections = [
    {
      id: 1,
      title: 'Diamante Lunar',
      subtitle: 'French Manicure com Cristais Swarovski',
      description: 'Sofisticação atemporal com reflexos que capturam a luz como diamantes lapidados',
      image: 'https://images.unsplash.com/photo-1767961054375-1de154a9cec1?crop=entropy&cs=srgb&fm=jpg&q=85',
      color: '#F8F8F8',
      mood: 'Clássico Reinventado'
    },
    {
      id: 2,
      title: 'Crepúsculo Dourado',
      subtitle: 'Nude com Detalhes em Folha de Ouro',
      description: 'Elegância minimalista encontra o luxo dos metais preciosos',
      image: 'https://images.unsplash.com/photo-1761110690057-d022bc524524?crop=entropy&cs=srgb&fm=jpg&q=85',
      color: '#E5D3B3',
      mood: 'Luxo Orgânico'
    },
    {
      id: 3,
      title: 'Aurora Francesa',
      subtitle: 'French Glitter com Efeito Holográfico',
      description: 'A clássica francesinha reimaginada com partículas iridescentes que dançam com a luz',
      image: 'https://images.unsplash.com/photo-1722872112546-936593441be8?crop=entropy&cs=srgb&fm=jpg&q=85',
      color: '#FFF5E6',
      mood: 'Editorial Moderno'
    },
    {
      id: 4,
      title: 'Obsidiana Mística',
      subtitle: 'Matte Black com Detalhes Metálicos',
      description: 'Textura aveludada profunda contrastando com reflexos metálicos afiados',
      image: 'https://images.unsplash.com/photo-1761735489573-15b2d60280f5?crop=entropy&cs=srgb&fm=jpg&q=85',
      color: '#2C2C2C',
      mood: 'Vanguarda Sombria'
    },
    {
      id: 5,
      title: 'Carmim Imperial',
      subtitle: 'Vermelho Intenso com Acabamento Vítreo',
      description: 'Pigmento profundo e espelhado que evoca poder e sensualidade',
      image: 'https://images.unsplash.com/photo-1767515341175-d4b19ef34ddd?crop=entropy&cs=srgb&fm=jpg&q=85',
      color: '#8B0000',
      mood: 'Paixão Audaciosa'
    },
    {
      id: 6,
      title: 'Seda Rosé',
      subtitle: 'Nude Rosé com Brilho Suave',
      description: 'Delicadeza translúcida com um toque de luminosidade celestial',
      image: 'https://images.unsplash.com/photo-1758229457602-597d7ec290cf?crop=entropy&cs=srgb&fm=jpg&q=85',
      color: '#FFC0CB',
      mood: 'Romance Etéreo'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  const backgroundVariants = {
    enter: {
      opacity: 0
    },
    center: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  };

  const textVariants = {
    enter: {
      y: 20,
      opacity: 0
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % collections.length;
      }
      return prevIndex === 0 ? collections.length - 1 : prevIndex - 1;
    });
  };

  const currentCollection = collections[currentIndex];

  return (
    <section className="relative h-screen overflow-hidden" data-testid="editorial-carousel">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`bg-${currentIndex}`}
          custom={direction}
          variants={backgroundVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${currentCollection.color}15 0%, #1a1a1a 100%)`
          }}
        />

        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 }
          }}
          className="absolute inset-0"
        >
          <div className="relative h-full flex items-center">
            <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-0">
              <motion.div
                className="relative overflow-hidden"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${currentCollection.image})`,
                    scale: 1.1
                  }}
                  animate={{
                    scale: [1.1, 1.15, 1.1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1a1a]/80"></div>
                </motion.div>

                <div className="absolute inset-0 grain-texture opacity-10"></div>
              </motion.div>

              <div className="relative flex items-center justify-center p-12 lg:p-20">
                <motion.div
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="max-w-xl"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 60 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-[1px] bg-accent mb-8"
                  ></motion.div>

                  <motion.p
                    className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {currentCollection.mood}
                  </motion.p>

                  <motion.h2
                    className="text-5xl lg:text-7xl font-serif font-light mb-4 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    {currentCollection.title}
                  </motion.h2>

                  <motion.h3
                    className="text-xl lg:text-2xl font-accent italic text-accent/80 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {currentCollection.subtitle}
                  </motion.h3>

                  <motion.p
                    className="text-base text-muted-foreground leading-relaxed mb-8 font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    {currentCollection.description}
                  </motion.p>

                  <motion.a
                    href="https://wa.me/5541985067554?text=Gostaria%20de%20agendar%20uma%20nail%20art%20exclusiva"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="carousel-book-button"
                    className="inline-block px-8 py-4 bg-accent/10 border border-accent text-accent rounded-none font-light tracking-wider text-sm hover:bg-accent hover:text-primary-foreground transition-all duration-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    AGENDAR EXPERIÊNCIA
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-8 z-10">
        <button
          onClick={() => paginate(-1)}
          data-testid="carousel-prev-button"
          className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all group"
          aria-label="Previous"
        >
          <ChevronLeft className="text-accent group-hover:scale-110 transition-transform" size={20} />
        </button>

        <div className="flex gap-2">
          {collections.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              data-testid={`carousel-dot-${index}`}
              className={`h-[1px] transition-all duration-500 ${
                index === currentIndex
                  ? 'w-12 bg-accent'
                  : 'w-6 bg-accent/30 hover:bg-accent/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          data-testid="carousel-next-button"
          className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all group"
          aria-label="Next"
        >
          <ChevronRight className="text-accent group-hover:scale-110 transition-transform" size={20} />
        </button>
      </div>

      <div className="absolute top-12 right-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-right"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Coleção</p>
          <p className="text-2xl font-serif text-accent">
            {String(currentIndex + 1).padStart(2, '0')} / {String(collections.length).padStart(2, '0')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EditorialCarousel;
