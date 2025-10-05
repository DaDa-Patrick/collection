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
    [".about-highlights", 150],
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

  const aboutMosaic = document.querySelector(".about-mosaic");
  if (aboutMosaic) {
    const tiles = Array.from(aboutMosaic.querySelectorAll(".about-tile"));
    let rowHeight = 0;
    let rowGap = 0;

    const parsePixels = (value) => {
      const numeric = parseFloat(value);
      return Number.isNaN(numeric) ? 0 : numeric;
    };

    const refreshMetrics = () => {
      const computed = window.getComputedStyle(aboutMosaic);
      rowHeight = parsePixels(computed.gridAutoRows);
      if (!rowHeight) {
        rowHeight = parsePixels(
          computed.getPropertyValue("--about-row-unit") || computed.gridAutoRows,
        );
      }
      const gapValue = computed.rowGap && computed.rowGap !== "normal" ? computed.rowGap : computed.gap;
      rowGap = parsePixels(gapValue);
    };

    const applySpan = (tile) => {
      if (!aboutMosaic.classList.contains("is-enhanced")) {
        tile.style.removeProperty("grid-row-end");
        return;
      }
      if (!rowHeight) {
        refreshMetrics();
      }
      if (!rowHeight) {
        return;
      }
      const totalHeight = tile.getBoundingClientRect().height;
      const span = Math.max(1, Math.round((totalHeight + rowGap) / (rowHeight + rowGap)));
      tile.style.gridRowEnd = `span ${span}`;
    };

    const enableMosaic = () => {
      if (window.innerWidth < 960) {
        aboutMosaic.classList.remove("is-enhanced");
        tiles.forEach((tile) => tile.style.removeProperty("grid-row-end"));
        return;
      }
      aboutMosaic.classList.add("is-enhanced");
      refreshMetrics();
      tiles.forEach((tile) => applySpan(tile));
    };

    enableMosaic();

    let resizeFrame;
    const handleResize = () => {
      if (resizeFrame) {
        cancelAnimationFrame(resizeFrame);
      }
      resizeFrame = window.requestAnimationFrame(() => {
        enableMosaic();
      });
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("load", () => {
      refreshMetrics();
      enableMosaic();
    });

    if (typeof ResizeObserver === "function") {
      const observer = new ResizeObserver((entries) => {
        if (!aboutMosaic.classList.contains("is-enhanced")) {
          return;
        }
        entries.forEach((entry) => {
          if (entry.target instanceof HTMLElement) {
            applySpan(entry.target);
          }
        });
      });
      tiles.forEach((tile) => observer.observe(tile));
    }
  }

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

  const introRotatorTargets = {
    leftA: document.querySelector('[data-rotate="leftA"]'),
    leftB: document.querySelector('[data-rotate="leftB"]'),
    right: document.querySelector('[data-rotate="right"]'),
  };

  const introRotatorWords = {
    leftA: ["資工", "軟體", "資料", "演算法"],
    leftB: ["設計", "硬體", "產品", "前端"],
    right: ["人工智慧", "互動", "體驗", "後端"],
  };

  // ===== Elastic shift (FLIP) for static tokens around the intro rotator =====
  // Find lowest common ancestor for the three rotating spans
  function getCommonAncestor(...elements) {
    const chains = elements
      .filter((el) => el instanceof HTMLElement)
      .map((el) => {
        const chain = [];
        let n = el;
        while (n && n.nodeType === 1) {
          chain.push(n);
          if (n === document.body) break;
          n = n.parentElement;
        }
        return chain;
      });
    if (!chains.length) return null;
    // Use the shortest chain as baseline
    const baseline = chains.reduce((a, b) => (a.length < b.length ? a : b));
    for (const candidate of baseline) {
      if (chains.every((c) => c.includes(candidate))) return candidate;
    }
    return null;
  }

  // Auto-wrap target tokens into spans so we can animate their layout
  function ensureElasticWrappers(root, tokens) {
    if (!root) return;
    const pattern = /(、|與|串出驚喜)/g;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue) return NodeFilter.FILTER_REJECT;
        const p = node.parentElement;
        if (!p) return NodeFilter.FILTER_SKIP;
        if (p.closest("[data-rotate]")) return NodeFilter.FILTER_SKIP;
        if (p.closest("[data-shift-elastic]")) return NodeFilter.FILTER_SKIP;
        const tag = p.tagName;
        if (tag === "SCRIPT" || tag === "STYLE") return NodeFilter.FILTER_SKIP;
        if (!pattern.test(node.nodeValue)) return NodeFilter.FILTER_SKIP;
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((textNode) => {
      const text = textNode.nodeValue || "";
      const parts = text.split(pattern);
      if (parts.length <= 1) return;

      const frag = document.createDocumentFragment();
      parts.forEach((part) => {
        if (!part) return;
        if (tokens.includes(part)) {
          const span = document.createElement("span");
          span.textContent = part;
          span.setAttribute("data-shift-elastic", "true");
          frag.appendChild(span);
        } else {
          frag.appendChild(document.createTextNode(part));
        }
      });
      if (textNode.parentNode) {
        textNode.parentNode.replaceChild(frag, textNode);
      }
    });
  }

  // Measure rects before/after and animate the delta (FLIP)
  function measureRects(els) {
    const map = new Map();
    els.forEach((el) => map.set(el, el.getBoundingClientRect()));
    return map;
  }

  function playElasticFLIP(els, beforeMap) {
    const afterMap = measureRects(els);
    els.forEach((el) => {
      const b = beforeMap.get(el);
      const a = afterMap.get(el);
      if (!b || !a) return;
      const dx = b.left - a.left;
      const dy = b.top - a.top;
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) return;
      if (typeof el.animate !== "function") return;

      const overshoot = 0.08; // add a tiny overshoot for "elastic" feel
      el.animate(
        [
          { transform: `translate(${dx}px, ${dy}px)` },
          { transform: `translate(${-dx * overshoot}px, ${-dy * overshoot}px)`, offset: 0.82 },
          { transform: "translate(0, 0)" },
        ],
        {
          duration: 500,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        }
      );
    });
  }

  // Initialize wrappers and cache container
  const introContainer = getCommonAncestor(
    introRotatorTargets.leftA,
    introRotatorTargets.leftB,
    introRotatorTargets.right
  );

  if (introContainer) {
    ensureElasticWrappers(introContainer, ["、", "與", "串出驚喜"]);
  }
  // ===========================================================================

  const hasIntroRotator = Object.values(introRotatorTargets).every((element) => element instanceof HTMLElement);
  let introRotatorIndex = 0;
  let introRotatorTimer = null;

  const animateRotatorSwap = (element, nextWord) => {
    if (!element) {
      return;
    }

    if (typeof element.animate !== "function") {
      element.textContent = nextWord;
      return;
    }

    const exitAnimation = element.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(-15px)" },
      ],
      {
        duration: 350,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      }
    );

    exitAnimation.addEventListener("finish", () => {
      // Before applying the new word, capture positions of the fixed tokens
      let beforeMap = null;
      if (introContainer && !prefersReducedMotion.matches) {
        const fixedEls = Array.from(introContainer.querySelectorAll("[data-shift-elastic]"));
        if (fixedEls.length) beforeMap = measureRects(fixedEls);
      }

      // Swap the word content
      element.textContent = nextWord;

      // Next frame: animate the layout shift of fixed tokens (FLIP), then enter animation for the word
      requestAnimationFrame(() => {
        if (beforeMap && introContainer) {
          const fixedEls = Array.from(introContainer.querySelectorAll("[data-shift-elastic]"));
          playElasticFLIP(fixedEls, beforeMap);
        }

        element.animate(
          [
            { opacity: 0, transform: "translateY(15px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 350,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          }
        );
      });
    });
  };

  const runIntroRotator = () => {
    introRotatorIndex = (introRotatorIndex + 1) % introRotatorWords.leftA.length;
    animateRotatorSwap(introRotatorTargets.leftA, introRotatorWords.leftA[introRotatorIndex]);
    animateRotatorSwap(introRotatorTargets.leftB, introRotatorWords.leftB[introRotatorIndex]);
    animateRotatorSwap(introRotatorTargets.right, introRotatorWords.right[introRotatorIndex]);
  };

  const startIntroRotator = () => {
    if (!hasIntroRotator || introRotatorTimer !== null) {
      return;
    }
    introRotatorTimer = window.setInterval(runIntroRotator, 3000);
  };

  const stopIntroRotator = () => {
    if (introRotatorTimer === null) {
      return;
    }
    window.clearInterval(introRotatorTimer);
    introRotatorTimer = null;
    introRotatorIndex = 0;
  };

  if (hasIntroRotator && !prefersReducedMotion.matches) {
    startIntroRotator();
  }

  const handleIntroRotatorPreferenceChange = (event) => {
    if (!hasIntroRotator) {
      return;
    }
    if (event.matches) {
      stopIntroRotator();
      introRotatorTargets.leftA.textContent = introRotatorWords.leftA[0];
      introRotatorTargets.leftB.textContent = introRotatorWords.leftB[0];
      introRotatorTargets.right.textContent = introRotatorWords.right[0];
    } else {
      startIntroRotator();
    }
  };

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
      prefersReducedMotion.addEventListener("change", handleIntroRotatorPreferenceChange);
    } else if (typeof prefersReducedMotion.addListener === "function") {
      prefersReducedMotion.addListener(handlePreferenceChange);
      prefersReducedMotion.addListener(handleIntroRotatorPreferenceChange);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTopLinks = document.querySelectorAll("[data-scroll-top]");

  scrollTopLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToTop();
    });
  });

  if (backToTop) {
    const toggleBackToTop = () => {
      const shouldShow = window.scrollY > 360;
      backToTop.classList.toggle("is-visible", shouldShow);
    };

    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop.addEventListener("click", scrollToTop);
  }

  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear().toString();
  }
});
