document.addEventListener("DOMContentLoaded", function () {

// 🌙 MODO OSCURO (con íconos)
const button = document.getElementById("toggleDark");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    button.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    button.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

  // 🌟 SCROLL REVEAL
  function revealOnScroll() {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);

  // 🧭 NAVBAR EFECTO SCROLL
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      navbar.style.background = "#FAF9F6";
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
      navbar.style.background = "rgba(250, 249, 246, 0.9)";
      navbar.style.boxShadow = "none";
    }
  });

});

  // HAMBURGUESA
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});