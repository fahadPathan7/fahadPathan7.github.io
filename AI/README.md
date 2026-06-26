# AI Context and Rules - Quick Reference

## Overview

This folder contains comprehensive guidelines for AI assistants working on this portfolio website project. These documents ensure consistent, high-quality work that aligns with the project's goals and standards.

## Document Structure

### 📋 [rules/constraints.md](rules/constraints.md)
**Main project rules and constraints**

Key sections:
- Development rules (HTML, CSS, JavaScript)
- Content guidelines (skills, experience, competitive programming)
- Resource management (icons, images, PDFs)
- Testing and validation procedures
- Safety and security measures
- Git and version control restrictions
- Scope control principles

**Use when:** Starting any task to understand what you can and cannot do.

---

### 🤖 [AGENTS.md](../AGENTS.md)
**Global AI Configuration**

This file lives in the root directory and serves as the universal entry point for all AI agents (like Antigravity, Cursor, GitHub Copilot). It explicitly points agents to read this `AI/` directory to ensure they always adhere to the specific guidelines, design systems, color choices, and responsive breakpoints when working on the codebase.

---

### 📝 [rules/conventions.md](rules/conventions.md)
**Coding conventions and style guidelines**

Key sections:
- General coding philosophy
- HTML standards (structure, semantics, accessibility)
- CSS standards (variables, naming, responsive design, animations)
- JavaScript standards (naming, functions, DOM manipulation)
- Image standards (formats, optimization, naming)
- File naming conventions
- Git commit message format
- Quality checklist
- Best practices summary

**Use when:** Need specific formatting, naming, or style guidance.

---

### 📖 [context/overview.md](context/overview.md)
**Project overview and background information**

Key sections:
- Project overview and goals
- Technology stack (HTML5, vanilla CSS/JS)
- File structure and organization
- Key sections of the website
- Design patterns (colors, typography, responsive design)
- External resources and dependencies
- User identity and competitive programming profiles
- Target audience and common tasks

**Use when:** Need to understand the project's purpose, structure, or background.

---

### 🛠️ [context/workflow.md](context/workflow.md)
**Step-by-step development process**

Key sections:
- Before making changes (assessment phase)
- HTML, CSS, and JavaScript modification guidelines
- Testing procedures (visual, responsive, functional, content)
- Specific guidelines for each website section
- Common pitfalls to avoid
- Debugging tips and troubleshooting
- Version control best practices
- Performance optimization strategies
- Accessibility checklist
- Emergency rollback procedures
- Completion checklist

**Use when:** Actively developing or modifying the website.

---

## Quick Decision Tree

```
Start a task
    │
    ├─ What can I do? → Read [rules/constraints.md]
    │   - Scope limitations
    │   - What NOT to do
    │   - What to DO
    │
    ├─ What coding style should I use? → Read [rules/conventions.md]
    │   - HTML/CSS/JS conventions
    │   - Naming conventions
    │   - Best practices
    │
    ├─ What is this project? → Read [context/overview.md]
    │   - Project overview
    │   - File structure
    │   - User information
    │   - Goals and audience
    │
    └─ How do I implement changes? → Read [context/workflow.md]
        - Step-by-step process
        - Testing procedures
        - Completion checklist
```

## Common Workflows

### Adding a New Feature

1. **Read [rules/constraints.md]** - Confirm feature is within scope
2. **Read [rules/conventions.md]** - Apply proper coding style
3. **Read [context/overview.md]** - Understand existing structure
4. **Read [context/workflow.md]** - Follow the development process
5. **Test thoroughly** - Use testing guidelines from workflow.md
6. **Verify** - Use completion checklist

### Fixing a Bug

1. **Read [context/overview.md]** - Understand the relevant section
2. **Read [context/workflow.md]** - Follow debugging tips
3. **Read [rules/conventions.md]** - Ensure fix follows conventions
4. **Test** - Verify fix works and doesn't break other features
5. **Check completion checklist** - From workflow.md

