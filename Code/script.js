/* ===== Nav: keep the underline on the clicked link ===== */
const navLinks = document.querySelectorAll("header nav a");

function setActive(link) {
    navLinks.forEach((a) => a.classList.remove("active"));
    link.classList.add("active");
    try {
        sessionStorage.setItem("activeNav", link.textContent.trim());
    } catch (e) {}
}

// Restore the last clicked link, otherwise default to the first one (Home)
let saved = null;
try {
    saved = sessionStorage.getItem("activeNav");
} catch (e) {}

const initial =
    Array.from(navLinks).find((a) => a.textContent.trim() === saved) || navLinks[0];
if (initial) initial.classList.add("active");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // Empty links (href="") would reload the page and reset the underline
        const href = link.getAttribute("href");
        if (!href || href === "#") e.preventDefault();
        setActive(link);
    });
});

/* ===== Scroll reveal animations ===== */
const revealItems = [
    [".container-products", "reveal-left", 0],
    [".container-pic-product", "reveal-right", 0],
    [".box-list:nth-of-type(1)", "reveal-left", 0],
    [".box-list", "reveal-left", 0],
    [".container-growing > h3", "reveal-left", 0],
    [".container-growing > p", "reveal-left", 0.1],
    [".btn-growing", "reveal-right", 0.1],
    [".container-total", "reveal-up", 0],
    [".container-growing-bottom", "reveal-up", 0],
    [".containter-last", "reveal-up", 0],
    ["footer .left-footer", "reveal-left", 0],
    ["footer .middle-footer", "reveal-up", 0.1],
    ["footer .right-footer", "reveal-right", 0.2],
];

revealItems.forEach(([selector, direction, delay]) => {
    document.querySelectorAll(selector).forEach((el, i) => {
        el.classList.add("reveal", direction);
        el.style.setProperty("--delay", `${delay + i * 0.12}s`);
    });
});

// Second product card comes from the right, the first from the left
const cards = document.querySelectorAll(".box-list");
if (cards[1]) {
    cards[1].classList.remove("reveal-left");
    cards[1].classList.add("reveal-right");
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));