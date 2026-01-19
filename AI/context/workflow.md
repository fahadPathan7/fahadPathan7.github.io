# Development Guidelines for Portfolio Website

## Before Making Changes

### 1. Assessment Phase
When asked to make a change, follow these steps:

1. **Understand the Request**
   - What exactly needs to be changed?
   - What files will be affected?
   - What is the scope of the change?

2. **Read Existing Code**
   - Open the relevant files to understand current implementation
   - Note the coding patterns and style used
   - Identify dependencies between files

3. **Plan the Change**
   - List the specific modifications needed
   - Consider impact on other parts of the site
   - Identify any potential issues

4. **Ask for Clarification** (if needed)
   - If requirements are ambiguous, ask questions
   - Confirm understanding before proceeding
   - Suggest alternatives if you see better approaches

## Making Changes

### HTML Modifications

#### Best Practices
- Use semantic HTML5 elements
- Maintain proper indentation (consistent with existing code)
- Keep attributes on one line or wrapped consistently
- Use lowercase for tag and attribute names
- Quote all attribute values

#### Common Tasks

**Adding a new section:**
```html
<section id="section-name" class="section-class">
  <h2>Section Title</h2>
  <div class="content">
    <!-- Content here -->
  </div>
</section>
```

**Adding navigation link:**
- Update the nav menu in `<nav>` element
- Add corresponding section ID
- Ensure smooth scroll behavior

**Adding new skill:**
- Copy existing skill item pattern
- Update icon path and text
- Ensure consistent formatting

### CSS Modifications

#### Best Practices
- Use CSS variables for colors and spacing
- Maintain mobile-first approach
- Test on multiple breakpoints
- Use meaningful class names
- Comment complex selectors

#### Common Tasks

**Updating colors:**
```css
:root {
  --primary-color: #new-color;
  --secondary-color: #new-color;
}
```

**Adding responsive breakpoint:**
```css
@media (max-width: 768px) {
  /* Mobile-specific styles */
}
```

**Styling a new section:**
- Use existing section classes as templates
- Maintain spacing consistency
- Test on mobile, tablet, and desktop

### JavaScript Modifications

#### Best Practices
- Use vanilla JavaScript (no frameworks)
- Keep functions small and focused
- Use meaningful variable names
- Add comments for complex logic
- Handle errors gracefully

#### Common Tasks

**Adding event listener:**
```javascript
document.getElementById('element-id').addEventListener('event', function() {
  // Handle event
});
```

**DOM manipulation:**
- Query selectors for elements
- Use classList for class manipulation
- Ensure elements exist before manipulation

## Testing Guidelines

### After Making Changes

#### 1. Visual Testing
- Check the site in multiple browsers:
  - Google Chrome
  - Mozilla Firefox
  - Safari (if on Mac)
  - Edge (if available)

#### 2. Responsive Testing
Test on these viewport sizes:
- Mobile: 375px, 414px
- Tablet: 768px, 820px
- Desktop: 1024px, 1440px, 1920px

#### 3. Functional Testing
- Click all navigation links
- Verify smooth scrolling
- Test all buttons and interactive elements
- Check hover states and animations
- Verify all external links work

#### 4. Content Testing
- Read all text for typos and grammar
- Check image alt text is present
- Verify all icons display correctly
- Ensure contact information is accurate

#### 5. Performance Testing
- Check page load speed
- Verify no console errors
- Test on slow connection (if possible)
- Check image file sizes

## Specific Guidelines by Section

### Hero Section
- Keep profile image centered and properly sized
- Ensure text is readable on all backgrounds
- Maintain button hover effects
- Check animation smoothness

### Skills Section
- Keep icons aligned consistently
- Maintain equal spacing between skills
- Ensure text is readable
- Test tooltip behavior (if implemented)

### Competitive Programming
- Verify all platform links work
- Check that badges/images load correctly
- Ensure statistics are accurate
- Maintain consistent formatting

