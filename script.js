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

// ─── SEUS EBOOKS (com link Kirvano) ───
const myEbooks = [
  {
    id: 1,
    title: "O Manual do Homem Alpha",
    author: "Scroll PAGE DIGITAL",
    price: "R$ 23,99",
    oldPrice: "",
    priceNum: 0,
    genre: "saúde",
    color: accentColors[0],
    coverImg: "imagens/capa-homem-alpha.png",
    kirvanoLink: "https://pay.kirvano.com/d76729ba-4c25-461f-b842-6d34aa828086",
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
    caktoLink: "https://pay.cakto.com.br/3ccq47g_891047",
    desc: "Mais de 100 desenhos bíblicos para colorir, divertir e ensinar a fé às crianças. Ilustrações encantadoras das principais histórias da Bíblia, ideais para escola dominical e uso em família."
  },
  {
    id: 3,
    title: "Atividades Lúdicas Bíblicas",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 12,99",
    oldPrice: "38,99",
    priceNum: 0,
    color: accentColors[3],
    coverImg: "imagens/capa-atividades-ludicas.png",
    kirvanoLink: "https://pay.kirvano.com/0b824d30-b244-4b12-a210-041999f8f1a9",
    desc: "Caça-palavras, labirintos, jogos da memória e muito mais — tudo com temática bíblica. A forma mais divertida de ensinar os valores do evangelho para crianças de forma interativa e criativa."
  },
  {
    id: 4,
    title: "365 Orações para Ensinar aos Filhos",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 21,99",
    oldPrice: "",
    priceNum: 0,
    genre: "Família & Fé",
    color: accentColors[4],
    coverImg: "imagens/capa-365-oracoes.png",
    kirvanoLink: "https://pay.kirvano.com/fb2c6912-990d-4aa2-948f-c6cf23edd339",
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
    kirvanoLink: "https://pay.kirvano.com/22285045-3c59-4171-aafd-dd359d953e2f",
    desc: "Mil frases românticas e emocionantes para declarar amor em qualquer momento. Perfeito para mensagens, cartões, redes sociais e surpreender quem você ama com palavras que tocam o coração."
  },
  {
    id: 6,
    title: "Como Quitar Suas Dívidas",
    author: "Scroll PAGE DIGITAL",
    price: "R$ 26,99",
    oldPrice: "",
    priceNum: 0,
    genre: "Finanças",
    color: accentColors[0],
    coverImg: "imagens/capa-quitar-dividas.png",
    kirvanoLink: "https://pay.kirvano.com/92138f96-cc2f-4e2e-b206-dcf86c1668cb",
    desc: "O método prático para eliminar dívidas rapidamente, organizar seu orçamento e reconquistar sua liberdade financeira. Estratégias reais aplicadas por quem saiu do vermelho e nunca mais voltou."
  }
];

const books = [
  {
    id: 7,
    title: "Seja o Líder Que Todos Querem Ouvir",
    author: "Scroll PAGE DIGITAL",
    price: "R$ 14,99",
    oldPrice: "R$ 49,90",
    priceNum: 29.90,
    color: accentColors[0],
    coverImg: "imagens/Seja o Líder Que Todos Querem Ouvir.png",
    kirvanoLink: "https://pay.kirvano.com/d075d2ca-aad7-4ea0-aa92-909a71346489",
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
    kirvanoLink: "https://pay.kirvano.com/b4044441-0897-47cc-922d-d8c5f33b8f1a",
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
    caktoLink: "https://pay.cakto.com.br/h5urmk2_891089",
    desc: "Cardápios, receitas e estratégias de jejum para perder peso de forma saudável. Um plano simples e funcional para resultados em apenas 7 dias.",
  },
  {
    id: 10,
    title: "A Arte de Falar e Fazer",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 12,99",
    oldPrice: "R$ 52,90",
    priceNum: 31.90,
    color: accentColors[3],
    coverImg: "imagens/A Arte de Falar e Fazer.png",
    kirvanoLink: "https://pay.kirvano.com/629ae421-9f95-4eb6-a97a-b4c5e1f34442", 
    desc: "Técnicas de comunicação e ação para transformar ideias em resultados. Ideal para quem busca mais impacto em apresentações e projetos.",
  },
  {
    id: 11,
    title: "50 Lições Para Você Compreender",
    author: "SCROLL PAGE DIGITAL",
    price: "R$ 12,99",
    oldPrice: "R$ 54,90",
    priceNum: 33.90,
    color: accentColors[4],
    coverImg: "imagens/50 Lições Para Você Compreender.png",
    kirvanoLink: "https://pay.kirvano.com/a68e00e3-2765-4e73-80bf-fb9c81656049", 
    desc: "Um compilado de ensinamentos rápidos e profundos que ajudam a enxergar a vida com mais clareza e propósito.",
    
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
          <button class="card-overlay-btn">${book.caktoLink ? 'Comprar Agora' : 'Ver detalhes'}</button>
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
