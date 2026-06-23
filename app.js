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
      // Animate stat numbers
      const statCards = entry.target.querySelectorAll('.stat-card');
      statCards.forEach((card, index) => {
        setTimeout(() => {
          // Add entrance animation
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px)';
          setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 100);
        }, index * 150);
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
  
  // Add stagger animation to highlight boxes
  const highlightBoxes = document.querySelectorAll('.highlight-box');
  highlightBoxes.forEach((box, index) => {
    box.style.opacity = '0';
    box.style.transform = 'translateX(-30px)';
    setTimeout(() => {
      box.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      box.style.opacity = '1';
      box.style.transform = 'translateX(0)';
    }, 300 + (index * 200));
  });
  
  // Add stagger animation to skill tags
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'scale(0.8)';
    setTimeout(() => {
      tag.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      tag.style.opacity = '1';
      tag.style.transform = 'scale(1)';
    }, 600 + (index * 100));
  });
});