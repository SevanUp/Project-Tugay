// Animations JavaScript - Scroll-triggered Animations using Intersection Observer

/**
 * Initialize scroll animations when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initScrollReveal();
    initParallaxEffect();
    initHeaderScroll();
});

/**
 * Intersection Observer for Scroll Reveal Animations
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    // Intersection Observer options
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px 0px -100px 0px', // Trigger 100px before element enters viewport
        threshold: 0.15 // Trigger when 15% of element is visible
    };
    
    // Intersection Observer callback
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'revealed' class to trigger animation
                entry.target.classList.add('revealed');
                
                // Optional: Stop observing after reveal (one-time animation)
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove class when element leaves viewport
                // (comment this out for one-time animations)
                // entry.target.classList.remove('revealed');
            }
        });
    };
    
    // Create observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all scroll-reveal elements
    revealElements.forEach(element => {
        observer.observe(element);
    });
    
    console.log(`Initialized scroll reveal for ${revealElements.length} elements`);
}

/**
 * Parallax Effect on Hero Section (Optional)
 */
function initParallaxEffect() {
    const heroSection = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero__image img');
    
    if (!heroSection || !heroImage) return;
    
    // Throttled scroll handler for performance
    const handleParallax = throttle(() => {
        const scrolled = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        
        // Only apply parallax while hero is visible
        if (scrolled < heroHeight) {
            const parallaxValue = scrolled * 0.5;
            heroImage.style.transform = `translateY(${parallaxValue}px)`;
        }
    }, 10);
    
    window.addEventListener('scroll', handleParallax);
    console.log('Initialized parallax effect on hero section');
}

/**
 * Header Background on Scroll
 */
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    if (!header) return;
    
    const handleHeaderScroll = () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
            header.style.boxShadow = 'none';
        }
    };
    
    window.addEventListener('scroll', throttle(handleHeaderScroll, 100));
    console.log('Initialized header scroll effect');
}

/**
 * Image Lazy Loading with Intersection Observer
 * (Optional - use if adding lazy loading to images)
 */
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if (lazyImages.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px'
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
    console.log(`Initialized lazy loading for ${lazyImages.length} images`);
}

/**
 * Animate Elements on Hover
 * Add hover animations to cards and buttons
 */
function initHoverAnimations() {
    // Add hover class to sculpture cards
    const sculptureCards = document.querySelectorAll('.sculpture__card');
    sculptureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add press effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

/**
 * Counter Animation for Numbers
 * (Optional - use if adding statistics/counters)
 * @param {HTMLElement} element - Element containing the number
 * @param {number} target - Target number to count to
 * @param {number} duration - Animation duration in milliseconds
 */
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

/**
 * Progress Bar Animation
 * (Optional - use if adding skill bars or progress indicators)
 * @param {HTMLElement} progressBar - Progress bar element
 * @param {number} targetWidth - Target width percentage
 */
function animateProgressBar(progressBar, targetWidth) {
    let width = 0;
    const interval = setInterval(() => {
        if (width >= targetWidth) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 10);
}

/**
 * Stagger Animation for Grid Items
 * Apply animations to grid items with delay
 * @param {NodeList} elements - Elements to animate
 * @param {number} delayIncrement - Delay between each item in ms
 */
function staggerAnimation(elements, delayIncrement = 100) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('revealed');
        }, index * delayIncrement);
    });
}

/**
 * Utility: Throttle Function
 * Limits function execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} - True if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Scroll to Top Button (Optional)
 * Shows button when user scrolls down
 */
function initScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--accent-cyan);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        font-size: 24px;
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', throttle(() => {
        if (window.pageYOffset > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    }, 200));
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll-to-top button (uncomment to enable)
// initScrollToTop();

// Export functions for testing (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initScrollReveal,
        initParallaxEffect,
        initHeaderScroll,
        animateCounter,
        animateProgressBar,
        staggerAnimation,
        isInViewport,
        throttle
    };
}
