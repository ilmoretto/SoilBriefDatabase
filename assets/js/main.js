/**
 * SoilBrief Database Documentation - Main JavaScript
 * Arquivo JavaScript principal para interatividade e funcionalidades dinâmicas
 * 
 * @version 1.0.0
 * @author SoilBrief Team
 * @date 2025
 */

/* ========================================
   INICIALIZAÇÃO E CONFIGURAÇÃO
   ======================================== */

// Configuração global do aplicativo
const SoilBriefApp = {
    // Configurações
    config: {
        scrollOffset: 80,
        animationDuration: 300,
        mobileBreakpoint: 768
    },

    // Estado da aplicação
    state: {
        isMobileMenuOpen: false,
        activeSection: null,
        scrollPosition: 0
    },

    // Inicialização
    init() {
        this.initializeComponents();
        this.setupEventListeners();
        this.setupNavigation();
        this.setupMobileMenu();
        console.log('SoilBrief Documentation App initialized');
    }
};

/* ========================================
   COMPONENTES E FUNCIONALIDADES
   ======================================== */

/**
 * Inicializa todos os componentes da página
 */
SoilBriefApp.initializeComponents = function () {
    // Inicializar ícones do Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Configurar smooth scroll para navegação interna
    this.setupSmoothScroll();

    // Configurar observador de seções ativas
    this.setupIntersectionObserver();

    // Configurar tooltips (se necessário)
    this.setupTooltips();
};

/**
 * Configura navegação suave entre seções
 */
SoilBriefApp.setupSmoothScroll = function () {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - this.config.scrollOffset;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Fechar menu mobile se estiver aberto
                this.closeMobileMenu();
            }
        });
    });
};

/**
 * Configura observador para detectar seção ativa
 */
SoilBriefApp.setupIntersectionObserver = function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.state.activeSection = entry.target.id;

                // Atualizar link ativo na navegação
                navLinks.forEach(link => {
                    const href = link.getAttribute('href').substring(1);
                    link.classList.toggle('active', href === entry.target.id);
                });
            }
        });
    }, {
        rootMargin: `-${this.config.scrollOffset}px 0px -70% 0px`
    });

    sections.forEach(section => observer.observe(section));
};

/**
 * Configura menu mobile
 */
SoilBriefApp.setupMobileMenu = function () {
    // Configurar evento de clique para o botão do menu
    document.addEventListener('click', (e) => {
        if (e.target.closest('.mobile-menu-toggle')) {
            e.preventDefault();
            this.toggleMobileMenu();
        }
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (this.state.isMobileMenuOpen && !e.target.closest('nav') && !e.target.closest('.mobile-menu-overlay')) {
            this.closeMobileMenu();
        }
    });

    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= this.config.mobileBreakpoint) {
            this.closeMobileMenu();
        }
    });
};

/**
 * Alterna estado do menu mobile
 */
SoilBriefApp.toggleMobileMenu = function () {
    this.state.isMobileMenuOpen = !this.state.isMobileMenuOpen;

    const nav = document.querySelector('nav');
    const menuButton = document.querySelector('.md\\:hidden i[data-lucide="menu"]');

    if (this.state.isMobileMenuOpen) {
        this.openMobileMenu(nav, menuButton);
    } else {
        this.closeMobileMenu(nav, menuButton);
    }
};

/**
 * Abre menu mobile
 */
SoilBriefApp.openMobileMenu = function (nav, menuButton) {
    // Criar overlay do menu mobile
    const mobileMenu = this.createMobileMenuOverlay();
    document.body.appendChild(mobileMenu);

    // Animar abertura
    setTimeout(() => {
        mobileMenu.classList.add('active');
    }, 10);

    // Mudar ícone para X
    if (menuButton) {
        menuButton.setAttribute('data-lucide', 'x');
        lucide.createIcons();
    }

    // Prevenir scroll do body
    document.body.style.overflow = 'hidden';
};

/**
 * Fecha menu mobile
 */
SoilBriefApp.closeMobileMenu = function (nav, menuButton) {
    const mobileMenu = document.querySelector('.mobile-menu-overlay');

    if (mobileMenu) {
        mobileMenu.classList.remove('active');

        setTimeout(() => {
            mobileMenu.remove();
        }, this.config.animationDuration);
    }

    // Voltar ícone para menu
    const menuBtn = menuButton || document.querySelector('.md\\:hidden i[data-lucide="x"]');
    if (menuBtn) {
        menuBtn.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    }

    // Restaurar scroll do body
    document.body.style.overflow = '';
    this.state.isMobileMenuOpen = false;
};

/**
 * Cria overlay do menu mobile
 */
