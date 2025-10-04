document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = themeToggle?.querySelector(".theme-toggle__icon");
  const themeLabel = themeToggle?.querySelector(".theme-toggle__label");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const backToTop = document.querySelector(".back-to-top");
  const currentYearEl = document.getElementById("current-year");

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedTheme = localStorage.getItem("patrick-theme");

  function applyTheme(mode) {
    body.classList.toggle("theme-dark", mode === "dark");
    body.classList.toggle("theme-light", mode === "light");
    if (themeIcon) {
      themeIcon.textContent = mode === "dark" ? "☀️" : "🌙";
    }
    if (themeLabel) {
      themeLabel.textContent = mode === "dark" ? "日間模式" : "夜間模式";
    }
    localStorage.setItem("patrick-theme", mode);
  }

  applyTheme(storedTheme ?? (prefersDark ? "dark" : "light"));

  themeToggle?.addEventListener("click", () => {
    const nextTheme = body.classList.contains("theme-dark") ? "light" : "dark";
    applyTheme(nextTheme);
  });

  function filterProjects(tag) {
    projectCards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(/\s+/).filter(Boolean);
      const shouldShow = tag === "all" || tags.includes(tag);
      card.dataset.hidden = shouldShow ? "false" : "true";
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      filterProjects(btn.dataset.filter || "all");
    });
  });

  if (backToTop) {
    const toggleBackToTop = () => {
      const shouldShow = window.scrollY > 360;
      backToTop.classList.toggle("is-visible", shouldShow);
    };

    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear().toString();
  }
});
