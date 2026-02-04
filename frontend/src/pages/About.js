import { motion } from 'framer-motion';
import { Award, Heart, Sparkles, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Cada unha é tratada com dedicação e amor pelo que fazemos'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Compromisso com a qualidade e resultados impecáveis'
    },
    {
      icon: Sparkles,
      title: 'Criatividade',
      description: 'Designs únicos que expressam sua personalidade'
    },
    {
      icon: Users,
      title: 'Confiança',
      description: 'Relacionamento próximo e cuidadoso com cada cliente'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6" data-testid="about-page-title">
            Sobre Monik Reffatti
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma história de dedicação, arte e paixão pela beleza
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1722872112546-936593441be8?crop=entropy&cs=srgb&fm=jpg&q=85"
              alt="Monik Reffatti"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-serif mb-6">Minha História</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tenho 16 anos e estou começando minha jornada no mundo da nail art. O que parece ser apenas o início de uma carreira, na verdade é a realização de um sonho que sempre tive: transformar unhas em obras de arte.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Apesar da pouca idade, minha paixão por manicure me impulsiona a estudar e praticar todos os dias. Cada cliente é uma oportunidade de aprender, crescer e aperfeiçoar minhas técnicas. Assisto tutoriais, estudo tendências e pratico incansavelmente para entregar trabalhos que surpreendem.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mesmo sendo jovem, já realizei trabalhos incríveis que me enchem de orgulho. Cada elogio, cada cliente satisfeita, me motiva a continuar evoluindo. Estou construindo minha reputação com dedicação, carinho e muita técnica.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Meu objetivo é me tornar referência em nail art em Curitiba. Sei que tenho muito a aprender, mas minha determinação e amor pelo que faço me levam cada dia mais longe nessa jornada!
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-serif text-center mb-12">Meus Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
                data-testid={`value-item-${index}`}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-serif mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-serif mb-6">Minha Formação</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              • Curso Profissionalizante de Manicure e Pedicure
            </p>
            <p className="leading-relaxed">
              • Workshop de Nail Art Avançada
            </p>
            <p className="leading-relaxed">
              • Curso Online de Alongamento de Unhas em Gel
            </p>
            <p className="leading-relaxed">
              • Estudos contínuos através de tutoriais e atualizações de tendências
            </p>
            <p className="leading-relaxed mt-6 text-foreground">
              Mesmo jovem, estou comprometida em oferecer o melhor serviço possível. 
              Cada atendimento é uma oportunidade de aprender e evoluir!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Vamos Criar Algo Incrível Juntas?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Mesmo sendo jovem, coloco todo meu coração em cada trabalho. Agende seu horário e venha descobrir como transformo suas unhas em arte!
          </p>
          <a
            href="https://wa.me/5541985067554?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."
            target="_blank"
            rel="noopener noreferrer"
            data-testid="about-cta-book"
            className="inline-block px-8 py-4 bg-accent text-primary-foreground rounded-full font-medium hover:bg-accent/90 transition-all"
          >
            Agendar Horário
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
