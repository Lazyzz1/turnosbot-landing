/**
 * TurnosBot Landing Page - JavaScript
 * Funcionalidad interactiva y animaciones
 */

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// ==================== FAQ TOGGLE ====================
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            } else {
                // Close all other answers
                closeAllFAQs();
                
                // Open this one
                answer.style.display = 'block';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

function closeAllFAQs() {
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.display = 'none';
    });
    document.querySelectorAll('.faq-question i').forEach(icon => {
        icon.style.transform = 'rotate(0deg)';
    });
}

// Initial state for FAQ answers
document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.display = 'none';
});

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
                entry.target.style.opacity = '1';
                
                // Opcional: dejar de observar después de animar
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos
    document.querySelectorAll('.feature-card, .step, .testimonial, .stat-card, .pricing-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// ==================== HEADER SCROLL EFFECT ====================
function initHeaderScroll() {
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Agregar sombra al header al hacer scroll
        if (currentScroll > 100) {
            header.style.boxShadow = '0 5px 30px rgba(0,0,0,0.2)';
        } else {
            header.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
        }

        lastScroll = currentScroll;
    });
}

// ==================== COUNTER ANIMATION ====================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || counter.textContent.replace(/\D/g, ''));
        const duration = 2000; // 2 segundos
        const step = target / (duration / 16); // 60 FPS
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };

        // Observar cuando el contador entra en viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(counter);
    });
}

// ==================== PRICING PLAN SELECTION ====================
// ==================== PRICING PLAN SELECTION (SETUP + MENSUAL) ====================
function initPricingPlans() {
    const planButtons = document.querySelectorAll('.select-plan-btn');
    
    planButtons.forEach(button => {
        button.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            const setupFee = this.getAttribute('data-setup');
            const monthlyFee = this.getAttribute('data-monthly');
            const currency = this.getAttribute('data-currency') || 'USD';
            
            // Construir mensaje de WhatsApp según el plan
            let message = '';
            
            if (plan === 'Argentina') {
                message = `Hola! Estoy interesado en el TurnosBot con *pago en Argentina* 🇦🇷` +                       
                         `¿Me pueden dar más información y ayudarme con la configuración?`;
            } else if (plan === 'Internacional') {
                message = `Hola! Estoy interesado en el TurnosBot con *pago internacional*`
                        `¿Me pueden dar más información y ayudarme con la configuración?`;
            } else {
                // Fallback para otros planes
                message = `Hola! Estoy interesado en el TurnosBot.\n\n¿Me pueden dar más información?`;
            }
            
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/5492974924147?text=${encodedMessage}`;
            
            // Tracking (Google Analytics si está configurado)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'plan_selection', {
                    'event_category': 'Pricing',
                    'event_label': plan,
                    'value': parseInt(setupFee)
                });
            }
            
            // Log para debug
            console.log('Plan seleccionado:', plan);
            console.log('Setup:', setupFee, currency);
            console.log('Mensual:', monthlyFee, currency);
            
            // Abrir WhatsApp
            window.open(whatsappURL, '_blank');
        });
    });
}
console.log('Pricing module loaded');
// ==================== FORM VALIDATION (si tienes formulario) ====================
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = new FormData(form);
            
            // Validar campos
            let isValid = true;
            
            formData.forEach((value, key) => {
                if (!value.trim()) {
                    isValid = false;
                    alert(`Por favor completa el campo: ${key}`);
                }
            });
            
            if (isValid) {
                // Enviar formulario o procesar datos
                console.log('Formulario válido');
                // form.submit();
            }
        });
    });
}

// ==================== MOBILE MENU TOGGLE (si agregas) ====================
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// ==================== WHATSAPP BUTTON TRACKING ====================
function trackWhatsAppClicks() {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Tracking (Google Analytics, Facebook Pixel, etc.)
            console.log('WhatsApp button clicked');
            
            // Si tienes Google Analytics:
            // gtag('event', 'click', {
            //     'event_category': 'WhatsApp',
            //     'event_label': 'Contact Button'
            // });
        });
    });
}

// ==================== COPY TO CLIPBOARD (útil para códigos de descuento) ====================
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('[data-copy]');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.getAttribute('data-copy');
            
            navigator.clipboard.writeText(text).then(() => {
                // Mostrar feedback
                const originalText = this.textContent;
                this.textContent = '¡Copiado!';
                
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });
    });
}

// ==================== LAZY LOADING IMAGES ====================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ==================== PRICING CALCULATOR (opcional) ====================
function initPricingCalculator() {
    const calculator = document.querySelector('.pricing-calculator');
    
    if (calculator) {
        const employeesInput = calculator.querySelector('#employees');
        const totalPrice = calculator.querySelector('.total-price');
        
        employeesInput.addEventListener('input', function() {
            const employees = parseInt(this.value) || 1;
            const basePrice = 80; // USD
            const discount = employees > 5 ? 0.15 : 0; // 15% descuento por volumen
            
            const total = basePrice * (1 - discount);
            totalPrice.textContent = `$${total.toFixed(2)} USD/mes`;
        });
    }
}

// ==================== COUNTDOWN TIMER (para ofertas limitadas) ====================
function initCountdown(targetDate) {
    const countdownEl = document.querySelector('.countdown');
    
    if (!countdownEl) return;
    
    function updateCountdown() {
        const now = new Date().getTime();
        const target = new Date(targetDate).getTime();
        const distance = target - now;
        
        if (distance < 0) {
            countdownEl.textContent = 'Oferta terminada';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownEl.innerHTML = `
            <span>${days}d</span>
            <span>${hours}h</span>
            <span>${minutes}m</span>
            <span>${seconds}s</span>
        `;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ==================== CHATBOT WIDGET (opcional) ====================
function initChatWidget() {
    // Si agregas un widget de chat como Tawk.to, Crisp, etc.
    // window.Tawk_API = window.Tawk_API || {};
}

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initFAQ();
    initScrollAnimations();
    initHeaderScroll();
    animateCounters();
    initPricingPlans();
    trackWhatsAppClicks();
    initLazyLoading();
    
    // Opcional (descomentar si necesitas):
    // initMobileMenu();
    // initFormValidation();
    // initCopyButtons();
    // initPricingCalculator();
    // initCountdown('2025-12-31 23:59:59');
    
    console.log('TurnosBot Landing - Loaded ✓');
});

// ==================== EXPORT (si usas módulos) ====================
// export { initFAQ, initScrollAnimations, animateCounters };