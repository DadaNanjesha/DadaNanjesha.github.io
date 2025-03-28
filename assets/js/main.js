// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Animate on scroll initialization
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
  
  // Form submission handling
  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For this example, we'll just show an alert
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });
  
  // Dynamic copyright year
  document.querySelector('.copyright').textContent = `© ${new Date().getFullYear()} Dada Nanjesha. All rights reserved.`;
  
  // Responsive navigation menu toggle
  const navToggle = document.createElement('button');
  navToggle.classList.add('nav-toggle');
  navToggle.innerHTML = '<i class="fas fa-bars"></i>';
  document.querySelector('.nav').appendChild(navToggle);
  
  navToggle.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
  });
  
  // Skills animation
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });
  
  // Lazy loading for images
  document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    }
  });
  