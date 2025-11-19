// ===== MENU RESPONSIVO =====
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const menuBtn = document.createElement("button");
  menuBtn.innerText = "☰ Menu";
  menuBtn.classList.add("menu-btn");
  nav.parentNode.insertBefore(menuBtn, nav);

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

// ===== SCROLL SUAVE =====
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ===== HEADER DINÂMICO =====
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.transform = "scale(0.95)";
    header.style.opacity = "0.9";
  } else {
    header.style.transform = "scale(1)";
    header.style.opacity = "1";
  }
});

// ===== MENSAGEM DE BOAS-VINDAS =====
window.addEventListener("load", () => {
  const msg = document.createElement("div");
  msg.innerText = "♡ Bem-vindo ao meu portfólio!";
  msg.style.position = "fixed";
  msg.style.bottom = "20px";
  msg.style.right = "20px";
  msg.style.background = "#0a1d37";
  msg.style.color = "#fff";
  msg.style.padding = "12px 18px";
  msg.style.borderRadius = "12px";
  msg.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  msg.style.opacity = "0";
  msg.style.transition = "opacity 1s ease";

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.style.opacity = "1";
  }, 800);

  setTimeout(() => {
    msg.style.opacity = "0";
    setTimeout(() => msg.remove(), 1000);
  }, 5000);
});
