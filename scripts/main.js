document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (currentPath === link.getAttribute('href') || (currentPath === '/' && link.getAttribute('href') === '/')) {
            link.classList.add('active');
        }
    });
});
