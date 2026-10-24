document.documentElement.classList.add("js");

// Atualiza automaticamente o ano do rodapé.
document.querySelectorAll("[data-year]").forEach(element => {
  element.textContent = new Date().getFullYear();
});

// Mantém os contatos em um único arquivo de configuração.
const config = window.PORTFOLIO_CONFIG || {};
document.querySelectorAll("[data-social]").forEach(link => {
  const type = link.dataset.social;
  const value = (config[type] || "").trim();
  if (!value) return;
  if (type === "email") {
    link.href = `mailto:${value}`;
  } else {
    try {
      const url = new URL(value);
      if (url.protocol !== "https:") return;
      link.href = url.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } catch { return; }
  }
  link.hidden = false;
});

const navigation = document.querySelector(".navigation");
const toggle = document.querySelector(".menu-toggle");
if (navigation && toggle) {
  const mobileViewport = window.matchMedia("(max-width: 640px)");
  function closeMenu() {
    navigation.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
  function syncMenu() {
    toggle.hidden = !mobileViewport.matches;
    closeMenu();
  }
  syncMenu();
  mobileViewport.addEventListener("change", syncMenu);
  navigation.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
  toggle.addEventListener("click", () => {
    const open = navigation.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  navigation.addEventListener("keydown", event => {
    if (event.key === "Escape" && navigation.classList.contains("is-open")) {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener("click", event => {
    if (!navigation.contains(event.target)) closeMenu();
  });
}
