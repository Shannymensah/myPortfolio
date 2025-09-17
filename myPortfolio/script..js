// Toggle mobile menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
  });
  
  // Back-to-top button functionality
  const btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  
  // Animate skills bars when they enter viewport
  const bars = document.querySelectorAll('.bar span');
  const options = { threshold: 0.5 };
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const finalWidth = entry.target.getAttribute('style').split(':')[1];
        entry.target.style.width = finalWidth;
      }
    });
  }, options);
  
  bars.forEach(bar => observer.observe(bar));
  