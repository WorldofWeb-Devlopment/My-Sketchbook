document.addEventListener('DOMContentLoaded', () => {
    
    // Add simple scroll reveal functionality
    const sections = document.querySelectorAll('section');
    
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(section => {
        // Prepare sections for animation
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.5, 0, 0, 1)';
        sectionObserver.observe(section);
    });

    // Subtly scatter random doodles across the background
    const doodlesContainer = document.getElementById('doodles-container');
    const doodleSymbols = ['✨', '🖌️', '✏️', '〰️', '✦', '✎', '°。'];
    const numDoodles = window.innerWidth > 768 ? 15 : 5;

    for (let i = 0; i < numDoodles; i++) {
        const span = document.createElement('span');
        span.textContent = doodleSymbols[Math.floor(Math.random() * doodleSymbols.length)];
        span.style.position = 'absolute';
        span.style.left = `${Math.random() * 95}vw`;
        
        // Don't spawn them at the very top (hero area relies on its own doodles)
        span.style.top = `${Math.random() * (document.body.scrollHeight - 500) + 500}px`;
        span.style.fontSize = `${Math.random() * 20 + 10}px`;
        span.style.opacity = `${Math.random() * 0.4 + 0.1}`;
        span.style.color = '#333333';
        span.style.pointerEvents = 'none';
        span.style.zIndex = '-1';
        
        // Randomly float them around
        const duration = Math.random() * 5 + 3;
        span.style.animation = `float ${duration}s ease-in-out infinite`;
        span.style.animationDelay = `${Math.random() * 2}s`;
        
        doodlesContainer.appendChild(span);
    }
});
