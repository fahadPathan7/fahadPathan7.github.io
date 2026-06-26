// ============================================================
// Fahad Pathan's portfolio — all interaction scripts.
// Loaded with `defer`, so the DOM is fully parsed before this runs.
// ============================================================

// Google Analytics (gtag.js) — the ONE approved analytics exception (see CLAUDE.md).
// The external loader tag lives in <head> of index.html; this init/config stays in JS
// to honor the "no inline <script> in index.html" rule. Runs as soon as app.js executes.
window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-8CN2080BH5');

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
                if (target) target.classList.add('active');
                btn.classList.add('active');
            });
        });
    };
    setupTabs('research-category-btn', 'research-category-content');
    setupTabs('experience-category-btn', 'experience-category-content');

    /* ---- About-section stat-card entrance animation (on scroll) ---- */
    const observerOptions = { threshold: 0.3, rootMargin: '0px' };
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
    }, { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0 });
    revealEls.forEach((el) => revealObserver.observe(el));
});