### Updating Content

1. **Read [rules/constraints.md]** - Review content guidelines
2. **Read [context/overview.md]** - Understand current content structure
3. **Make changes** - Following existing patterns
4. **Test** - Verify updates display correctly
5. **Check** - Ensure no broken links or images

### Styling Changes

1. **Read [rules/constraints.md]** - Design restrictions
2. **Read [context/overview.md]** - Current design patterns
3. **Read [rules/conventions.md]** - CSS conventions
4. **Read [context/workflow.md]** - Testing procedures
5. **Implement and test** - On multiple viewports

## Critical Reminders

### ⚠️ Never Do (from constraints.md)
- Run git commit, push, merge, or rebase
- Modify .gitignore or .gitattributes
- Add build tools or frameworks (React, Vue, etc.) unless explicitly requested
- Delete or rename files without explicit instruction
- Expose sensitive information
- Break existing functionality

### ✅ Always Do
- Maintain existing code style and patterns
- Test changes thoroughly
- Ask for clarification if unsure
- Make minimal, focused changes
- Keep the site fast and lightweight
- Ensure accessibility standards
- Follow mobile-first approach

## Quick Reference Tables

### File Locations

| Type | Location |
|------|----------|
| Main HTML | `/index.html` |
| Styles | `/style.css` |
| Scripts | `/app.js` |
| Icons | `/resources/icons/` |
| Images | `/resources/images/` |
| PDF/Resume | `/resources/pdf/resume.pdf` |

### Technology Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure and content |
| Vanilla CSS | Styling and layout |
| Vanilla JavaScript | Interactivity |
| GitHub Pages | Hosting |
| No frameworks | Keep it simple |

### Key Sections

| Section | ID | Content |
|---------|-----|---------|
| Hero | `#hero` or `#home` | Profile, introduction |
| About | `#about` | Background, interests |
| Skills | `#skills` | Technical abilities |
| Competitive Programming | `#competitive` | Platform profiles |
| Experience | `#experience` | Work history |
| Contact | `#contact` | Contact information |

## Testing Checklist

Always complete these checks:

- [ ] No console errors
- [ ] Works in Chrome, Firefox, Safari
- [ ] Mobile responsive (375px, 768px, 1024px+)
- [ ] All links work
- [ ] All images load correctly
- [ ] Text is readable
- [ ] Animations are smooth
- [ ] Accessibility features present
- [ ] Performance is good
- [ ] No unintended side effects

## When to Ask for Help

Ask the user if:
- Requirements are ambiguous
- You need to break established rules
- Major architectural changes are needed
- You encounter unexpected errors
- The scope is unclear
- Multiple approaches are possible

## Document Maintenance

These documents should be reviewed when:
- Project structure changes significantly
- New technologies are added
- Major design changes occur
- Rules or patterns evolve
- New team members join

## Success Criteria

A change is successful when:
- ✅ It meets all requirements
- ✅ Code is clean and maintainable
- ✅ No regressions are introduced
- ✅ It works across browsers and devices
- ✅ Performance is maintained or improved
- ✅ Accessibility is preserved
- ✅ Tests pass

---

## Getting Started

If you're new to this project:

1. Start with [context/overview.md](context/overview.md) to understand what we're building
2. Review [rules/constraints.md](rules/constraints.md) to know your boundaries
3. Browse [rules/conventions.md](rules/conventions.md) for style guidelines
4. Refer to [context/workflow.md](context/workflow.md) during development

## Need Help?

- If unsure about scope: Check [rules/constraints.md](rules/constraints.md)
- If unsure about style: Check [rules/conventions.md](rules/conventions.md)
- If unsure about structure: Check [context/overview.md](context/overview.md)
- If unsure about how to implement: Check [context/workflow.md](context/workflow.md)

---

**Remember**: These documents are living guidelines. They should evolve with the project while maintaining consistency and quality.
