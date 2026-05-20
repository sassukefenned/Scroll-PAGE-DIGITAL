// Minimal QR Code visual (decorative, represents real QR pattern aesthetics)
function generateQRSVG(text) {
  // In production: use a real QR code library like qrcode.js or generate server-side
  // This creates a decorative placeholder that visually represents a QR code
  const size = 140;
  const cells = 21;
  const cellSize = Math.floor(size / cells);
  let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" style="background:white;">`;

  // Use text hash to create deterministic pattern
  let hash = 0;
  for (let i = 0; i < text.length; i++) hash = (hash * 31 + text.charCodeAt(i)) | 0;

  // Finder patterns (corners)
  function finderPattern(ox, oy) {
    svg += `<rect x="${ox*cellSize}" y="${oy*cellSize}" width="${7*cellSize}" height="${7*cellSize}" fill="black"/>`;
    svg += `<rect x="${(ox+1)*cellSize}" y="${(oy+1)*cellSize}" width="${5*cellSize}" height="${5*cellSize}" fill="white"/>`;
    svg += `<rect x="${(ox+2)*cellSize}" y="${(oy+2)*cellSize}" width="${3*cellSize}" height="${3*cellSize}" fill="black"/>`;
  }
  finderPattern(0,0); finderPattern(14,0); finderPattern(0,14);

  // Data modules (decorative)
  const rng = (seed) => { seed = Math.sin(seed + hash) * 10000; return seed - Math.floor(seed); };
  for (let r = 0; r < cells; r++) {
    for (let c = 0; c < cells; c++) {
      const inFinder = (r<8&&c<8)||(r<8&&c>12)||(r>12&&c<8);
      const onTiming = (r===6&&c>7&&c<14)||(c===6&&r>7&&r<14);
      if (!inFinder && !onTiming) {
        if (rng(r*cells+c) > 0.5) {
          svg += `<rect x="${c*cellSize}" y="${r*cellSize}" width="${cellSize}" height="${cellSize}" fill="black"/>`;
        }
      }
    }
  }
  // Timing patterns
  for (let i = 8; i < 13; i++) {
    if (i%2===0) {
      svg += `<rect x="${i*cellSize}" y="${6*cellSize}" width="${cellSize}" height="${cellSize}" fill="black"/>`;
      svg += `<rect x="${6*cellSize}" y="${i*cellSize}" width="${cellSize}" height="${cellSize}" fill="black"/>`;
    }
  }
  svg += '</svg>';
  return svg;
}

// ─── BOOK DATA ───
const accentColors = ['#e8c87a','#7ac8e8','#e87a9a','#8de87a','#e8a07a','#b07ae8'];

