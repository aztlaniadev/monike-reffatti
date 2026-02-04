import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultPosts = [
    {
      id: '1',
      title: 'Meu Primeiro Cliente: Como Superei o Nervosismo',
      excerpt: 'Compartilho minha experiência do primeiro atendimento profissional e as lições que aprendi no caminho.',
      content: 'Minha jornada começando na manicure...',
      image_url: 'https://images.unsplash.com/photo-1659391542239-9648f307c0b1?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'História Pessoal',
      author: 'Monik Reffatti',
      created_at: new Date('2024-01-15')
    },
    {
      id: '2',
      title: '5 Dicas que Todo Iniciante em Nail Art Precisa Saber',
      excerpt: 'Aprendi essas lições na prática e quero compartilhar com vocês que estão começando como eu!',
      content: 'Dicas para iniciantes...',
      image_url: 'https://images.unsplash.com/photo-1686130353022-57b22b4ee3e1?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'Dicas',
      author: 'Monik Reffatti',
      created_at: new Date('2024-01-20')
    },
    {
      id: '3',
      title: 'Como Escolher o Esmalte Certo: Meu Guia Prático',
      excerpt: 'Depois de testar dezenas de marcas, aprendi a identificar esmaltes de qualidade. Vou te ensinar!',
      content: 'Guia de esmaltes...',
      image_url: 'https://images.unsplash.com/photo-1727199433231-346fd8101839?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'Produtos',
      author: 'Monik Reffatti',
      created_at: new Date('2024-02-01')
    },
    {
      id: '4',
      title: 'Erros que Cometi e Como Você Pode Evitá-los',
      excerpt: 'Ser sincera sobre meus erros me ajudou a crescer. Veja o que não funcionou e como melhorei.',
      content: 'Erros e aprendizados...',
      image_url: 'https://images.pexels.com/photos/3738369/pexels-photo-3738369.jpeg',
      category: 'Aprendizado',
      author: 'Monik Reffatti',
      created_at: new Date('2024-02-10')
    },
    {
      id: '5',
      title: 'Tutorial: Francesinha Perfeita em 7 Passos',
      excerpt: 'A francesinha foi o primeiro design que aprendi. Hoje vou te ensinar meu método passo a passo!',
      content: 'Tutorial francesinha...',
      image_url: 'https://images.pexels.com/photos/6135672/pexels-photo-6135672.jpeg',
      category: 'Tutorial',
      author: 'Monik Reffatti',
      created_at: new Date('2024-02-15')
    },
    {
      id: '6',
      title: 'Cuidados Diários: Rotina que Aprendi com Minhas Clientes',
      excerpt: 'Minhas clientes me ensinaram muito! Essas são as dicas que realmente funcionam no dia a dia.',
      content: 'Cuidados diários...',
      image_url: 'https://images.unsplash.com/photo-1727199433272-70fdb94c8430?crop=entropy&cs=srgb&fm=jpg&q=85',
      category: 'Cuidados',
      author: 'Monik Reffatti',
      created_at: new Date('2024-02-20')
    }
  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    if (!BACKEND_URL) {
      setPosts(defaultPosts);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${API}/blog`);
      if (response.data && response.data.length > 0) {
        setPosts(response.data);
      } else {
        setPosts(defaultPosts);
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setPosts(defaultPosts);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando posts...</p>
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
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6" data-testid="blog-page-title">
            Blog & Dicas
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conteúdos exclusivos sobre cuidados com as unhas, tendências e muito mais
          </p>
        </motion.div>

        {posts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-secondary rounded-2xl overflow-hidden">
              <div
                className="h-96 md:h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${posts[0].image_url})` }}
              ></div>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs uppercase tracking-wider bg-accent/20 text-accent px-3 py-1 rounded-full">
                    Destaque
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={12} />
                    {formatDate(posts[0].created_at)}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif mb-4" data-testid="featured-post-title">
                  {posts[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {posts[0].excerpt}
                </p>
                <Link
                  to={`/blog/${posts[0].id}`}
                  data-testid="featured-post-link"
                  className="inline-block px-6 py-3 bg-accent text-primary-foreground rounded-full font-medium hover:bg-accent/90 transition-all"
                >
                  Ler Mais
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 1) * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-secondary rounded-lg overflow-hidden group cursor-pointer"
              data-testid={`blog-post-${index}`}
            >
              <Link to={`/blog/${post.id}`}>
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${post.image_url})` }}
                  >
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-wider text-accent flex items-center gap-1">
                      <Tag size={12} />
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={12} />
                      {formatDate(post.created_at)}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif mb-3 group-hover:text-accent transition-colors" data-testid={`post-title-${index}`}>
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User size={12} />
                    <span>{post.author}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center glass-effect rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Receba Nossas Novidades</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Fique por dentro das últimas tendências, dicas exclusivas e promoções especiais. Entre em contato pelo WhatsApp para não perder nenhuma novidade!
          </p>
          <a
            href="https://wa.me/5541985067554?text=Olá!%20Gostaria%20de%20receber%20novidades%20e%20dicas."
            target="_blank"
            rel="noopener noreferrer"
            data-testid="newsletter-cta"
            className="inline-block px-8 py-4 bg-accent text-primary-foreground rounded-full font-medium hover:bg-accent/90 transition-all"
          >
            Falar com a Monik
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
