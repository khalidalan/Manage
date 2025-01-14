document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');
  
    menuIcon.addEventListener('click', () => {
      mobileMenu.classList.add('visible');
      overlay.classList.add('visible');
    });
  
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('visible');
      overlay.classList.remove('visible');
    });
  
    overlay.addEventListener('click', () => {
      mobileMenu.classList.remove('visible');
      overlay.classList.remove('visible');
    });
  });
  