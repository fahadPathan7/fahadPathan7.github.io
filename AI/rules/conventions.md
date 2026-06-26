# Coding Standards and Conventions

## General Principles

### Code Philosophy
- **Simplicity first** - Keep code simple and readable
- **Minimal complexity** - Avoid over-engineering
- **Consistency** - Follow existing patterns in the codebase
- **Performance** - Optimize for fast load times and smooth interactions

## HTML Standards

### Document Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="...">
  <title>Fahad Pathan - Portfolio</title>
  <link rel="stylesheet" href="style.css">
  <!-- Font imports -->
</head>
<body>
  <!-- Content -->
  <script src="app.js"></script>
</body>
</html>
```

### Indentation and Formatting
- **Indentation**: 2 or 4 spaces (consistent throughout file)
- **Line length**: Prefer lines under 100 characters
- **Tags**: Use lowercase HTML tags
- **Attributes**: Quote all attribute values with double quotes

### Element Usage

#### Semantic Elements
- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` where appropriate
- Use `<h1>` through `<h6>` for headings (maintain hierarchy)
- Use `<button>` for actions, `<a>` for navigation

#### Form Elements
```html
<!-- Use proper labels -->
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>

<!-- Use semantic types -->
<input type="text" placeholder="Your Name">
<input type="email" placeholder="your@email.com">
<input type="tel" placeholder="+1234567890">
```

#### Accessibility
- Always include `alt` attributes on images
- Use `aria-label` for icon-only buttons
- Ensure sufficient color contrast
- Provide focus states for interactive elements

### Comments
```html
<!-- Section: About Me -->
<section id="about">
  <!-- Content -->
</section>
```

## CSS Standards

### File Organization
1. CSS Variables/Custom Properties
2. Reset/Normalize styles
3. Global styles
4. Layout styles
5. Component styles
6. Media queries
7. Utility classes

### Design System & Theme

#### Colors (from style.css)
```css
:root {
  /* Brand Colors */
  --primary-color: #6366f1;    /* Indigo */
  --secondary-color: #8b5cf6;  /* Violet */
  --accent-color: #06b6d4;     /* Cyan */
  
  /* Neutral Colors */
  --text-color: #1e293b;       /* Slate 800 */
  --bg-color: #fafbff;         /* Very Light Blue/Gray */
  --surface-color: #f1f5f9;    /* Slate 100 */
  --muted-color: #94a3b8;      /* Slate 400 */
}
```

#### Typography
- **Headings (h1-h6)**: `'Space Grotesk', sans-serif`
- **Body Text**: `'Inter', sans-serif`

### Layout & Spacing
- **Container Padding**: `0 8%`
- **Section Padding**: `8% 0`

### Naming Conventions
- Use kebab-case for class names: `.skill-card`, `.nav-link`
- Use descriptive names: `.contact-form`, `.profile-image`
- Avoid single-letter class names
- Use BEM methodology when appropriate: `.block__element--modifier`

### Indentation and Formatting
```css
.selector {
  property: value;
  property: value;
}

/* Nested rules for media queries */
@media (max-width: 768px) {
  .selector {
    property: value;
  }
}
```

### Shorthand Properties
```css
/* Good */
margin: 10px 20px;
padding: 10px;
border: 1px solid #ccc;
background: #fff url('image.png') no-repeat center;

/* Avoid overly complex shorthand */
margin: 10px 20px 30px 40px; /* Use if all different */
```

### Flexbox and Grid
```css
/* Flexbox */
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

### Responsive Design Breakpoints
We primarily use a desktop-first or mobile-first approach, adhering to these common max-width/min-width breakpoints:

```css
/* Standard Desktop-down breakpoints */
@media (max-width: 1200px) {
  /* Large Tablets / Small Desktops */
}

@media (max-width: 992px) {
  /* Tablets */
}

@media (max-width: 768px) {
  /* Large Mobile Devices */
}

@media (max-width: 576px) {
  /* Small Mobile Devices */
}

