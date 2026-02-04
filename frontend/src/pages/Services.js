import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultServices = [
    {
      id: '1',
      name: 'Nail Art Premium',
      description: 'Designs exclusivos e personalizados com técnicas avançadas de nail art. Transforme suas unhas em verdadeiras obras de arte com desenhos únicos, aplicação de cristais, pedrarias e efeitos especiais.',
      price: 'A partir de R$ 120',
      duration: '2 horas',
      category: 'Arte',
      image_url: 'https://images.unsplash.com/photo-1659391542239-9648f307c0b1?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      id: '2',
      name: 'Alongamento de Unhas',
      description: 'Alongamento com técnicas de fibra de vidro ou gel para unhas perfeitas e naturais. Resultados duradouros com aspecto elegante e sofisticado.',
      price: 'R$ 150',
      duration: '2h30',
      category: 'Estrutura',
      image_url: 'https://images.unsplash.com/photo-1686130353022-57b22b4ee3e1?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      id: '3',
      name: 'Esmaltação em Gel',
      description: 'Acabamento perfeito com duração de até 3 semanas. Ampla cartela de cores premium e acabamentos especiais como glitter, metálico e efeito espelhado.',
      price: 'R$ 80',
      duration: '1 hora',
      category: 'Estética',
      image_url: 'https://images.unsplash.com/photo-1727199433272-70fdb94c8430?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      id: '4',
      name: 'Spa das Mãos',
      description: 'Tratamento completo de hidratação profunda, esfoliação suave, massagem relaxante e cuidados especiais. Suas mãos merecem esse momento de luxo e bem-estar.',
      price: 'R$ 100',
      duration: '1h30',
      category: 'Cuidados',
      image_url: 'https://images.pexels.com/photos/3738369/pexels-photo-3738369.jpeg'
    },
    {
      id: '5',
      name: 'Blindagem de Unhas',
      description: 'Fortalecimento intensivo para unhas fracas e quebradiças. Tratamento com proteínas e vitaminas que promove crescimento saudável e resistência.',
      price: 'R$ 70',
      duration: '45 min',
      category: 'Tratamento',
      image_url: 'https://images.pexels.com/photos/6135672/pexels-photo-6135672.jpeg'
    },
    {
      id: '6',
      name: 'Manutenção Completa',
      description: 'Serviço de manutenção para manter suas unhas sempre impecáveis. Inclui retirada de cutículas, polimento, hidratação e ajustes necessários.',
      price: 'R$ 60',
      duration: '1 hora',
      category: 'Manutenção',
      image_url: 'https://images.unsplash.com/photo-1727199433231-346fd8101839?crop=entropy&cs=srgb&fm=jpg&q=85'
    }
  ];

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    if (!BACKEND_URL) {
      setServices(defaultServices);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${API}/services`);
      if (response.data && response.data.length > 0) {
        setServices(response.data);
      } else {
        setServices(defaultServices);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      setServices(defaultServices);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando serviços...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6" data-testid="services-page-title">
            Nossos Serviços
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada serviço é cuidadosamente planejado para proporcionar não apenas beleza, mas também saúde e bem-estar para suas mãos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-secondary rounded-lg overflow-hidden group cursor-pointer"
              data-testid={`service-item-${index}`}
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image_url})` }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs uppercase tracking-wider bg-accent text-primary-foreground px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3" data-testid={`service-name-${index}`}>
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <div>
                    <p className="text-accent font-medium text-lg">{service.price}</p>
                    <p className="text-xs text-muted-foreground">{service.duration}</p>
                  </div>
                  <a
                    href={`https://wa.me/5541985067554?text=Olá!%20Gostaria%20de%20agendar%20${encodeURIComponent(service.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`book-service-${index}`}
                    className="px-4 py-2 bg-accent text-primary-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-all"
                  >
                    Agendar
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center glass-effect rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Pacotes Personalizados</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Oferecemos também pacotes personalizados para noivas, eventos especiais e tratamentos contínuos. Entre em contato para mais informações.
          </p>
          <a
            href="https://wa.me/5541985067554?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20pacotes%20personalizados."
            target="_blank"
            rel="noopener noreferrer"
            data-testid="custom-package-cta"
            className="inline-block px-8 py-4 bg-accent text-primary-foreground rounded-full font-medium hover:bg-accent/90 transition-all"
          >
            Solicitar Orçamento
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
