/* Detsis homepage — interactions + GSAP motion.
   Progressive enhancement: site is fully usable without this file. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    var closeMenu = function () {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    menu.addEventListener("click", function (e) {
      var link = e.target.closest("a");
      if (!link) return;

      if (link.getAttribute("href") === "#") {
        e.preventDefault();
        return;
      }

      closeMenu();
    });

    document.addEventListener("click", function (e) {
      if (!menu.classList.contains("is-open")) return;
      if (menu.contains(e.target) || toggle.contains(e.target)) return;
      closeMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector("[data-header]");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Motion (bail out if reduced-motion or GSAP missing) ---------- */
  var revealPrepared = function () {
    document.querySelectorAll("[data-rise],[data-portrait]").forEach(function (el) { el.style.opacity = 1; });
    document.querySelectorAll("[data-stagger] > *").forEach(function (el) { el.style.opacity = 1; });
  };

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var mobileFlow = window.matchMedia("(max-width: 920px)").matches;
  if (reduce || mobileFlow || typeof gsap === "undefined") {
    revealPrepared();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  if (window.SplitText) gsap.registerPlugin(SplitText);

  /* Hero headline: split into lines and reveal */
  var heroTitle = document.querySelector("[data-split]");
  if (heroTitle && window.SplitText) {
    var split = new SplitText(heroTitle, { type: "lines", linesClass: "split-line" });
    gsap.set(heroTitle, { opacity: 1 });
    gsap.from(split.lines, { yPercent: 110, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.1 });
  } else if (heroTitle) {
    gsap.to(heroTitle, { opacity: 1, duration: 0.6 });
  }

  /* Hero supporting copy + CTA + portrait — intro timeline.
     Clear the CSS opacity:0 BEFORE building the .from() tweens so each tween
     captures opacity:1 as its end state (otherwise it animates 0→0 and stays hidden). */
  gsap.set([".hero-sub", ".hero-cta", "[data-portrait]"], { opacity: 1 });
  var introTl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
  introTl.from(".hero-sub", { y: 24, opacity: 0 }, 0.35)
         .from(".hero-cta", { y: 24, opacity: 0 }, 0.5)
         .from("[data-portrait]", { y: 40, opacity: 0, scale: 0.96, duration: 1 }, 0.2);

  /* Floating playful shapes — gentle continuous drift */
  gsap.utils.toArray("[data-float]").forEach(function (el, i) {
    gsap.to(el, {
      y: "+=" + (18 + i * 6), x: "+=" + (i % 2 ? -14 : 12), rotation: i % 2 ? 8 : -8,
      duration: 3 + i * 0.6, ease: "sine.inOut", yoyo: true, repeat: -1
    });
  });

  /* Shapes drift up on scroll (parallax) */
  gsap.to("[data-float]", {
    yPercent: -40, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 }
  });

  /* Generic scroll reveal for [data-rise] blocks */
  gsap.utils.toArray("[data-rise]").forEach(function (el) {
    if (el.closest(".hero")) return; // hero handled by intro timeline
    gsap.fromTo(el, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    });
  });

  /* Staggered children (cards, trust items, reviews) */
  gsap.utils.toArray("[data-stagger]").forEach(function (group) {
    gsap.fromTo(group.children, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.1,
      scrollTrigger: { trigger: group, start: "top 82%" }
    });
  });

  /* Stacking cards — CSS sticky piles them; here each card recedes (scale +
     dim) as the next one slides over it, for depth. Scales toward the top edge
     where it's pinned, so it shrinks "into" the stack. */
  var cards = gsap.utils.toArray(".stack-card");
  cards.forEach(function (card, i) {
    if (i === cards.length - 1) return; // last card stays full-size
    gsap.to(card, {
      scale: 0.92, transformOrigin: "50% 0%", ease: "none",
      scrollTrigger: {
        trigger: cards[i + 1], start: "top bottom", end: "top top", scrub: true
      }
    });
  });

  /* Partners logo ticker — infinite marquee */
  var partnerTrack = document.querySelector("[data-partners-track]");
  if (partnerTrack) {
    partnerTrack.innerHTML += partnerTrack.innerHTML; // duplicate for seamless loop
    var trackHalfW = partnerTrack.scrollWidth / 2;
    var marquee = gsap.to(partnerTrack, {
      x: -trackHalfW,
      duration: 24,
      ease: "none",
      repeat: -1
    });
    var belt = partnerTrack.parentElement;
    belt.addEventListener("mouseenter", function () { marquee.pause(); });
    belt.addEventListener("mouseleave", function () { marquee.resume(); });
  }
})();