/* For specific ranges or large screens */
@media (min-width: 1201px) {
  /* Large Desktops */
}
```

### Animations
```css
.transition {
  transition: all 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate {
  animation: fadeIn 0.5s ease-in-out;
}
```

### Comments
```css
/* ========================================
   Section: Hero Styles
   ======================================== */

/* Main hero container */
.hero {
  /* Styles */
}

/* Hero image styling */
.hero__image {
  /* Styles */
}
```

## JavaScript Standards

### Code Organization
```javascript
// DOM Elements
const element = document.getElementById('id');

// Event Listeners
function initEventListeners() {
  // Event listeners
}

// Functions
function functionName() {
  // Logic
}

// Initialization
document.addEventListener('DOMContentLoaded', function() {
  initEventListeners();
});
```

### Naming Conventions
- **Variables**: camelCase: `userName`, `totalCount`
- **Functions**: camelCase with verb prefix: `getUserData()`, `calculateTotal()`
- **Constants**: UPPER_SNAKE_CASE: `MAX_ITEMS`, `API_URL`
- **Classes**: PascalCase: `UserProfile`, `EventBus`

### Function Declaration
```javascript
// Function Declaration (hoisted)
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression (not hoisted)
const greet = function(name) {
  return `Hello, ${name}!`;
};

// Arrow Function (preferred for callbacks)
const greet = (name) => `Hello, ${name}!`;
```

### Variable Declaration
```javascript
// Use const by default
const apiKey = 'abc123';
const userData = { name: 'John' };

// Use let if variable needs reassignment
let count = 0;
count = count + 1;

// Avoid var in modern code
```

### DOM Manipulation
```javascript
// Select elements
const element = document.getElementById('myId');
const elements = document.querySelectorAll('.myClass');

// Modify elements
element.textContent = 'New text';
element.classList.add('active');
element.classList.remove('hidden');
element.style.display = 'block';

// Create elements
const newElement = document.createElement('div');
newElement.textContent = 'Content';
parentElement.appendChild(newElement);
```

### Event Handling
```javascript
// Event listener
element.addEventListener('click', function(event) {
  event.preventDefault();
  // Handle click
});

// Event delegation for dynamic elements
document.addEventListener('click', function(event) {
  if (event.target.matches('.button')) {
    // Handle button click
  }
});
```

### Error Handling
```javascript
// Try-Catch
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('Error parsing JSON:', error);
}

// Optional chaining
const value = object?.property?.nested;

// Nullish coalescing
const value = input ?? 'default';
```

### Comments
```javascript
/**
 * Calculates the total price including tax
 * @param {number} basePrice - The base price
 * @param {number} taxRate - The tax rate (e.g., 0.1 for 10%)
 * @returns {number} Total price with tax
 */
function calculateTotal(basePrice, taxRate) {
  return basePrice * (1 + taxRate);
}

// Single line comment for clarification
const result = calculateTotal(100, 0.1); // $110 with 10% tax
```

### Performance
```javascript
// Cache DOM queries
const element = document.getElementById('element');
for (let i = 0; i < 100; i++) {
  element.textContent = i; // Good
}

// Not this:
for (let i = 0; i < 100; i++) {
  document.getElementById('element').textContent = i; // Bad

// Debounce resize events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

window.addEventListener('resize', debounce(handleResize, 250));
```

## Image Standards

### File Formats
- **Photos**: Use JPEG (good compression)
- **Graphics/Logos**: Use PNG (transparency support)
- **Icons**: Use SVG (scalable, small file size)
- **Simple graphics**: Use PNG-8 or SVG

### Optimization
- Compress images before adding to repository
- Use appropriate dimensions (don't use huge images for small displays)
- Consider lazy loading for below-the-fold images
- Use modern formats like WebP when appropriate

### Naming
```bash
# Use lowercase, hyphen-separated names
profile-picture.png
bs23-logo.png
codechef-badge.svg

# Avoid
Profile Picture.png
bs23_logo.png
```

## File Naming Conventions

### HTML Files
- Lowercase, hyphen-separated: `index.html`, `about.html`

### CSS Files
- Lowercase, hyphen-separated: `style.css`, `responsive.css`

### JavaScript Files
- Lowercase, hyphen-separated: `app.js`, `main.js`, `utils.js`

### Image Files
- Lowercase, hyphen-separated: `profile-pic.png`, `hero-bg.jpg`

## Git Standards (for reference)

### Commit Message Format
```
type: brief description

Detailed explanation (if needed)
```

### Types
- `add`: Add new feature
- `fix`: Fix bug
- `update`: Update existing functionality
- `remove`: Remove feature
- `refactor`: Code refactoring
- `style`: Code style changes
- `docs`: Documentation changes

### Examples
```
add: Python skill to skills section
fix: Navigation menu not closing on mobile
update: Contact email in footer
remove: Unused CSS class
```

## Quality Checklist

### Before Submitting Code
- [ ] Code is properly indented
- [ ] Comments are clear and necessary
- [ ] Variables have meaningful names
- [ ] Functions are small and focused
- [ ] No console errors or warnings
- [ ] Code is tested on multiple browsers
- [ ] Responsive design is verified
- [ ] Accessibility is maintained
- [ ] Performance is optimized
- [ ] No redundant code

## Best Practices Summary

### Do ✅
- Keep code simple and readable
- Follow existing patterns
- Use semantic HTML
- Write maintainable CSS
- Optimize for performance
- Test thoroughly
- Document complex logic
- Use version control

### Don't ❌
- Over-engineer solutions
- Ignore responsive design
- Skip testing
- Add unnecessary dependencies
- Create complex code when simple works
- Ignore accessibility
- Duplicate code
- Commit untested changes

---

Remember: Good code is code that others can understand, maintain, and extend.
