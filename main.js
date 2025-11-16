document.addEventListener("DOMContentLoaded", () => {
  
  AOS.init({ duration: 1000 });

  const registerBtn = document.getElementById('navbarRegisterBtn');
  const registerSection = document.getElementById('register-container');

  if (registerBtn && registerSection) {
    registerBtn.addEventListener('click', () => {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

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

  // ----- HERO SLIDER -----
  const slides = document.querySelectorAll('.hero-slider .slide');
  let current = 0;

  // Lazy-load slides
  slides.forEach((slide, index) => {
    const webp = slide.dataset.bgWebp;
    const jpg = slide.dataset.bgJpg;
    const img = new Image();

    img.onload = () => {
      slide.style.backgroundImage = `url('${img.src}')`;
    };
    img.onerror = () => {
      slide.style.backgroundImage = `url('${jpg}')`;
    };

    if (index === 0) {
      img.src = webp; // load first slide immediately
    } else {
      setTimeout(() => { img.src = webp; }, 1000 * index); // lazy-load remaining slides
    }
  });

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
    setInterval(nextSlide, 5000); // change slide every 5s
  }

});

