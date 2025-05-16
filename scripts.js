// === scripts.js ===

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Lazy loading images
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[data-src]");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute("data-src");
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => observer.observe(img));
});

// Cookie Consent Banner
window.addEventListener("load", () => {
  if (!localStorage.getItem("cookieConsent")) {
    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.innerHTML = `
      <div style="position: fixed; bottom: 0; left: 0; right: 0; background: #111; color: #fff; padding: 1rem; text-align: center; z-index: 9999;">
        This site uses cookies to enhance your experience. <button id="acceptCookies" style="margin-left:1rem;padding:0.5rem 1rem;background:#ff0055;color:#000;border:none;border-radius:5px;">Accept</button>
      </div>`;
    document.body.appendChild(banner);

    document.getElementById("acceptCookies").addEventListener("click", () => {
      localStorage.setItem("cookieConsent", true);
      banner.remove();
    });
  }
});

// Google Analytics (add your tracking ID)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ''); // Insert your Google Analytics Tracking ID here
