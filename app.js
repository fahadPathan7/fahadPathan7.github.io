// ============================================================
// Fahad Pathan's portfolio — all interaction scripts.
// Loaded with `defer`, so the DOM is fully parsed before this runs.
// ============================================================

/* ---- Google Analytics (gtag.js) — lazy-loaded, never blocks first paint ----
   The ONE approved analytics exception (see CLAUDE.md). Tracking is unchanged;
   the gtag.js script + its config just load after the page is interactive
   (on idle callback, or the first user interaction — whichever fires first). This
   keeps the ~155 KB script and its long main-thread tasks off the critical path,
   which is the single biggest mobile Performance win. No GA tag lives in index.html. */
const GA_ID = 'G-8CN2080BH5';
let gaLoaded = false;
function loadGA() {
    if (gaLoaded) return;
    gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
}
const onIdle = window.requestIdleCallback
    ? (cb) => window.requestIdleCallback(cb, { timeout: 3000 })
    : (cb) => setTimeout(cb, 2000);
if (document.readyState === 'complete') onIdle(loadGA);
else window.addEventListener('load', () => onIdle(loadGA));
['scroll', 'keydown', 'touchstart', 'pointerdown'].forEach((evt) =>
    window.addEventListener(evt, loadGA, { once: true, passive: true })
);

document.addEventListener('DOMContentLoaded', () => {
    /* ---- Mobile navigation menu ---- */
    const menuBtn = document.getElementById('menu-toggle');
    const dropdown = document.getElementById('dropdown-menu');

    const setMenu = (open) => {
        if (!dropdown) return;
        dropdown.style.display = open ? 'block' : 'none';
        menuBtn?.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    if (menuBtn && dropdown) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            setMenu(dropdown.style.display !== 'block');
        });

        // Close once a destination is chosen so the menu doesn't linger.
        dropdown.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => setMenu(false));
        });

        // Close on click outside the button/menu.
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
                setMenu(false);
            }
        });
    }

    /* ---- Copy contact email to clipboard ---- */
    const copyEmailButton = document.querySelector('[data-copy-email]');
    const copyStatus = document.querySelector('.copy-status');
    copyEmailButton?.addEventListener('click', async () => {
        const email = copyEmailButton.dataset.copyEmail;
        try {
            await navigator.clipboard.writeText(email);
            copyStatus.textContent = 'Email copied to clipboard.';
        } catch (error) {
            copyStatus.textContent = email;
        }
    });

    /* ---- Category tab switchers (Research & Experience) ----
       Each group pairs a button class with a content-panel class; the panel
       to reveal is identified by the clicked button's data-category value. */
    const setupTabs = (btnClass, contentClass) => {
        const buttons = document.querySelectorAll('.' + btnClass);
        buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const categoryId = btn.dataset.category;
                if (!categoryId) return;
                document.querySelectorAll('.' + contentClass).forEach((c) => c.classList.remove('active'));
                document.querySelectorAll('.' + btnClass).forEach((b) => b.classList.remove('active'));
                const target = document.getElementById(categoryId);
                if (target) {
                    target.classList.add('active');
                    // Instantly reveal all cards inside activated tab to prevent scroll/opacity delays
                    target.querySelectorAll('.research-card, .experience-box, .cert-card, .projects-box').forEach((el) => {
                        el.classList.add('visible');
                    });
                }
                btn.classList.add('active');
            });
        });
    };
    setupTabs('research-category-btn', 'research-category-content');
    setupTabs('experience-category-btn', 'experience-category-content');

    // Ensure all active tab elements are marked visible on page load
    document.querySelectorAll('.research-category-content.active .research-card, .experience-category-content.active .experience-box').forEach((el) => {
        el.classList.add('visible');
    });

    /* ---- About-section stat-card entrance animation (on scroll) ---- */
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px 50px 0px' };
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Batch DOM changes with requestAnimationFrame.
                requestAnimationFrame(() => {
                    const statCards = entry.target.querySelectorAll('.stat-card');
                    statCards.forEach((card, index) => {
                        setTimeout(() => {
                            requestAnimationFrame(() => {
                                card.style.cssText = 'opacity: 0; transform: translateY(30px);';
                                requestAnimationFrame(() => {
                                    card.style.cssText = 'opacity: 1; transform: translateY(0); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);';
                                });
                            });
                        }, index * 150);
                    });
                });
                aboutObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    const aboutSection = document.querySelector('.about');
    if (aboutSection) aboutObserver.observe(aboutSection);

    // Staggered entrance for highlight boxes.
    requestAnimationFrame(() => {
        const highlightBoxes = document.querySelectorAll('.highlight-box');
        highlightBoxes.forEach((box, index) => {
            setTimeout(() => {
                requestAnimationFrame(() => {
                    box.style.cssText = 'opacity: 1; transform: translateX(0); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);';
                });
            }, 300 + (index * 200));
        });
    });

    /* ---- Fade-in on scroll for major sections & cards ---- */
    const revealEls = document.querySelectorAll('section, .projects-box, .cert-card, .research-card, .platform-card, .achievements-box, .education-card, .experience-box');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // animate once, then stop watching
            }
        });
    }, { root: null, rootMargin: '0px 0px 50px 0px', threshold: 0 });
    revealEls.forEach((el) => revealObserver.observe(el));
});
