const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


var sidemenu = document.getElementById("sidemenu");

function openMenu() {
  sidemenu.style.right = "0px";
}

function closeMenu() {
  sidemenu.style.right = "-200px";
}



// Intersection Observer for triggering animations when section is visible
const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px'
};

const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Use requestAnimationFrame to batch DOM changes
      requestAnimationFrame(() => {
        // Animate stat numbers
        const statCards = entry.target.querySelectorAll('.stat-card');
        statCards.forEach((card, index) => {
          setTimeout(() => {
            // Add entrance animation with transform
            requestAnimationFrame(() => {
              card.style.cssText = 'opacity: 0; transform: translateY(30px);';
              requestAnimationFrame(() => {
                card.style.cssText = 'opacity: 1; transform: translateY(0); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);';
              });
            });
          }, index * 150);
        });
      });
      
      // Only animate once
      aboutObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe the about section when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('.about');
  if (aboutSection) {
    aboutObserver.observe(aboutSection);
  }
  
  // Batch all animations to prevent layout thrashing
  requestAnimationFrame(() => {
    // Add stagger animation to highlight boxes
    const highlightBoxes = document.querySelectorAll('.highlight-box');
    highlightBoxes.forEach((box, index) => {
      setTimeout(() => {
        requestAnimationFrame(() => {
          box.style.cssText = 'opacity: 1; transform: translateX(0); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);';
        });
      }, 300 + (index * 200));
    });
    
    // Add stagger animation to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
      setTimeout(() => {
        requestAnimationFrame(() => {
          tag.style.cssText = 'opacity: 1; transform: scale(1); transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);';
        });
      }, 600 + (index * 100));
    });
  });
});