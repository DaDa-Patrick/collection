document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = themeToggle?.querySelector(".theme-toggle__icon");
  const themeLabel = themeToggle?.querySelector(".theme-toggle__label");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const backToTop = document.querySelector(".back-to-top");
  const currentYearEl = document.getElementById("current-year");

  const autoAnimateSelectors = [
    [".hero__badge", "fade"],
    [".hero__text", "fade-up"],
    [".stat-card", "scale"],
    [".intro__highlights li", "scale"],
    [".section__header", "fade-up"],
    [".filter-controls", "fade-up"],
    [".project-card", "tilt"],
    [".contact__actions", "fade-up"],
    [".contact__actions .btn", "scale"],
    [".project-hero__content", "fade-up"],
    [".project-section", "fade-up"],
    [".info-card", "rise"],
    [".project-cta__content", "fade-up"],
    [".project-cta__actions .btn", "scale"],
  ];

  autoAnimateSelectors.forEach(([selector, animation]) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (!element.dataset.animate) {
        element.dataset.animate = animation;
      }
    });
  });

  const autoAnimateGroups = [
    [".hero__stats", 120],
    [".about-parallax__grid", 150],
    [".project-timeline", 140],
    [".project-detail__main", 140],
    [".project-sidebar", 160],
    [".project-cta__actions", 130],
    [".contact__actions", 130],
  ];

  autoAnimateGroups.forEach(([selector, interval]) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (!element.dataset.animateGroup) {
        element.dataset.animateGroup = "true";
      }
      if (!element.dataset.animateInterval) {
        element.dataset.animateInterval = interval.toString();
      }
    });
  });

  const animatedElements = document.querySelectorAll("[data-animate]");
  const animateGroups = document.querySelectorAll("[data-animate-group]");

  animateGroups.forEach((group) => {
    const interval = Number(group.dataset.animateInterval || "0");
    if (!interval) {
      return;
    }
    const children = Array.from(group.querySelectorAll("[data-animate]"));
    let index = 0;
    children.forEach((child) => {
      if (child.closest("[data-animate-group]") !== group) {
        return;
      }
      if (!child.dataset.animateDelay && !child.style.getPropertyValue("--animate-delay")) {
        child.style.setProperty("--animate-delay", `${index * interval}ms`);
      }
      index += 1;
    });
  });

  animatedElements.forEach((element) => {
    const delayValue = Number(element.dataset.animateDelay || "");
    if (!Number.isNaN(delayValue) && delayValue > 0) {
      element.style.setProperty("--animate-delay", `${delayValue}ms`);
    }
  });

  const revealInView = () => {
    const viewportHeight = window.innerHeight || 0;
    animatedElements.forEach((element) => {
      if (element.classList.contains("is-visible")) {
        return;
      }
      const rect = element.getBoundingClientRect();
      if (rect.top < viewportHeight * 0.9) {
        element.classList.add("is-visible");
      }
    });
  };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function revealImmediately() {
    animatedElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    revealImmediately();
  } else {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (entry.target.dataset.animateRepeat !== "true") {
              obs.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -10%",
      }
    );

    animatedElements.forEach((element) => observer.observe(element));

    revealInView();
    window.addEventListener("load", revealInView, { once: true });

    const handlePreferenceChange = (event) => {
      if (event.matches) {
        revealImmediately();
        observer.disconnect();
      }
    };

    if (typeof prefersReducedMotion.addEventListener === "function") {
      prefersReducedMotion.addEventListener("change", handlePreferenceChange);
    } else if (typeof prefersReducedMotion.addListener === "function") {
      prefersReducedMotion.addListener(handlePreferenceChange);
    }
  }

  const parallaxElements = document.querySelectorAll("[data-parallax-depth]");
  let parallaxFrame = null;
  let parallaxEnabled = false;

  const applyParallax = () => {
    const viewportHeight = window.innerHeight || 1;
    parallaxElements.forEach((element) => {
      const depth = Number(element.dataset.parallaxDepth || "0");
      if (!depth) {
        element.style.transform = "";
        return;
      }
      const rect = element.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const distance = elementCenter - viewportHeight / 2;
      const translateY = -distance * depth;
      const scale = 1 + Math.min(0.18, Math.abs(depth) * 0.14);
      element.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale.toFixed(3)})`;
    });
  };

  const scheduleParallax = () => {
    if (parallaxFrame !== null) {
      return;
    }
    parallaxFrame = requestAnimationFrame(() => {
      parallaxFrame = null;
      applyParallax();
    });
  };

  const parallaxScrollHandler = () => scheduleParallax();
  const parallaxResizeHandler = () => scheduleParallax();

  const enableParallax = () => {
    if (parallaxEnabled || !parallaxElements.length) {
      return;
    }
    parallaxEnabled = true;
    scheduleParallax();
    window.addEventListener("scroll", parallaxScrollHandler, { passive: true });
    window.addEventListener("resize", parallaxResizeHandler);
  };

  const disableParallax = () => {
    if (!parallaxEnabled) {
      return;
    }
    parallaxEnabled = false;
    if (parallaxFrame !== null) {
      cancelAnimationFrame(parallaxFrame);
      parallaxFrame = null;
    }
    window.removeEventListener("scroll", parallaxScrollHandler);
    window.removeEventListener("resize", parallaxResizeHandler);
    parallaxElements.forEach((element) => {
      element.style.transform = "";
    });
  };

  if (parallaxElements.length) {
    if (!prefersReducedMotion.matches) {
      enableParallax();
    }

    const handleParallaxPreference = (event) => {
      if (event.matches) {
        disableParallax();
      } else {
        enableParallax();
      }
    };

    if (typeof prefersReducedMotion.addEventListener === "function") {
      prefersReducedMotion.addEventListener("change", handleParallaxPreference);
    } else if (typeof prefersReducedMotion.addListener === "function") {
      prefersReducedMotion.addListener(handleParallaxPreference);
    }
  }

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
