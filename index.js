/**
 * Ranavena Sumanth - Interactive Portfolio Script
 * Pure Vanilla JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking navigation items
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      });
    });
  }

  // 2. Active Section Spy on Scroll
  const sections = document.querySelectorAll('section[id]');

  const handleActiveSectionSpy = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-links a[href*="#${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', handleActiveSectionSpy, { passive: true });

  // 3. Back to Top Button Visibility and Action
  const backToTopBtn = document.getElementById('backToTop');

  if (backToTopBtn) {
    const handleScrollBtnVisibility = () => {
      if (window.pageYOffset > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScrollBtnVisibility, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 4. Dynamic Year in Footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 5. Sticky Header Border Shade on Scroll
  const header = document.getElementById('navbar');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 20) {
        header.style.borderBottomColor = 'rgba(255, 255, 255, 0.15)';
      } else {
        header.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
      }
    }, { passive: true });
  }
});