import requests
import os
from datetime import datetime

BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL')
if not BACKEND_URL:
    raise ValueError("REACT_APP_BACKEND_URL environment variable is required")
API = f"{BACKEND_URL}/api"

posts = [
    {
        "title": "Meu Primeiro Cliente: Como Superei o Nervosismo",
        "excerpt": "Compartilho minha experiência do primeiro atendimento profissional e as lições que aprendi no caminho.",
        "content": """
        <h2>O Dia que Mudou Tudo</h2>
        <p>Tenho 16 anos e sempre sonhei em trabalhar com manicure. Quando fiz meu primeiro atendimento profissional, achei que morreria de nervoso! Minhas mãos tremiam, eu esquecia os passos, e tinha certeza que tudo daria errado.</p>
        
        <h2>A Preparação</h2>
        <p>Antes do dia, pratiquei em mim mesma dezenas de vezes. Assisti cada tutorial que encontrei no YouTube e TikTok. Organizei meu espaço de trabalho pelo menos 5 vezes. Mas nada disso me preparou para a sensação de ter alguém esperando um resultado profissional.</p>
        
        <h2>O Atendimento</h2>
        <p>Minha primeira cliente foi super gentil (obrigada eternamente!). Ela percebeu meu nervosismo e começou a conversar, me deixando mais relaxada. Aos poucos, fui me lembrando das técnicas e tudo fluiu naturalmente. O resultado ficou lindo!</p>
        
        <h2>O Que Aprendi</h2>
        <p>• É normal estar nervosa no início<br>
        • A prática em casa faz TODA diferença<br>
        • Clientes gentis são essenciais para começar<br>
        • Conversar ajuda a relaxar (você e a cliente!)<br>
        • Cada atendimento te deixa mais confiante</p>
        
        <h2>Meu Conselho</h2>
        <p>Se você também está começando: respire fundo, confie no seu estudo e lembre-se que todo profissional um dia foi iniciante. O importante é colocar amor em cada detalhe!</p>
        """,
        "image_url": "https://images.unsplash.com/photo-1659391542239-9648f307c0b1?crop=entropy&cs=srgb&fm=jpg&q=85",
        "category": "História Pessoal"
    },
    {
        "title": "5 Dicas que Todo Iniciante em Nail Art Precisa Saber",
        "excerpt": "Aprendi essas lições na prática e quero compartilhar com vocês que estão começando como eu!",
        "content": """
        <h2>Aprendi Essas Lições na Prática</h2>
        <p>Comecei há pouco tempo na manicure, mas alguns erros (e acertos!) já me ensinaram muito. Quero compartilhar com vocês que estão começando!</p>
        
        <h2>1. Invista em Pincéis de Qualidade</h2>
        <p>No início, comprei pincéis baratos pensando que não fazia diferença. Estava completamente errada! Pincéis bons fazem traços mais precisos e duram muito mais. Vale cada centavo.</p>
        
        <h2>2. Pratique em Papel Antes das Unhas</h2>
        <p>Descobri que treinar designs em papel economiza tempo e esmalte. Faço vários rascunhos até pegar a mão, depois parto para a unha. Essa técnica me salvou várias vezes!</p>
        
        <h2>3. Menos é Mais (às vezes)</h2>
        <p>Meu maior erro foi querer fazer designs muito complicados logo no começo. Aprendi que uma francesinha bem-feita impressiona mais que uma nail art mal executada. Domine o básico primeiro!</p>
        
        <h2>4. Iluminação é TUDO</h2>
        <p>Trabalhei um tempo com luz ruim e não entendia por que os detalhes não ficavam perfeitos. Comprei um ring light e foi como descobrir um novo mundo! Você precisa VER bem para fazer bem.</p>
        
        <h2>5. Tire Fotos do Seu Progresso</h2>
        <p>Comecei a fotografar cada trabalho desde o primeiro dia. Ver minha evolução me motiva demais! Além disso, vejo o que funcionou e o que precisa melhorar.</p>
        
        <h2>Bônus: Seja Paciente Consigo Mesma</h2>
        <p>Tenho 16 anos e ainda estou aprendendo. Alguns dias saem trabalhos incríveis, outros nem tanto. E tudo bem! O importante é não desistir e melhorar um pouquinho a cada dia. 💅✨</p>
        """,
        "image_url": "https://images.unsplash.com/photo-1686130353022-57b22b4ee3e1?crop=entropy&cs=srgb&fm=jpg&q=85",
        "category": "Dicas"
    },
    {
        "title": "Como Escolher o Esmalte Certo: Meu Guia Prático",
        "excerpt": "Depois de testar dezenas de marcas, aprendi a identificar esmaltes de qualidade. Vou te ensinar!",
        "content": """
        <h2>A Jornada de Testar Dezenas de Marcas</h2>
        <p>Quando comecei, achava que esmalte era tudo igual. Depois de gastar dinheiro em produtos ruins, aprendi (do jeito difícil) a identificar qualidade. Hoje compartilho meu checklist!</p>
        
        <h2>Consistência: O Primeiro Teste</h2>
        <p>Esmalte bom não deve ser nem muito líquido (escorre e não cobre) nem muito grosso (deixa marcas de pincel). Peça para testar antes de comprar! Aplique no pincel e veja como escorre.</p>
        
        <h2>Pigmentação: Menos Camadas = Melhor</h2>
        <p>Um esmalte de qualidade cobre bem em 2 camadas (no máximo). Se precisar de 4 ou 5 camadas, está perdendo tempo e produto. Aprendi a valorizar pigmentos fortes!</p>
        
        <h2>Secagem: O Teste da Paciência</h2>
        <p>Nada pior que esmalte que demora uma eternidade pra secar. Esmaltes bons secam em 5-10 minutos. Testando marcas, descobri que os importados geralmente secam mais rápido.</p>
        
        <h2>Durabilidade: Vale Cada Centavo</h2>
        <p>Esmalte barato que lasca em 2 dias não compensa. Prefiro investir um pouco mais e ter resultado que dura uma semana (ou mais com base e top coat!).</p>
        
        <h2>Minhas Marcas Favoritas (na Minha Faixa de Preço)</h2>
        <p>• Para iniciar: Risqué e Colorama (acessíveis e bons)<br>
        • Para investir: Impala e OPI (valem muito a pena)<br>
        • Para nail art: Mohda e Ludurana (pigmentação incrível)</p>
        
        <h2>Dica Extra: Base e Top Coat São Essenciais!</h2>
        <p>Descobri que usar base e top coat prolonga MUITO a duração. Não pule essa etapa! A Seche Vite é meu top coat favorito (seca super rápido).</p>
        """,
        "image_url": "https://images.unsplash.com/photo-1727199433231-346fd8101839?crop=entropy&cs=srgb&fm=jpg&q=85",
        "category": "Produtos"
    }
]

print("Populando blog com posts autênticos...")
for post in posts:
    try:
        response = requests.post(f"{API}/blog", json=post, timeout=10)
        if response.status_code == 200:
            print(f"✓ Post criado: {post['title']}")
        else:
            print(f"✗ Erro ao criar: {post['title']}")
    except Exception as e:
        print(f"✗ Erro: {e}")

print("\nPosts criados com sucesso!")
