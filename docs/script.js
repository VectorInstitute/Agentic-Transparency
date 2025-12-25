// Transparency in Agentic AI - Interactive Features
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Sticky Navbar on Scroll
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth Scroll for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Adjust for navbar height
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Copy BibTeX Button
    const copyBtn = document.getElementById('copyBtn');
    const bibtexCode = document.getElementById('bibtexCode');
    
    if (copyBtn && bibtexCode) {
        copyBtn.addEventListener('click', function() {
            const text = bibtexCode.textContent;
            
            // Modern clipboard API
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(function() {
                    // Success feedback
                    const originalText = copyBtn.textContent;
                    copyBtn.textContent = 'Copied!';
                    copyBtn.style.background = '#10b981';
                    
                    setTimeout(function() {
                        copyBtn.textContent = originalText;
                        copyBtn.style.background = '';
                    }, 2000);
                }).catch(function(err) {
                    console.error('Failed to copy:', err);
                    fallbackCopy(text);
                });
            } else {
                // Fallback for older browsers
                fallbackCopy(text);
            }
        });
    }
    
    // Fallback copy method for older browsers
    function fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            document.execCommand('copy');
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            copyBtn.style.background = '#10b981';
            
            setTimeout(function() {
                copyBtn.textContent = originalText;
                copyBtn.style.background = '';
            }, 2000);
        } catch (err) {
            console.error('Fallback copy failed:', err);
            copyBtn.textContent = 'Copy failed';
            setTimeout(function() {
                copyBtn.textContent = 'Copy';
            }, 2000);
        }
        
        document.body.removeChild(textarea);
    }
    
    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Fade-in Animation on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe figures and cards for animation
    const animatedElements = document.querySelectorAll('figure, .card, .card-simple');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Active Navigation Link Highlight
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-menu a');
    
    function highlightNavigation() {
        const scrollPos = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinksAll.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // Add active class styling
    const style = document.createElement('style');
    style.textContent = `
        .nav-menu a.active {
            color: #667eea;
            position: relative;
        }
        .nav-menu a.active::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            right: 0;
            height: 2px;
            background: #667eea;
        }
    `;
    document.head.appendChild(style);
    
    // Lazy Loading Images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
    
    // External Links Open in New Tab
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        if (!link.getAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    // Print Friendly
    window.addEventListener('beforeprint', function() {
        // Expand any collapsed sections
        const collapsedSections = document.querySelectorAll('.collapsed');
        collapsedSections.forEach(section => {
            section.classList.remove('collapsed');
        });
    });
    
    console.log('Transparency in Agentic AI - Interactive features loaded');
});

// Performance: Debounce scroll events
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

// Apply debounce to scroll handlers
const debouncedScroll = debounce(function() {
    // Any expensive scroll operations go here
}, 100);

window.addEventListener('scroll', debouncedScroll);
