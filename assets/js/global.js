// 🎯 ROI LABS - JAVASCRIPT GLOBAL

// Custom Cursor
class CustomCursor {
    constructor() {
        this.cursor = document.getElementById('cursor');
        this.mouseX = 0;
        this.mouseY = 0;
        this.cursorX = 0;
        this.cursorY = 0;
        
        if (this.cursor) {
            this.init();
        }
    }
    
    init() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
        
        this.animateCursor();
        this.addHoverEffects();
    }
    
    animateCursor() {
        const distX = this.mouseX - this.cursorX;
        const distY = this.mouseY - this.cursorY;
        
        this.cursorX += distX * 0.1;
        this.cursorY += distY * 0.1;
        
        this.cursor.style.left = this.cursorX - 16 + 'px';
        this.cursor.style.top = this.cursorY - 16 + 'px';
        
        requestAnimationFrame(() => this.animateCursor());
    }
    
    addHoverEffects() {
        const interactiveElements = document.querySelectorAll('a, button, .feature-card, .testimonial-dot');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => this.cursor.classList.remove('hover'));
        });
    }
}

// Intersection Observer
class AnimationObserver {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, this.observerOptions);
        
        this.observeElements();
    }
    
    observeElements() {
        const elements = document.querySelectorAll('.section-title, .section-subtitle, .feature-card, .stat-item, .product-visual');
        elements.forEach(el => this.observer.observe(el));
    }
}

// Smooth Scroll
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Utilitários
const ROIUtils = {
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    animateNumber: (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (element.dataset.target === '99.7') {
                element.textContent = current.toFixed(1) + '%';
            } else {
                element.textContent = current.toFixed(1);
            }
        }, 16);
    }
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    new CustomCursor();
    new AnimationObserver();
    new SmoothScroll();
    
    console.log('ROI LABS - Sistema modular inicializado ✨');
});