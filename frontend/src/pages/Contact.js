import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Clock } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferred_date: '',
    preferred_time: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!BACKEND_URL) {
      // Simulate API call
      setTimeout(() => {
        toast.success('Agendamento enviado com sucesso! (Modo de Demonstração)');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          preferred_date: '',
          preferred_time: '',
          message: ''
        });
        setLoading(false);
      }, 1000);
      return;
    }

    try {
      await axios.post(`${API}/appointments`, formData);
      toast.success('Agendamento enviado com sucesso! Entraremos em contato em breve.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        preferred_date: '',
        preferred_time: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting appointment:', error);
      toast.error('Erro ao enviar agendamento. Por favor, entre em contato pelo WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6" data-testid="contact-page-title">
            Entre em Contato
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para transformar suas unhas. Agende seu horário ou tire suas dúvidas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif mb-8">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Telefone</h3>
                      <a href="tel:+5541985067554" className="text-muted-foreground hover:text-accent transition-colors">
                        (41) 98506-7554
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">E-mail</h3>
                      <a href="mailto:contato@monikreffatti.com" className="text-muted-foreground hover:text-accent transition-colors">
                        contato@monikreffatti.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Localização</h3>
                      <p className="text-muted-foreground">
                        Curitiba, Paraná<br />
                        Atendimento com hora marcada
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 9h - 19h<br />
                        Sábado: 9h - 17h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-xl font-serif mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/monik_reffatti"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-instagram-link"
                    className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://wa.me/5541985067554"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-whatsapp-link"
                    className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-secondary rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-6">Agende seu Horário</h2>
              <form onSubmit={handleSubmit} className="space-y-5" data-testid="appointment-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    data-testid="form-name-input"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    data-testid="form-email-input"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    data-testid="form-phone-input"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Serviço Desejado *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    data-testid="form-service-select"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Nail Art Premium">Nail Art Premium</option>
                    <option value="Alongamento de Unhas">Alongamento de Unhas</option>
                    <option value="Esmaltação em Gel">Esmaltação em Gel</option>
                    <option value="Spa das Mãos">Spa das Mãos</option>
                    <option value="Blindagem de Unhas">Blindagem de Unhas</option>
                    <option value="Manutenção">Manutenção Completa</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferred_date" className="block text-sm font-medium mb-2">
                      Data Preferencial *
                    </label>
                    <input
                      type="date"
                      id="preferred_date"
                      name="preferred_date"
                      required
                      data-testid="form-date-input"
                      value={formData.preferred_date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferred_time" className="block text-sm font-medium mb-2">
                      Horário *
                    </label>
                    <input
                      type="time"
                      id="preferred_time"
                      name="preferred_time"
                      required
                      data-testid="form-time-input"
                      value={formData.preferred_time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Observações
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    data-testid="form-message-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="form-submit-button"
                  className="w-full px-6 py-4 bg-accent text-primary-foreground rounded-lg font-medium hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Enviando...' : 'Enviar Agendamento'}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Ou entre em contato diretamente pelo{' '}
                  <a
                    href="https://wa.me/5541985067554"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    WhatsApp
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-secondary rounded-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57751.38456031256!2d-49.31656304999999!3d-25.4284034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce35351cdb3dd%3A0x6d2f6ba5bacbe809!2sCuritiba%2C%20State%20of%20Paran%C3%A1!5e0!3m2!1sen!2sbr!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Monik Reffatti Nails"
            className="w-full"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
