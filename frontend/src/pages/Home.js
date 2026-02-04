import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Award, Clock } from 'lucide-react';
import EditorialCarousel from '@/components/EditorialCarousel';
import ASMRGallery from '@/components/ASMRGallery';
import AnatomySection from '@/components/AnatomySection';
import EditorialMoodboard from '@/components/EditorialMoodboard';
import ConciergeVirtual from '@/components/ConciergeVirtual';

const Home = () => {
  const services = [
    {
      title: 'Nail Art',
      description: 'Designs exclusivos e personalizados para expressar sua personalidade',
      image: 'https://images.unsplash.com/photo-1659391542239-9648f307c0b1?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'Arte'
    },
    {
      title: 'Alongamento de Unhas',
      description: 'Técnicas avançadas para unhas perfeitas e duradouras',
      image: 'https://images.unsplash.com/photo-1686130353022-57b22b4ee3e1?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'Estrutura'
    },
    {
      title: 'Esmaltação em Gel',
      description: 'Acabamento impecável com duração prolongada',
      image: 'https://images.unsplash.com/photo-1727199433272-70fdb94c8430?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'Estética'
    },
    {
      title: 'Spa das Mãos',
      description: 'Tratamento completo de hidratação e rejuvenescimento',
      image: 'https://images.pexels.com/photos/3738369/pexels-photo-3738369.jpeg',
      category: 'Cuidados'
    }
  ];

  const testimonials = [
    {
      quote: 'O trabalho da Monik é simplesmente impecável. Cada detalhe é pensado com muito carinho e profissionalismo.',
      author: 'Ana Paula Silva',
      role: 'Cliente VIP'
    },
    {
      quote: 'Minhas unhas nunca estiveram tão lindas! O ambiente é acolhedor e o resultado sempre supera minhas expectativas.',
      author: 'Juliana Mendes',
      role: 'Cliente Assídua'
    },
    {
      quote: 'A atenção aos detalhes e o cuidado com a saúde das unhas fazem toda a diferença. Recomendo de olhos fechados!',
      author: 'Fernanda Costa',
      role: 'Cliente desde 2023'
    }
  ];

  return (
    <div className="min-h-screen">
      <EditorialCarousel />
      
      <ASMRGallery />
      
      <AnatomySection />
      
      <EditorialMoodboard />
      
      <ConciergeVirtual />

      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden grain-texture"
        data-testid="hero-section"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1722872112546-936593441be8?crop=entropy&cs=srgb&fm=jpg&q=85)',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-medium tracking-tight leading-tight mb-6"
            data-testid="hero-headline"
          >
            Suas Mãos Merecem Arte
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground font-light tracking-wide mb-10 leading-relaxed"
            data-testid="hero-subheadline"
          >
            Onde elegância encontra expertise. Transforme suas unhas em verdadeiras obras-primas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/5541985067554?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-book"
              className="px-8 py-4 bg-accent text-primary-foreground rounded-full font-medium hover:bg-accent/90 transition-all hover:scale-105 inline-flex items-center justify-center"
            >
              Agendar Horário
            </a>
            <Link
              to="/services"
              data-testid="hero-cta-services"
              className="px-8 py-4 border border-accent text-accent rounded-full font-medium hover:bg-accent hover:text-primary-foreground transition-all inline-flex items-center justify-center"
            >
              Ver Serviços
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </section>

      <section className="py-24 md:py-32 px-6" data-testid="features-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-serif mb-3">Design Exclusivo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada unha é tratada como uma tela em branco, recebendo designs únicos e personalizados
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-serif mb-3">Qualidade Premium</h3>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos apenas produtos de alta qualidade para garantir durabilidade e saúde
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-serif mb-3">Atendimento VIP</h3>
              <p className="text-muted-foreground leading-relaxed">
                Horários flexíveis e atendimento personalizado para sua comodidade
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6" data-testid="services-gallery-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra a perfeição em cada detalhe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-lg bg-secondary h-80 cursor-pointer"
                data-testid={`service-card-${index}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <span className="text-xs uppercase tracking-wider text-accent mb-2">
                    {service.category}
                  </span>
                  <h3 className="text-3xl font-serif mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              data-testid="view-all-services-link"
              className="inline-block px-8 py-4 border border-accent text-accent rounded-full hover:bg-accent hover:text-primary-foreground transition-all"
            >
              Ver Todos os Serviços
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary" data-testid="testimonials-section">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight mb-4">
              O Que Dizem Nossas Clientes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
                data-testid={`testimonial-${index}`}
              >
                <div className="text-accent text-5xl font-serif mb-4">"</div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <h4 className="font-medium text-foreground">{testimonial.author}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
