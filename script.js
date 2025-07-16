// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    setupScrollEffects();
    initializeCVViewer();
});

// Initialize CV viewer functionality
function initializeCVViewer() {
    // Check if PDF file exists
    fetch('Dushyant_Hamal_CV.pdf')
        .then(response => {
            if (!response.ok) {
                // Hide CV section if PDF not found
                const cvSection = document.querySelector('.cv-section');
                if (cvSection) {
                    cvSection.innerHTML = `
                        <div style="color: #ef4444; text-align: center; padding: 1rem; font-size: 0.8rem;">
                            <i class="fas fa-exclamation-triangle"></i>
                            <div>CV file not found</div>
                        </div>
                    `;
                }
                return;
            }
        })
        .catch(error => {
            console.error('Error checking CV file:', error);
        });
}

// Setup scroll effects
function setupScrollEffects() {
    // Add smooth scrolling for any anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add parallax effect to elements
function addParallaxEffect() {
    const elements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        elements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}
