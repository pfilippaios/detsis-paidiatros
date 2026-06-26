/* Detsis homepage — interactions + GSAP motion.
   Progressive enhancement: site is fully usable without this file. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  document.addEventListener("click", function (e) {
    var disabledLink = e.target.closest('a[aria-disabled="true"]');
    if (!disabledLink) return;
    e.preventDefault();
  });

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

  /* ---------- Back-to-top button (works on every viewport, so it lives
     above the reduced-motion / mobile motion bail-out below) ---------- */
  var toTop = document.createElement("button");
  toTop.className = "to-top";
  toTop.type = "button";
  toTop.setAttribute("aria-label", "Επιστροφή στην κορυφή");
  toTop.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(toTop);
  var onTopScroll = function () { toTop.classList.toggle("is-visible", window.scrollY > 600); };
  onTopScroll();
  window.addEventListener("scroll", onTopScroll, { passive: true });
  toTop.addEventListener("click", function () {
    var smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
  });

  /* ---------- Article topic filters ---------- */
  var grid = document.getElementById("article-grid");
  if (grid) {
    var filterBtns = Array.prototype.slice.call(document.querySelectorAll(".filter-btn"));
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        filterBtns.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        grid.querySelectorAll(".article-card").forEach(function (card) {
          var show = f === "all" || card.getAttribute("data-topic") === f;
          card.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  /* ---------- Click-to-load maps (privacy: no Google iframe until asked) ---------- */
  document.querySelectorAll("[data-map]").forEach(function (box) {
    var btn = box.querySelector(".map-load");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = box.getAttribute("data-src");
      iframe.title = "Χάρτης ιατρείου";
      iframe.loading = "lazy";
      iframe.setAttribute("allowfullscreen", "");
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      box.innerHTML = "";
      box.appendChild(iframe);
    });
  });

  /* ---------- Appointment form: compose a tidy mailto (no backend chosen yet) ----------
     ponytail: mailto compose — swap for Formspree/Netlify Forms when the host is decided.
     No-JS fallback is the form's own action="mailto:" (text/plain). */
  var apptForm = document.querySelector("[data-appointment]");
  if (apptForm) {
    apptForm.addEventListener("submit", function (e) {
      var hp = apptForm.querySelector('input[name="website"]');
      if (hp && hp.value) { e.preventDefault(); return; } // honeypot: drop bots
      e.preventDefault();
      var get = function (n) { var el = apptForm.querySelector('[name="' + n + '"]'); return el ? el.value : ""; };
      var clinic = (apptForm.querySelector('input[name="Ιατρείο"]:checked') || {}).value || "";
      var body = [
        "Όνομα γονέα: " + get("Ονομα_γονέα"),
        "Τηλέφωνο: " + get("Τηλέφωνο"),
        "Email: " + get("Email"),
        "Ιατρείο: " + clinic,
        "Όνομα & ηλικία παιδιού: " + get("Παιδί"),
        "Προτιμώμενη ημέρα: " + get("Προτιμώμενη_ημέρα"),
        "",
        get("Μήνυμα")
      ].join("\n");
      var subject = "Αίτημα ραντεβού" + (clinic ? " — " + clinic : "");
      window.location.href = "mailto:grammateia@detsis-paidiatros.gr?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
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
    var mqMobile = window.matchMedia("(max-width: 920px)");
    var originalPartnerLogos = partnerTrack.innerHTML;
    if (mqMobile.matches) return;

    partnerTrack.innerHTML = originalPartnerLogos + originalPartnerLogos; // duplicate for seamless loop
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

    /* On small screens the logos are a static wrapped grid (CSS). If the page
       was loaded wide and then narrowed, the running tween would keep dragging
       them off-screen — pause it and clear the transform so CSS takes over. */
    var syncMarquee = function () {
      if (mqMobile.matches) {
        marquee.pause();
        marquee.progress(0);
        partnerTrack.innerHTML = originalPartnerLogos;
        gsap.set(partnerTrack, { clearProps: "transform" });
      } else {
        if (partnerTrack.children.length <= originalPartnerLogos.match(/partners-item/g).length) {
          partnerTrack.innerHTML = originalPartnerLogos + originalPartnerLogos;
        }
        marquee.resume();
      }
    };
    syncMarquee();
    mqMobile.addEventListener("change", syncMarquee);
  }
})();
