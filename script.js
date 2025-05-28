// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize animations
    initAnimations();
    
    // Initialize testimonial slider
    initTestimonialSlider();
    
    // Make all sections visible initially
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        section.classList.add('visible');
    });
});

// Scroll animation function
function initAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    // Add visible class to elements in viewport on page load
    checkVisibility(elements);
    
    // Check element visibility on scroll
    window.addEventListener('scroll', function() {
        checkVisibility(elements);
    });
}

function checkVisibility(elements) {
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Simple testimonial slider
function initTestimonialSlider() {
    const slider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (!slider || testimonials.length <= 1) return;
    
    console.log('Initializing testimonial slider with ' + testimonials.length + ' testimonials');
    
    let currentIndex = 0;
    const slideWidth = 100; // 100%
    
    // Set initial position and active dot
    slider.style.transform = `translateX(0%)`;
    updateActiveDot(currentIndex);
    
    // Handle dot clicks
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            goToSlide(index);
        });
    });
    
    // Auto-advance slides
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Functions to control slider
    function nextSlide() {
        currentIndex++;
        if (currentIndex >= testimonials.length) {
            currentIndex = 0;
        }
        goToSlide(currentIndex);
    }
    
    function goToSlide(index) {
        currentIndex = index;
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        updateActiveDot(currentIndex);
        
        // Reset interval to prevent quick transitions
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function updateActiveDot(index) {
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}

// Add animation classes to elements
window.onload = function() {
    console.log('Window loaded');
    
    // Add fade-in class to sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        section.classList.add('visible');
    });
    
    // Add animation to service cards with delay
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.classList.add('visible');
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add animation to pricing cards with delay
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.classList.add('visible');
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add animation to contact methods with delay
    const contactMethods = document.querySelectorAll('.contact-method');
    contactMethods.forEach((method, index) => {
        method.classList.add('fade-in');
        method.classList.add('visible');
        method.style.transitionDelay = `${index * 0.1}s`;
    });
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        header.style.padding = '0.7rem 0';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        header.style.padding = '1rem 0';
    }
}); 