// Smooth scrolling for navigation links
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

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// FAQ accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Form submission handling
document.querySelector('.proposal-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    const requiredFields = ['name', 'email', 'tracker-type'];
    let isValid = true;
    
    requiredFields.forEach(field => {
        const input = this.querySelector(`[name="${field}"], input[placeholder*="${field}"], select`);
        if (input && !input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#e74c3c';
        } else if (input) {
            input.style.borderColor = '#eee';
        }
    });
    
    if (isValid) {
        // Show success message
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Request Sent Successfully!';
        button.style.background = '#27ae60';
        
        // Reset form after 3 seconds
        setTimeout(() => {
            this.reset();
            button.innerHTML = originalText;
            button.style.background = '';
        }, 3000);
    } else {
        // Show error message
        alert('Please fill in all required fields.');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.spec-card, .feature-card, .application-card, .benefit-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-bg-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Counter animation for specifications
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Initialize counter animations when specs section is visible
const specsSection = document.querySelector('.specifications');
if (specsSection) {
    const specsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate any numeric values
                const numericElements = entry.target.querySelectorAll('.spec-value');
                numericElements.forEach(el => {
                    const text = el.textContent;
                    const number = parseInt(text.match(/\d+/));
                    if (number) {
                        animateCounter(el, number);
                    }
                });
                specsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    specsObserver.observe(specsSection);
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add mobile menu button if screen is small
function checkMobileMenu() {
    if (window.innerWidth <= 768) {
        const navContainer = document.querySelector('.nav-container');
        let mobileButton = document.querySelector('.mobile-menu-btn');
        
        if (!mobileButton) {
            mobileButton = document.createElement('button');
            mobileButton.className = 'mobile-menu-btn';
            mobileButton.innerHTML = '<i class="fas fa-bars"></i>';
            mobileButton.onclick = toggleMobileMenu;
            navContainer.appendChild(mobileButton);
        }
    }
}

window.addEventListener('resize', checkMobileMenu);
document.addEventListener('DOMContentLoaded', checkMobileMenu);

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Enhanced form validation
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#e74c3c';
            this.setCustomValidity('Please enter a valid email address');
        } else {
            this.style.borderColor = '#eee';
            this.setCustomValidity('');
        }
    });
});

// Scroll to top functionality
function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #2c5530, #4a7c59);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(44, 85, 48, 0.3);
    `;
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
}

document.addEventListener('DOMContentLoaded', createScrollToTop);

