document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
  
    // Smooth scrolling
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  
    // Highlight active link on scroll
    const activateLinkOnScroll = () => {
      const scrollPosition = window.scrollY;
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const link = links[index];
  
        if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
          links.forEach(link => link.classList.remove('active'));
          link.classList.add('active');
        }
      });
    };
  
    window.addEventListener('scroll', activateLinkOnScroll);
  });