SoilBriefApp.createMobileMenuOverlay = function () {
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    overlay.innerHTML = `
        <div class="mobile-menu-content">
            <div class="mobile-menu-header">
                <div class="flex items-center gap-2">
                    <i data-lucide="database" class="h-6 w-6" style="color: var(--color-primary);"></i>
                    <span class="font-bold text-xl tracking-tight" style="color: var(--color-text-primary);">db_soil</span>
                </div>
            </div>
            <div class="mobile-menu-links">
                <a href="#intro" class="mobile-menu-link">Introdução</a>
                <a href="#entidades" class="mobile-menu-link">Modelo de Dados</a>
                <a href="#monitoramento" class="mobile-menu-link">Monitoramento</a>
                <a href="#historico" class="mobile-menu-link">Análise Histórica</a>
                <a href="#ddl" class="mobile-menu-link">DDL</a>
                <a href="#fluxo-iot" class="mobile-menu-link">Uso/IoT</a>
                <a href="#consultas" class="mobile-menu-link">Consultas</a>
                <a href="#relacoes" class="mobile-menu-link">Relações</a>
            </div>
        </div>
    `;

    // Adicionar estilos inline para o overlay
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        z-index: 9999;
        opacity: 0;
        transition: opacity ${this.config.animationDuration}ms ease-in-out;
    `;

    // Estilos para o conteúdo do menu
    const menuContent = overlay.querySelector('.mobile-menu-content');
    menuContent.style.cssText = `
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        width: 280px;
        background: white;
        transform: translateX(100%);
        transition: transform ${this.config.animationDuration}ms ease-in-out;
        box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
    `;

    // Configurar links do menu mobile
    const links = overlay.querySelectorAll('.mobile-menu-link');
    links.forEach(link => {
        link.style.cssText = `
            display: block;
            padding: 16px 24px;
            color: #374151;
            text-decoration: none;
            border-bottom: 1px solid #f3f4f6;
            transition: background-color 0.15s ease;
        `;

        link.addEventListener('click', () => {
            this.closeMobileMenu();
        });

        link.addEventListener('mouseenter', () => {
            link.style.backgroundColor = '#f9fafb';
        });

        link.addEventListener('mouseleave', () => {
            link.style.backgroundColor = 'transparent';
        });
    });

    // Adicionar classe ativa para animação
    overlay.classList.add = function (className) {
        if (className === 'active') {
            this.style.opacity = '1';
            menuContent.style.transform = 'translateX(0)';
        }
    };

    overlay.classList.remove = function (className) {
        if (className === 'active') {
            this.style.opacity = '0';
            menuContent.style.transform = 'translateX(100%)';
        }
    };

    return overlay;
};

/**
 * Configura event listeners globais
 */
SoilBriefApp.setupEventListeners = function () {
    // Monitorar posição do scroll
    window.addEventListener('scroll', () => {
        this.state.scrollPosition = window.pageYOffset;
        this.updateScrollIndicator();
    });

    // Monitorar redimensionamento da janela
    window.addEventListener('resize', () => {
        this.handleResize();
    });

    // Monitorar carregamento da página
    window.addEventListener('load', () => {
        this.handlePageLoad();
    });
};

/**
 * Atualiza indicador de progresso do scroll (opcional)
 */
SoilBriefApp.updateScrollIndicator = function () {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // Implementar indicador visual se necessário
    document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}%`);
};

/**
 * Manipula redimensionamento da janela
 */
SoilBriefApp.handleResize = function () {
    // Fechar menu mobile se redimensionado para desktop
    if (window.innerWidth >= this.config.mobileBreakpoint && this.state.isMobileMenuOpen) {
        this.closeMobileMenu();
    }
};

/**
 * Manipula carregamento completo da página
 */
SoilBriefApp.handlePageLoad = function () {
    // Verificar se há hash na URL e navegar para a seção
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            setTimeout(() => {
                const offsetTop = targetElement.offsetTop - this.config.scrollOffset;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
};

/**
 * Configura navegação principal
 */
SoilBriefApp.setupNavigation = function () {
    // Adicionar efeito de destaque ao link ativo
    const style = document.createElement('style');
    style.textContent = `
        nav a.active {
            color: #2563eb !important;
            font-weight: 600;
            position: relative;
        }
        nav a.active::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            right: 0;
            height: 2px;
            background: #2563eb;
            border-radius: 1px;
        }
    `;
    document.head.appendChild(style);
};

/**
 * Configura tooltips (se necessário)
 */
SoilBriefApp.setupTooltips = function () {
    const elementsWithTooltip = document.querySelectorAll('[data-tooltip]');

    elementsWithTooltip.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            this.showTooltip(e.target, e.target.getAttribute('data-tooltip'));
        });

        element.addEventListener('mouseleave', () => {
            this.hideTooltip();
        });
    });
};

/**
 * Mostra tooltip
 */
SoilBriefApp.showTooltip = function (element, text) {
    // Implementar tooltip personalizado se necessário
    element.title = text;
};

/**
 * Oculta tooltip
 */
SoilBriefApp.hideTooltip = function () {
    // Implementar lógica de ocultação de tooltip personalizado
};

/* ========================================
   UTILITÁRIOS E HELPERS
   ======================================== */

/**
 * Debounce function para otimizar eventos
 */
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

/**
 * Throttle function para limitar execução
 */
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ========================================
   INICIALIZAÇÃO DA APLICAÇÃO
   ======================================== */

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    SoilBriefApp.init();
});

// Fallback para inicialização se DOMContentLoaded já passou
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => SoilBriefApp.init());
} else {
    SoilBriefApp.init();
}