// ─── SEUS EBOOKS (com link Eduxz) ───
const myEbooks = [
  {
    id: 1,
    title: "O Manual do Homem Alpha",
    author: "Scroll PAGE DIGITAL",
    price: "R$ 19,99",
    oldPrice: "",
    priceNum: 0,
    color: accentColors[0],
    coverImg: "imagens/capa-homem-alpha.png",
    eduzzLink: "https://chk.eduzz.com/R9JXEV6Y0X",
    desc: "O guia completo para desenvolver presença, liderança e mentalidade de alto desempenho. Aprenda os princípios que transformam homens comuns em referências em todas as áreas da vida."
  },
  
  {
    id: 2,
    title: "100+ Desenhos Bíblicos para Crianças",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 22,99",
    oldPrice: "R$ 52,99",
    priceNum: 0,
    genre: "Infantil",
    color: accentColors[2],
    coverImg: "imagens/capa-desenhos-biblicos.png",
    eduzzLink: "https://chk.eduzz.com/797Z1OBA0E",
    desc: "Mais de 100 desenhos bíblicos para colorir, divertir e ensinar a fé às crianças. Ilustrações encantadoras das principais histórias da Bíblia, ideais para escola dominical e uso em família."
  },
  {
    id: 3,
    title: "Atividades Lúdicas Bíblicas",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 18,49",
    oldPrice: "38,99",
    priceNum: 0,
    color: accentColors[3],
    coverImg: "imagens/capa-atividades-ludicas.png",
    eduzzLink: "https://chk.eduzz.com/G92K8ORXWE",
    desc: "Caça-palavras, labirintos, jogos da memória e muito mais — tudo com temática bíblica. A forma mais divertida de ensinar os valores do evangelho para crianças de forma interativa e criativa."
  },
  {
    id: 4,
    title: "365 Orações para Ensinar aos Filhos",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 18,39",
    oldPrice: "",
    priceNum: 0,
    genre: "Família & Fé",
    color: accentColors[4],
    coverImg: "imagens/capa-365-oracoes.png",
    eduzzLink: "https://chk.eduzz.com/1W32X5YD92",
    desc: "Uma oração para cada dia do ano, cuidadosamente escrita para pais ensinarem os filhos a se comunicar com Deus. Linguagem simples, afetiva e profunda — ideal para fortalecer a fé em família."
  },
  {
    id: 5,
    title: "1.000 Frases de Amor para Todas as Ocasiões",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 14,99",
    oldPrice: "",
    priceNum: 0,
    genre: "Relacionamentos",
    color: accentColors[5],
    coverImg: "imagens/capa-1000-frases-amor.png",
    eduzzLink: "https://chk.eduzz.com/E9OGE6RGWB",
    desc: "Mil frases românticas e emocionantes para declarar amor em qualquer momento. Perfeito para mensagens, cartões, redes sociais e surpreender quem você ama com palavras que tocam o coração."
  },
  {
    id: 6,
    title: "Como Quitar Suas Dívidas",
    author: "Scroll PAGE DIGITAL",
    price: "R$ 18,29",
    oldPrice: "",
    priceNum: 0,
    genre: "Finanças",
    color: accentColors[0],
    coverImg: "imagens/capa-quitar-dividas.png",
    eduzzLink: "https://chk.eduzz.com/KW8ZVJ2R01",
    desc: "O método prático para eliminar dívidas rapidamente, organizar seu orçamento e reconquistar sua liberdade financeira. Estratégias reais aplicadas por quem saiu do vermelho e nunca mais voltou."
  }
];

