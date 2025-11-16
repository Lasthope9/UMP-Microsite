document.addEventListener("DOMContentLoaded", () => {

  // Initialize AOS
  AOS.init({ duration: 1000 });

  // --- Scroll to Register Section ---
  const registerBtn = document.getElementById('navbarRegisterBtn');
  const registerSection = document.getElementById('register-container');

  if (registerBtn && registerSection) {
    registerBtn.addEventListener('click', () => {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // --- Welcome Section Toggle ---
  const btn = document.getElementById("welcomeToggleBtn");
  const hidden = document.getElementById("welcomeHidden");

  if (btn && hidden) {
    btn.addEventListener("click", () => {
      const closed = hidden.style.display === "none";
      hidden.style.display = closed ? "block" : "none";
      btn.textContent = closed ? "Show Less" : "Show More";

      if (closed) {
        hidden.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // --- Hero Slider ---
  const slides = document.querySelectorAll('.hero-slider .slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  if (slides.length > 0) {
    showSlide(current);
    setInterval(nextSlide, 5000);

    // Lazy-load background images for slider
    slides.forEach((slide, i) => {
      const bg = slide.style.backgroundImage.slice(5, -2); // get url from style
      if (i !== 0) { // first slide already visible
        slide.style.backgroundImage = ''; // clear initially
        const img = new Image();
        img.src = bg;
        img.onload = () => {
          slide.style.backgroundImage = `url('${bg}')`;
        };
      }
    });
  }

  // --- Automatic Lazy-load for <img> ---
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }
  });

  // --- Lazy-load sections with data-bg attribute ---
  const lazySections = document.querySelectorAll('[data-bg]');
  lazySections.forEach(el => {
    const src = el.getAttribute('data-bg');
    el.style.backgroundImage = ''; // remove inline style initially
    const img = new Image();
    img.src = src;
    img.onload = () => {
      el.style.backgroundImage = `url('${src}')`;
    };
  });

});
