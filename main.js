/**
 * Ativiza — Landing: i18n + scroll animations
 */

(function () {
  'use strict';

  const translations = {
    pt: {
      'skip': 'Ir para o conteúdo principal',
      'nav.problem': 'O problema',
      'nav.solution': 'A solução',
      'nav.preview': 'Plataforma',
      'nav.features': 'Recursos',
      'nav.contact': 'Contato',
      'nav.menu': 'Abrir menu',
      'nav.menuClose': 'Fechar menu',
      'lang.pt': 'PT',
      'hero.badge': 'Em desenvolvimento · Em breve',
      'hero.title1': 'O hub inteligente para o',
      'hero.title2': 'microinvestidor profissional',
      'hero.desc': 'Centralize empréstimos, ativos e decisões financeiras. Use dados e IA para se tornar um gestor financeiro de verdade — sem planilhas, sem caos.',
      'hero.cta': 'Quero ser avisado no lançamento',
      'problem.title': 'O problema do microinvestidor',
      'problem.lead': 'As ferramentas do mercado não foram feitas para quem opera em pequena escala com mentalidade profissional.',
      'problem.1': 'Controle de empréstimos em planilhas improvisadas',
      'problem.2': 'Perda de visibilidade sobre inadimplência e juros reais',
      'problem.3': 'Dificuldade para consolidar diferentes ativos',
      'problem.4': 'Decisões baseadas em intuição, não em dados',
      'problem.5': 'Falta de previsibilidade de fluxo de caixa e retorno',
      'problem.note': 'Enquanto isso, bancos e fundos usam sistemas robustos de análise de risco, projeções e IA — recursos inacessíveis ao pequeno operador.',
      'solution.title': 'Uma plataforma para reduzir essa assimetria',
      'solution.lead': 'Transforme microinvestidores em gestores financeiros profissionais: controle, análise e decisão em um único hub inteligente.',
      'goal1.title': 'Profissionalizar a gestão',
      'goal1.desc': 'Centralize empréstimos, parcelas, juros e renegociações. Visão clara de quem paga, quem atrasa e quanto rende.',
      'goal2.title': 'Visibilidade total',
      'goal2.desc': 'Consolide ativos em um painel. Rentabilidade real, risco por categoria e evolução patrimonial.',
      'goal3.title': 'IA a seu favor',
      'goal3.desc': 'Avalie risco, projete fluxo de caixa, detecte inadimplência e simule cenários para decidir com dados.',
      'goal4.title': 'Previsibilidade e segurança',
      'goal4.desc': 'Antecipe problemas, reduza perdas e cresça de forma sustentável e controlada.',
      'goal5.title': 'Ferramentas de nível institucional',
      'goal5.desc': 'Recursos antes restritos a bancos e fundos, em uma experiência simples e orientada a dados.',
      'features.title': 'O que você terá na plataforma',
      'feature1': 'Controle centralizado de empréstimos e parcelas',
      'feature2': 'Painel consolidado de ativos e rentabilidade',
      'feature3': 'Análise de risco e projeções com IA',
      'feature4': 'Alertas e previsibilidade de fluxo de caixa',
      'feature5': 'Simulações e sugestões para maximizar retorno',
      'cta.title': 'Em breve no mercado',
      'cta.desc': 'Estamos construindo a plataforma. Cadastre-se para ser avisado no lançamento e ter acesso antecipado.',
      'cta.label': 'Seu melhor e-mail',
      'cta.placeholder': 'seu@email.com',
      'cta.button': 'Avise-me',
      'cta.note': 'Sem spam. Apenas uma mensagem quando lançarmos.',
      'preview.title': 'Conheça a plataforma',
      'preview.lead': 'Interface moderna para controle de empréstimos, análise de inadimplência e rentabilidade em um só lugar.',
      'preview.cap1': 'Tela inicial e painel',
      'preview.cap2': 'Opções e configurações',
      'preview.cap3': 'Experiência do app',
      'footer.tagline': 'Hub inteligente para o microinvestidor.',
      'footer.rights': 'Todos os direitos reservados.',
    },
    en: {
      'skip': 'Skip to main content',
      'nav.problem': 'The problem',
      'nav.solution': 'The solution',
      'nav.preview': 'Platform',
      'nav.features': 'Features',
      'nav.contact': 'Contact',
      'nav.menu': 'Open menu',
      'nav.menuClose': 'Close menu',
      'lang.pt': 'PT',
      'hero.badge': 'In development · Coming soon',
      'hero.title1': 'The smart hub for the',
      'hero.title2': 'professional micro-investor',
      'hero.desc': 'Centralize loans, assets, and financial decisions. Use data and AI to become a real financial manager — no spreadsheets, no chaos.',
      'hero.cta': 'Notify me at launch',
      'problem.title': 'The micro-investor problem',
      'problem.lead': 'Market tools were not built for those who operate at small scale with a professional mindset.',
      'problem.1': 'Loan control in makeshift spreadsheets',
      'problem.2': 'Loss of visibility on default and real interest rates',
      'problem.3': 'Difficulty consolidating different assets',
      'problem.4': 'Decisions based on intuition, not data',
      'problem.5': 'Lack of cash flow and return predictability',
      'problem.note': 'Meanwhile, banks and funds use robust risk analysis, projections, and AI — resources inaccessible to the small operator.',
      'solution.title': 'A platform to reduce that gap',
      'solution.lead': 'Turn micro-investors into professional financial managers: control, analysis, and decision-making in one smart hub.',
      'goal1.title': 'Professionalize management',
      'goal1.desc': 'Centralize loans, installments, interest, and renegotiations. Clear view of who pays, who defaults, and how much it yields.',
      'goal2.title': 'Full visibility',
      'goal2.desc': 'Consolidate assets in one dashboard. Real profitability, risk by category, and wealth evolution.',
      'goal3.title': 'AI on your side',
      'goal3.desc': 'Assess risk, project cash flow, detect default patterns, and simulate scenarios to decide with data.',
      'goal4.title': 'Predictability and security',
      'goal4.desc': 'Anticipate problems, reduce losses, and grow in a sustainable and controlled way.',
      'goal5.title': 'Institutional-grade tools',
      'goal5.desc': 'Resources once restricted to banks and funds, in a simple, data-driven experience.',
      'features.title': 'What you\'ll get on the platform',
      'feature1': 'Centralized loan and installment control',
      'feature2': 'Consolidated assets and profitability dashboard',
      'feature3': 'Risk analysis and AI-powered projections',
      'feature4': 'Alerts and cash flow predictability',
      'feature5': 'Simulations and suggestions to maximize return',
      'cta.title': 'Coming to market soon',
      'cta.desc': 'We\'re building the platform. Sign up to be notified at launch and get early access.',
      'cta.label': 'Your best email',
      'cta.placeholder': 'you@email.com',
      'cta.button': 'Notify me',
      'cta.note': 'No spam. Just one message when we launch.',
      'preview.title': 'See the platform',
      'preview.lead': 'Modern interface for loan control, default analysis, and profitability in one place.',
      'preview.cap1': 'Home and dashboard',
      'preview.cap2': 'Options and settings',
      'preview.cap3': 'App experience',
      'footer.tagline': 'Smart hub for the micro-investor.',
      'footer.rights': 'All rights reserved.',
    },
  };

  let currentLang = 'pt';

  function getInitialLang() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('lang') === 'en') return 'en';
    if (typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('en')) return 'en';
    return 'pt';
  }

  function applyLang(lang) {
    currentLang = lang;
    const t = translations[lang] || translations.pt;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (t[key] == null) return;
      if (el.tagName === 'INPUT') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-aria-label');
      if (t[key] != null) el.setAttribute('aria-label', t[key]);
    });
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    try { localStorage.setItem('ativiza-lang', lang); } catch (e) {}
  }

  function toggleLang() {
    const next = currentLang === 'pt' ? 'en' : 'pt';
    applyLang(next);
  }

  function initLang() {
    currentLang = getInitialLang();
    try {
      const saved = localStorage.getItem('ativiza-lang');
      if (saved === 'en' || saved === 'pt') currentLang = saved;
    } catch (e) {}
    applyLang(currentLang);

    var btn = document.querySelector('.lang-toggle');
    if (btn) btn.addEventListener('click', toggleLang);

    var navToggle = document.querySelector('.nav-toggle');
    var navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function () {
        var open = navMenu.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', open);
        var t2 = translations[currentLang] || translations.pt;
        navToggle.setAttribute('aria-label', t2[open ? 'nav.menuClose' : 'nav.menu']);
      });
      navMenu.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
          navMenu.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
          var t3 = translations[currentLang] || translations.pt;
          navToggle.setAttribute('aria-label', t3['nav.menu']);
        });
      });
    }
  }

  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  function initScrollAnimations() {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 }
    );
    document.querySelectorAll('.animate-in').forEach(function (el) {
      observer.observe(el);
    });
  }

  function initForm() {
    var form = document.querySelector('.cta-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var email = (document.getElementById('email') || {}).value;
        if (email) {
          console.log('Signup (placeholder):', email);
          var btn = form.querySelector('.cta-btn');
          if (btn) {
            btn.textContent = currentLang === 'pt' ? 'Enviado!' : 'Sent!';
            btn.disabled = true;
          }
        }
      });
    }
  }

  function initCarousel() {
    var track = document.querySelector('.carousel-track');
    var slides = document.querySelectorAll('.carousel-slide');
    var dots = document.querySelectorAll('.carousel-dot');
    var prevBtn = document.querySelector('.carousel-prev');
    var nextBtn = document.querySelector('.carousel-next');
    if (!track || !slides.length) return;

    var total = slides.length;
    var current = 0;

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = 'translateX(-' + current * 100 + '%)';
      dots.forEach(function (dot, i) {
        dot.setAttribute('aria-selected', i === current ? 'true' : 'false');
      });
      slides.forEach(function (slide, i) {
        slide.setAttribute('aria-hidden', i !== current ? 'true' : 'false');
      });
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var i = parseInt(dot.getAttribute('data-index'), 10);
        if (!isNaN(i)) goTo(i);
      });
    });

    slides.forEach(function (slide, i) {
      slide.setAttribute('aria-hidden', i !== 0 ? 'true' : 'false');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initLang();
      initYear();
      initScrollAnimations();
      initForm();
      initCarousel();
    });
  } else {
    initLang();
    initYear();
    initScrollAnimations();
    initForm();
    initCarousel();
  }
})();