### Experience Section
- Keep company logos properly sized
- Maintain consistent spacing
- Ensure dates and roles are clear
- Check for accurate information

### Contact Section
- Verify email and phone links work
- Check social media links
- Ensure location information is clear
- Test contact form (if implemented)

## Common Pitfalls to Avoid

### ❌ Don't Do This
- Add build tools or package managers
- Create complex JavaScript without need
- Hardcode values that should be CSS variables
- Ignore mobile responsiveness
- Break existing functionality
- Add large image files without optimization
- Remove accessibility features
- Change the overall design system

### ✅ Do This Instead
- Keep changes minimal and focused
- Follow existing patterns
- Test thoroughly before completing
- Ask for clarification when unsure
- Maintain clean, readable code
- Keep the site fast and lightweight
- Ensure accessibility is maintained
- Follow existing design language

## Debugging Tips

### When Something Doesn't Work

1. **Check the Browser Console**
   - Look for JavaScript errors
   - Check for failed resource loads
   - Review any warnings

2. **Verify HTML Structure**
   - Check for unclosed tags
   - Ensure proper nesting
   - Validate attributes

3. **Review CSS**
   - Check for syntax errors
   - Verify selector specificity
   - Check for typos in class/ID names

4. **Test Incrementally**
   - Undo recent changes
   - Reapply one change at a time
   - Test after each change

5. **Compare with Working Version**
   - Use git diff to see what changed
   - Identify the breaking change
   - Fix or revert the specific issue

## Version Control Best Practices

### Commit Messages (when user commits)
- Use clear, descriptive messages
- Start with a verb: "Add", "Fix", "Update", "Remove"
- Be specific about what changed
- Example: "Add new Python skill to skills section"

### Reviewing Changes
- Always review changes before considering them complete
- Test the modified functionality
- Ensure no regressions in other areas
- Verify on multiple browsers

## Documentation

### Adding Comments
- Add comments only when logic is complex
- Explain "why" not "what"
- Keep comments concise
- Remove outdated comments

### Code Style
- Maintain 2-4 space indentation (match existing)
- Use meaningful variable/function names
- Follow existing conventions
- Keep lines reasonably long (not excessively)

## Performance Optimization

### Images
- Use appropriate file formats (JPEG for photos, PNG for graphics, SVG for icons)
- Compress images before adding
- Use responsive images if needed
- Lazy load below-the-fold images

### CSS
- Minimize redundant styles
- Use efficient selectors
- Avoid deeply nested selectors
- Remove unused styles

### JavaScript
- Minimize DOM manipulation
- Use event delegation when possible
- Avoid memory leaks
- Keep functions efficient

## Accessibility Checklist

- [ ] All images have alt text
- [ ] Proper heading hierarchy (h1, h2, h3...)
- [ ] Sufficient color contrast
- [ ] Keyboard navigation works
- [ ] ARIA labels where needed
- [ ] Focus states are visible
- [ ] Forms have proper labels
- [ ] Links describe their destination

## When to Ask for Help

Ask the user if you encounter:
- Ambiguous requirements
- Conflicting instructions
- Major architectural decisions
- Uncertain scope
- Unexpected errors you can't resolve
- Need for additional resources

## Completion Checklist

Before marking a task as complete, verify:

- [ ] All requested changes are implemented
- [ ] Code follows existing patterns
- [ ] No console errors
- [ ] Works in multiple browsers
- [ ] Responsive on all viewport sizes
- [ ] All links and buttons work
- [ ] Content is accurate and typo-free
- [ ] Performance is maintained
- [ ] Accessibility standards are met
- [ ] No unintended side effects

## Emergency Rollback

If a critical issue is introduced:
1. Identify the problematic changes
2. Explain the issue to the user
3. Suggest rollback to previous working state
4. Wait for user approval before proceeding
5. Revert changes safely

---

Remember: Quality over quantity. A small, well-tested change is better than a large, buggy one.
