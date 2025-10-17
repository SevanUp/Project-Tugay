// Main JavaScript - Event Handlers and Interactions

/**
 * Initialize all event listeners when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initButtons();
    initForm();
    initSmoothScroll();
});

/**
 * Navigation Active State Management
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('section[id]');
    
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('nav__link--active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('nav__link--active');
            }
        });
    });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Button Click Handlers (Empty - Ready for Implementation)
 */
function initButtons() {
    const buttons = document.querySelectorAll('[data-action]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const action = this.getAttribute('data-action');
            handleButtonClick(action, e);
        });
    });
}

/**
 * Handle Button Clicks
 * @param {string} action - The action type from data-action attribute
 * @param {Event} event - The click event
 */
function handleButtonClick(action, event) {
    console.log(`Button clicked: ${action}`);
    
    // TODO: Implement button actions
    switch(action) {
        case 'about-more':
            // Handle "Подробнее" button click
            console.log('About More button clicked - Ready for implementation');
            break;
            
        case 'sculptures-more':
            // Handle "Смотреть ещё" for sculptures
            console.log('Sculptures More button clicked - Ready for implementation');
            break;
            
        case 'news-more':
            // Handle "Смотреть ещё" for news/exhibitions
            console.log('News More button clicked - Ready for implementation');
            break;
            
        default:
            console.log(`Unknown action: ${action}`);
    }
}

/**
 * Form Submission Handler (Empty - Ready for Implementation)
 */
function initForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Auto-expand textarea
        const textarea = contactForm.querySelector('textarea');
        if (textarea) {
            textarea.addEventListener('input', autoExpandTextarea);
        }
    }
}

/**
 * Handle Form Submission
 * @param {Event} event - The form submit event
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    console.log('Form submitted with data:', data);
    
    // TODO: Implement form submission logic
    // - Validate form fields
    // - Send data to backend/service
    // - Show success/error message
    // - Reset form
    
    // Example validation (ready for implementation)
    if (validateForm(data)) {
        console.log('Form validation passed - Ready to send data');
        showFormMessage('success', 'Сообщение отправлено успешно!');
        event.target.reset();
    } else {
        console.log('Form validation failed');
        showFormMessage('error', 'Пожалуйста, заполните все поля корректно');
    }
}

/**
 * Validate Form Data
 * @param {Object} data - Form data object
 * @returns {boolean} - Validation result
 */
function validateForm(data) {
    // Basic validation (ready for implementation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!data.name || data.name.trim().length < 2) {
        console.log('Invalid name');
        return false;
    }
    
    if (!data.email || !emailRegex.test(data.email)) {
        console.log('Invalid email');
        return false;
    }
    
    if (!data.message || data.message.trim().length < 10) {
        console.log('Invalid message');
        return false;
    }
    
    return true;
}

/**
 * Show Form Feedback Message
 * @param {string} type - Message type ('success' or 'error')
 * @param {string} message - Message text
 */
function showFormMessage(type, message) {
    // TODO: Implement message display
    console.log(`[${type.toUpperCase()}] ${message}`);
    
    // Create message element (ready for implementation)
    const messageEl = document.createElement('div');
    messageEl.className = `form-message form-message--${type}`;
    messageEl.textContent = message;
    
    const form = document.getElementById('contactForm');
    if (form) {
        // Remove existing message
        const existingMessage = form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Insert new message
        form.insertBefore(messageEl, form.firstChild);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }
}

/**
 * Auto-expand Textarea on Input
 * @param {Event} event - Input event
 */
function autoExpandTextarea(event) {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}

/**
 * Utility: Debounce Function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Utility: Throttle Function
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

// Export functions for testing (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        handleButtonClick,
        handleFormSubmit,
        validateForm,
        showFormMessage,
        autoExpandTextarea,
        debounce,
        throttle
    };
}
