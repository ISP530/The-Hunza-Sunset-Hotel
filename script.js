document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = navToggle.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
  }

  // Close menu after link click
  document.querySelectorAll('.nav-link, .btn').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const icon = navToggle?.querySelector('i');
      if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-times'); }
    });
  });

  // Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.padding = '10px 0';
      header.style.background = 'rgba(10,10,10,0.98)';
    } else {
      header.style.padding = '15px 0';
      header.style.background = 'rgba(10,10,10,0.95)';
    }
  });

  // Back to top
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
  });
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // “Book This Room” -> fill room select & scroll to contact
  const roomSelect = document.getElementById('room-select');
  document.querySelectorAll('[data-room]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const room = e.currentTarget.dataset.room;
      if (roomSelect) roomSelect.value = room;
      const contact = document.getElementById('contact');
      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
