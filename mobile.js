document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navContainer = document.querySelector('.nav-container');

    navToggle.addEventListener('click', function() {
        navContainer.classList.toggle('active');
        const spans = this.querySelectorAll('span');
        
        // Animate hamburger to X
        spans[0].style.transform = navContainer.classList.contains('active') 
            ? 'rotate(45deg) translate(5px, 5px)' 
            : 'none';
        spans[1].style.opacity = navContainer.classList.contains('active') 
            ? '0' 
            : '1';
        spans[2].style.transform = navContainer.classList.contains('active') 
            ? 'rotate(-45deg) translate(7px, -7px)' 
            : 'none';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && navContainer.classList.contains('active')) {
            navContainer.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});
