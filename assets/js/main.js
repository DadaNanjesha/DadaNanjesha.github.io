document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out'
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to current section in view
    window.addEventListener('scroll', function () {
        let fromTop = window.scrollY;

        document.querySelectorAll('section').forEach(section => {
            let sectionTop = section.offsetTop - 100;
            let sectionHeight = section.offsetHeight;
            let id = section.getAttribute('id');

            if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
                document.querySelector(`a[href="#${id}"]`).classList.add('active');
            } else {
                document.querySelector(`a[href="#${id}"]`).classList.remove('active');
            }
        });
    });
});