const books = [
  {
    id: 7,
    title: "Seja o Líder Que Todos Querem Ouvir",
    author: "Scroll PAGE DIGITAL",
    price: "R$ 31,99",
    oldPrice: "R$ 49,90",
    priceNum: 29.90,
    color: accentColors[0],
    coverImg: "imagens/Seja o Líder Que Todos Querem Ouvir.png",
    eduzzLink: "https://chk.eduzz.com/Q9N2POYK01",
    desc: "Um guia prático para desenvolver comunicação clara e inspiradora, conquistar respeito e se tornar referência em qualquer ambiente profissional.",
  },
  {
    id: 8,
    title: "Ninguém é Fudido por Acaso",
    author: "Scroll PAGE DIGITAL",
    price: "R$ 13,99",
    oldPrice: "R$ 44,90",
    priceNum: 27.90,
    color: accentColors[1],
    coverImg: "imagens/Ninguém é Fudido por Acaso.png",
    eduzzLink: "https://chk.eduzz.com/1W32X53D92",
    desc: "Reflexões diretas e motivadoras sobre escolhas, disciplina e atitude. Um manual para quem quer virar o jogo e assumir o controle da própria vida.",
  },
  {
    id: 9,
    title: "Plano Alimentar – Desafio do Emagrecimento",
    author: "Scroll PAGE DIGITAL",
    price: "R$ R$ 12,99",
    oldPrice: "R$ 39,90",
    priceNum: 24.90,
    color: accentColors[2],
    coverImg: "imagens/Plano Alimentar – Desafio do Emagrecimento.png",
    eduzzLink: "https://chk.eduzz.com/60E2DVJDW3",
    desc: "Cardápios, receitas e estratégias de jejum para perder peso de forma saudável. Um plano simples e funcional para resultados em apenas 7 dias.",
  },
  {
    id: 10,
    title: "A Arte de Falar e Fazer",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 16,29",
    oldPrice: "R$ 52,90",
    priceNum: 31.90,
    color: accentColors[3],
    coverImg: "imagens/A Arte de Falar e Fazer.png",
    eduzzLink: "https://chk.eduzz.com/Z0B1OJPJ9A", 
    desc: "Técnicas de comunicação e ação para transformar ideias em resultados. Ideal para quem busca mais impacto em apresentações e projetos.",
  },
  {
    id: 11,
    title: "50 Lições Para Você Compreender",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 11,49",
    oldPrice: "R$ 54,90",
    priceNum: 33.90,
    color: accentColors[4],
    coverImg: "imagens/50 Lições Para Você Compreender.png",
    eduzzLink: "https://chk.eduzz.com/40QRO6GQ9B", 
    desc: "Um compilado de ensinamentos rápidos e profundos que ajudam a enxergar a vida com mais clareza e propósito.",
    
  },
  {
    id: 12,
    title: "Alfabetização para Autistas",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 19,90",
    oldPrice: "R$ 54,90",
    priceNum: 33.90,
    color: accentColors[4],
    coverImg: "imagens/Alfabetização para Autistas.png",
    eduzzLink: "https://chk.eduzz.com/KW8ZVJQ201", 
    desc: "Alfabetização especial para crianças autistas Atividades visuais, formas geométricas e associações lúdicas.Ideal para pais, professores e terapeutas.",
    },
  {
    id: 13,
    title: "Gosto de Aprender – 4 anos",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 14,90",
    oldPrice: "R$ 54,90",
    priceNum: 33.90,
    color: accentColors[4],
    coverImg: "imagens/Gosto de Aprender – 4 anos.png",
    eduzzLink: "https://chk.eduzz.com/VWGNEVQV07", 
    desc: "4 anos é a idade mágica do aprendizado!+120 páginas de linguagem, matemática, cores e números. Com cantigas, parlendas e muito mais.",
    
  },{
    id: 14,
    title: "Caderno Criativo – 3 a 5 anos",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 14,90",
    oldPrice: "R$ 54,90",
    priceNum: 33.90,
    color: accentColors[4],
    coverImg: "imagens/Caderno Criativo – 3 a 5 anos.png",
    eduzzLink: "https://chk.eduzz.com/40QRO6ZP9B", 
    desc: "Mais de 150 atividades lúdicas para crianças de 3 a 5 anos.Coordenação motora, alfabeto, números, recorte, colagem.Perfeito para educação infantil e reforço escolar.",
    
  },{
    id: 15,
    title: "Iniciando o Aprender – Pré-escola I",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 11,49",
    oldPrice: "R$ 54,90",
    priceNum: 33.90,
    color: accentColors[4],
    coverImg: "imagens/Iniciando o Aprender – Pré-escola I.png",
    eduzzLink: "https://chk.eduzz.com/1W32X5NP92", 
    desc: "📚 Material alinhado à BNCC para crianças de 4 anos.192 páginas com vogais, números até 30, lateralidade, gráficos e mais.Ideal para escolas e reforço domiciliar.",
    
  },{
    id: 16,
    title: "Pequenos Mestres da Coordenação Motora",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 12,90",
    oldPrice: "R$ 54,90",
    priceNum: 33.90,
    color: accentColors[4],
    coverImg: "imagens/Pequenos Mestres da Coordenação Motora.png",
    eduzzLink: "https://chk.eduzz.com/Z0B1OJ279A", 
    desc: "🖌️ 31 atividades sensoriais com tinta, colagem e tracejado. Desenvolve coordenação motora fina de forma divertida. Para crianças de 3 a 6 anos, inclusive com TEA ou atraso motor.",
    
  },
  {
    id: 17,
    title: "Kit Autismo – Habilidades Cognitivas",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 22,90",
    oldPrice: "R$ 54,90",
    priceNum: 33.90,
    color: accentColors[4],
    coverImg: "imagens/Kit Autismo – Habilidades Cognitivas.png",
    eduzzLink: "https://chk.eduzz.com/39YNZ5G4WO", 
    desc: "🧩 Use quebra-cabeças e pareamento para estimular cognição no TEA. Pranchas para recortar, jogos de formas, sombras e conceitos. Perfeito para terapia ocupacional e psicopedagogia.”.",},
  ,
  {
    id: 19,
    title: "101 Ideias para Brincar e Ensinar",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 19,90",
    oldPrice: "R$ 54,90",
    priceNum: 33.90,
    color: accentColors[4],
    coverImg: "imagens/101 Ideias para Brincar e Ensinar.png",
    eduzzLink: "https://chk.eduzz.com/6W4G137O0Z", 
    desc: "🎲 Brincadeiras adaptadas com objetivo pedagógico claro. Sensorial, encaixe, teatro, massinha, piquenique, acampamento. Guia para pais e professores que querem interação de verdade.",
    
  },
  ,
  {
    id: 20,
    title: "Como Alfabetizar Pessoas com Autismo",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 11,49",
    oldPrice: "R$ 54,90",
    priceNum: 33.90,
    color: accentColors[4],
    coverImg: "imagens/Como Alfabetizar Pessoas com Autismo.png",
    eduzzLink: "https://chk.eduzz.com/R9JXEQRE0X", 
    desc: "🧭 Método completo: lateralidade, orientação espacial, memória cinestésica, linguagem oral. Dezenas de atividades práticas. Para educadores, terapeutas e familiares comprometidos com resultados.",
    
  },
  ,
  {
    id: 21,
    title: "Alfabetização Divertida – 2º ano",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 17,90",
    oldPrice: "R$ 54,90",
    priceNum: 33.90,
    color: accentColors[4],
    coverImg: "imagens/Alfabetização Divertida – 2º ano.png",
    eduzzLink: "https://chk.eduzz.com/7WXG1BA40A", 
    desc: "📖 Apostila completa para o 2º ano (83 páginas). Poesias, fábulas, interpretação, ortografia, produção de frases. Reforço escolar, aulas remotas ou complemento em casa.",
    
  },
  ,
  {
    id: 21,
    title: "Leitura e Escrita em Ação – 1º e 2º ano",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 19,90",
    oldPrice: "R$ 54,90",
    priceNum: 33.90,
    color: accentColors[4],
    coverImg: "imagens/Leitura e Escrita em Ação – 1º e 2º ano.png",
    eduzzLink: "https://chk.eduzz.com/D0R85O269Y", 
    desc: "✏️ +100 atividades para desenvolver leitura e escrita. Sondagem, listas, textos, pontuação, jogos e plano de aula adaptado. Professor, isso é o que faltava no seu material.",
    
  },
  ,
  {
    id: 21,
    title: "🚨 Malha Fina? Nem pensar! Faça sua declaração com quem entende.- Declaração de Imposto de Renda",
    author: "REINALDO JUNIOR",
    price: "R$ 100,00",
    oldPrice: "R$ 54,90",
    priceNum: 33.90,
    color: accentColors[4],
    coverImg: "imagens/imposto de renda.jpeg",
    eduzzLink: "https://chk.eduzz.com/39ZRE8NZWE", 
    desc: "Não erre na declaração do Imposto de Renda e evite a malha fina! Você recebeu a notificação para declarar o IRPF e está com dúvidas? Não sabe quais despesas abater, como informar bens, rendimentos ou dependentes? Eu te ajudo do início ao fim, com segurança, rapidez e preço justo. ✅ O que você recebe: Análise completa da sua situação fiscal Preenchimento correto da declaração (via computador ou celular) Identificação de possíveis restituições Orientação para não cair na malha fina Entrega dentro do prazo da Receita Federal 👨‍💼 Quem sou eu: Reinaldo Junior – especialista em declaração de Imposto de Renda. Atendo pessoas físicas, autônomos, aposentados e profissionais liberais. 📞 Entre em contato agora mesmo: (63) 999596068 (WhatsApp) Atendimento rápido e personalizado. 🔒 Dados sigilosos e entrega garantida. Faça sua declaração com quem entende do assunto!",
    
  },
  ,
  { 
    
  },
  
];

