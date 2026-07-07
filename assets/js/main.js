/* David Plehn — portfolio interactions.
   Vanilla JS, no dependencies. Everything motion-related is gated
   behind prefers-reduced-motion. */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- nav: scrolled state + mobile menu ---------- */

  var nav = document.querySelector("[data-nav]");
  var toggle = document.querySelector("[data-nav-toggle]");

  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (nav && toggle) {
    var closeMenu = function () {
      nav.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll(".nav-menu a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- scroll reveals ---------- */

  var revealEls = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    // stagger siblings that reveal together (e.g. cards in a grid)
    var groups = new Map();
    revealEls.forEach(function (el) {
      var parent = el.parentElement;
      var idx = groups.get(parent) || 0;
      el.style.setProperty("--reveal-delay", Math.min(idx * 90, 450) + "ms");
      groups.set(parent, idx + 1);
    });

    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ---------- hero terminal boot sequence ---------- */

  var terminal = document.querySelector("[data-terminal]");

  if (terminal && !reduceMotion) {
    var lines = Array.prototype.slice.call(
      terminal.querySelectorAll(".term-line")
    );
    terminal.classList.add("terminal--boot");

    var TYPE_MS = 34;
    var lineIndex = 0;

    var showNext = function () {
      if (lineIndex >= lines.length) return;
      var line = lines[lineIndex++];
      line.classList.add("is-shown");

      if (line.hasAttribute("data-cmd")) {
        var cmdEl = line.querySelector(".term-cmd");
        var text = cmdEl ? cmdEl.textContent : "";
        if (cmdEl) cmdEl.textContent = "";
        var i = 0;
        var typeChar = function () {
          if (i < text.length) {
            cmdEl.textContent += text.charAt(i++);
            window.setTimeout(typeChar, TYPE_MS);
          } else {
            window.setTimeout(showNext, 260);
          }
        };
        window.setTimeout(typeChar, 180);
      } else {
        window.setTimeout(showNext, line.classList.contains("term-photo") ? 420 : 110);
      }
    };

    // boot once the terminal scrolls into view (it usually already is)
    var bootObserver = new IntersectionObserver(
      function (entries, obs) {
        if (entries[0].isIntersecting) {
          obs.disconnect();
          window.setTimeout(showNext, 350);
        }
      },
      { threshold: 0.3 }
    );
    bootObserver.observe(terminal);
  }

  /* ---------- hero canvas: particle network ---------- */

  var canvas = document.getElementById("net-canvas");

  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var hero = canvas.parentElement;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var nodes = [];
    var pointer = { x: null, y: null };
    var running = false;
    var rafId = null;
    var W = 0;
    var H = 0;

    var LINK_DIST = 130;
    var CYAN = "110, 231, 255";
    var VIOLET = "169, 155, 232";

    var seed = function () {
      var count = Math.min(85, Math.floor((W * H) / 16000));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: 1 + Math.random() * 1.6,
          violet: Math.random() < 0.22
        });
      }
    };

    var resize = function () {
      W = hero.clientWidth;
      H = hero.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    var step = function () {
      ctx.clearRect(0, 0, W, H);

      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // gentle pointer attraction
        if (pointer.x !== null) {
          var pdx = pointer.x - n.x;
          var pdy = pointer.y - n.y;
          var pd = Math.sqrt(pdx * pdx + pdy * pdy);
          if (pd > 1 && pd < 220) {
            n.x += (pdx / pd) * 0.18;
            n.y += (pdy / pd) * 0.18;
          }
        }

        if (n.x < -20) n.x = W + 20;
        if (n.x > W + 20) n.x = -20;
        if (n.y < -20) n.y = H + 20;
        if (n.y > H + 20) n.y = -20;
      }

      for (var a = 0; a < nodes.length; a++) {
        for (var b = a + 1; b < nodes.length; b++) {
          var dx = nodes[a].x - nodes[b].x;
          var dy = nodes[a].y - nodes[b].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            var alpha = (1 - dist / LINK_DIST) * 0.16;
            ctx.strokeStyle = "rgba(" + CYAN + ", " + alpha.toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[a].x, nodes[a].y);
            ctx.lineTo(nodes[b].x, nodes[b].y);
            ctx.stroke();
          }
        }
      }

      for (var j = 0; j < nodes.length; j++) {
        var node = nodes[j];
        ctx.fillStyle = "rgba(" + (node.violet ? VIOLET : CYAN) + ", 0.55)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    var loop = function () {
      step();
      if (running) rafId = window.requestAnimationFrame(loop);
    };

    var start = function () {
      if (running || reduceMotion) return;
      running = true;
      rafId = window.requestAnimationFrame(loop);
    };

    var stop = function () {
      running = false;
      if (rafId) window.cancelAnimationFrame(rafId);
    };

    resize();

    if (reduceMotion) {
      // static constellation, no animation
      step();
    } else {
      hero.addEventListener("pointermove", function (e) {
        var rect = hero.getBoundingClientRect();
        pointer.x = e.clientX - rect.left;
        pointer.y = e.clientY - rect.top;
      });
      hero.addEventListener("pointerleave", function () {
        pointer.x = null;
        pointer.y = null;
      });

      // only animate while the hero is on screen
      var heroObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) start();
        else stop();
      });
      heroObserver.observe(hero);

      document.addEventListener("visibilitychange", function () {
        if (document.hidden) stop();
        else start();
      });
    }

    var resizeTimer;
    window.addEventListener("resize", function () {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(function () {
        resize();
        if (reduceMotion || !running) step();
      }, 150);
    });
  }
})();
