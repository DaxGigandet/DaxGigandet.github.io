// GitHub Copilot: Debug all errors, optimize JavaScript, and finalize interactive elements

// scripts.js

// Simple scroll animation for sections
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('main section');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
});
