
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
  }

});
