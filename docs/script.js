const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const pageSections = [...document.querySelectorAll("main > section[id]")];
const revealItems = [...document.querySelectorAll("[data-reveal]")];
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

let scrollTick = false;

const prefersReducedMotion = () => motionQuery.matches;

const setMenuOpen = (open) => {
  document.body.classList.toggle("nav-open", open);
  navToggle?.setAttribute("aria-expanded", String(open));
};

const updateScrollState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);

  const marker = window.scrollY + 120;
  const current = [...pageSections].reverse().find((section) => section.offsetTop <= marker);
  const linked = sectionLinks.find((link) => link.getAttribute("href") === `#${current?.id}`);

  sectionLinks.forEach((link) => {
    if (link === linked) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
};

const queueScrollUpdate = () => {
  if (scrollTick) return;
  scrollTick = true;
  requestAnimationFrame(() => {
    scrollTick = false;
    updateScrollState();
  });
};

navToggle?.addEventListener("click", () => {
  setMenuOpen(!document.body.classList.contains("nav-open"));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

window.addEventListener("scroll", queueScrollUpdate, { passive: true });
window.addEventListener("resize", queueScrollUpdate);

if ("IntersectionObserver" in window && !prefersReducedMotion()) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-revealed"));
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    const label = button.querySelector("[data-copy-label]");
    if (!target || !label) return;

    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      label.textContent = "Copied";
    } catch {
      const range = document.createRange();
      range.selectNodeContents(target);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      label.textContent = "Selected";
    }

    window.setTimeout(() => {
      label.textContent = "Copy BibTeX";
    }, 1800);
  });
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

updateScrollState();
