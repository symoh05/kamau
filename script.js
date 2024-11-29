// Highlight Active Link in Navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Add active class to the clicked link
        link.classList.add('active');
      });
    });
  });
  
  // Smooth Scroll Effect
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
  
  // Console Log
  console.log('Portfolio for Peter Kamau is functional!');
// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      hamburger.classList.toggle('toggle');
    });
  });
    