// Merge: seus ebooks aparecem primeiro na grade
const allBooks = [...myEbooks, ...books];

function renderBooks() {
  const grid = document.getElementById('booksGrid');
  grid.innerHTML = '';
  allBooks.forEach((book, i) => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.style.animationDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <div class="card-img-wrap">
        <div class="book-cover">
          <div class="book-cover-lines"></div>
          <div class="book-cover-bar" style="background:${book.color}"></div>
          <div class="book-cover-title">${book.title}</div>
          <div class="book-cover-author">${book.author}</div>
          <div class="book-cover-num">${String(i+1).padStart(2,'0')}</div>
        </div>
        ${book.coverImg ? `<img class="card-cover-img" src="${book.coverImg}" alt="${book.title}" onerror="this.remove();">` : ''}
        <div class="card-overlay">
          <button class="card-overlay-btn">${book.eduzzLink ? 'Comprar Agora' : 'Ver detalhes'}</button>
        </div>
      </div>
      <div class="card-info">
        <div class="card-badge">${book.genre}</div>
        <div class="card-title">${book.title}</div>
        <div class="card-author">${book.author}</div>
        <div class="card-footer">
          <div class="card-price">${book.price || 'Ver oferta'}</div>
          <span class="card-arrow">↗</span>
        </div>
      </div>
    `;
    card.onclick = () => openModal(book);
    grid.appendChild(card);
  });
}

// ─── MODAL ───
let currentBook = null;

function openModal(book) {
  currentBook = book;
  document.getElementById('modalTitle').textContent = book.title;
  document.getElementById('modalAuthor').textContent = `por ${book.author}`;
  document.getElementById('modalPrice').textContent = book.price || 'Ver oferta';
  document.getElementById('modalOldPrice').textContent = book.oldPrice || '';
  document.getElementById('modalDesc').textContent = book.desc;
  document.getElementById('modalGenre').textContent = book.genre;
  document.getElementById('specPages').textContent = book.pages;
  document.getElementById('specYear').textContent = book.year;
  document.getElementById('specCat').textContent = book.genre;

  // Show/hide Kirvano or PIX payment section
  const pixSection = document.getElementById('pixPaymentSection');
  const eduzzSection = document.getElementById('eduzzPaymentSection');
  if (book.eduzzLink) {
    pixSection.style.display = 'none';
    eduzzSection.style.display = 'block';
    const btn = document.getElementById('eduzzBuyBtn');
    btn.href = book.eduzzLink;
  } else {
    pixSection.style.display = 'block';
    eduzzSection.style.display = 'none';
    document.getElementById('pixKeyText').textContent = book.pixKey;
    document.getElementById('qrBox').innerHTML = generateQRSVG(book.pixKey + book.price);
  }

  // Book cover in modal
  const cover = document.getElementById('modalCover');
  const fallbackCover = `
    <div class="modal-book-cover" style="background:var(--bg3);">
      <div class="book-cover-lines"></div>
      <div style="position:absolute;left:0;top:0;bottom:0;width:4px;background:${book.color}"></div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:1px;line-height:1.1;color:var(--text);position:relative;z-index:1;">${book.title}</div>
      <div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);position:relative;z-index:1;">${book.author}</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:80px;line-height:1;color:rgba(255,255,255,0.05);margin-top:8px;">${book.price}</div>
      </div>
    </div>
  `;
  cover.innerHTML = fallbackCover
    + (book.coverImg
      ? `<img src="${book.coverImg}" alt="${book.title}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;" onerror="this.remove();">`
      : '');

  document.getElementById('emailInput').value = '';
  document.getElementById('modalBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalBackdrop')) closeModal();
}

// ─── PIX COPY ───
function copyPix() {
  if (!currentBook) return;
  navigator.clipboard.writeText(currentBook.pixKey).then(() => {
    showToast('Chave Pix copiada!');
  }).catch(() => {
    const el = document.getElementById('pixKeyText');
    const range = document.createRange();
    range.selectNode(el);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    showToast('Selecione e copie a chave Pix acima.');
  });
}

// ─── CONFIRM PURCHASE ───
function confirmPurchase() {
  const email = document.getElementById('emailInput').value.trim();
  if (!email || !email.includes('@')) {
    showToast('Por favor, informe um e-mail válido.');
    return;
  }
  const btn = document.getElementById('confirmBtn');
  btn.disabled = true;
  btn.textContent = '...';

  // Simulate backend call
  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = 'Confirmar';
    closeModal();
    showToast(`✓ Ebook enviado para ${email}! Verifique sua caixa de entrada.`);
  }, 2000);
}

// ─── TOAST ───
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3800);
}

// ─── NAV SCROLL ───
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

// ─── HAMBURGER ───
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ─── CATEGORIES ───
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// ─── REVEAL ON SCROLL ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ─── KEYBOARD CLOSE ───
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ─── INIT ───
renderBooks();

// Re-observe after render
setTimeout(() => {
  document.querySelectorAll('.book-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}, 100);
