# AI Rules for Portfolio Website Project

## Project-Specific Rules

### General Principles
- **Purpose**: This is a personal portfolio website showcasing programming skills, competitive programming achievements, and professional experience
- **Audience**: Recruiters, hiring managers, and fellow developers
- **Tone**: Professional, clean, and modern

### Development Rules

1. **File Organization**
   - Root directory contains main files: `index.html`, `app.js`, `style.css`
   - Resources organized in `resources/` subdirectories: `icons/`, `images/`, `pdf/`
   - Keep changes minimal and focused on requested features

2. **Code Style**
   - Maintain existing indentation and formatting (2-4 spaces consistent per file)
   - Use descriptive variable and function names
   - Add comments only when logic is complex or non-obvious
   - Follow existing patterns in the codebase

3. **HTML Structure**
   - Use semantic HTML5 elements (header, nav, section, footer)
   - Maintain accessibility features (alt text, aria labels)
   - Keep markup clean and well-indented
   - Ensure mobile-responsive design

4. **CSS Styling**
   - Use CSS variables for theme colors when possible
   - Maintain consistency with existing design language
   - Ensure responsive breakpoints match current implementation
   - Test styling on multiple viewport sizes

5. **JavaScript Logic**
   - Keep functions small and focused
   - Use event delegation where appropriate
   - Maintain existing DOM manipulation patterns
   - Ensure no console errors in production code

### Content Guidelines

1. **Portfolio Information**
   - Keep personal information accurate and professional
   - Update contact information if making changes
   - Ensure social media links are current
   - Maintain consistent naming conventions (e.g., "CodeChef" not "codechef")

2. **Skills & Technologies**
   - Only add skills that the user actually possesses
   - Group related skills logically
   - Use consistent formatting for skill lists
   - Keep icons matched to correct technologies

3. **Competitive Programming**
   - Maintain accurate platform links (CodeChef, Codeforces, LeetCode, StopStalk)
   - Ensure usernames/IDs are correct
   - Update statistics only if provided by user
   - Keep badge/achievement images properly linked

4. **Projects & Experience**
   - Use professional language in descriptions
   - Focus on impact and achievements
   - Maintain chronological order where applicable
   - Keep company logos consistent (e.g., BS23, Amir)

### Resource Management

1. **Icons & Images**
   - Use SVG format where possible for scalability
   - Maintain consistent sizing and quality
   - Ensure all images have appropriate alt text
   - Keep file sizes optimized for web performance

2. **PDF Resources**
   - Keep `resume.pdf` updated only when explicitly requested
   - Do not modify existing PDF files
   - Ensure correct file paths in links

### Testing & Validation

1. **Before Making Changes**
   - Read existing code to understand patterns
   - Identify all files that need modification
   - Plan changes to minimize impact

2. **After Making Changes**
   - Test on multiple browsers (Chrome, Firefox, Safari)
   - Verify responsive design on mobile and desktop
   - Check all links and navigation
   - Ensure no console errors
   - Validate HTML and CSS

### Safety & Security

1. **No External Dependencies**
   - Do not add npm packages or build tools unless explicitly requested
   - Use CDN links only for trusted libraries (e.g., FontAwesome, Google Fonts)
   - Keep the project as a simple static site

2. **Contact Information**
   - Never expose sensitive personal data
   - Use contact forms or email links appropriately
   - Validate user inputs if adding interactive features

### Git & Version Control

1. **Strict Guidelines**
   - Do NOT run git commit, push, merge, or rebase
   - Do NOT modify .gitignore or .gitattributes
   - Do NOT delete or rename files unless explicitly asked
   - Do NOT modify repository configuration

2. **Changes**
   - Keep changes reversible where possible
   - Provide clear explanations of what was modified
   - Maintain backward compatibility

### What NOT to Do

- ❌ Add build tools or frameworks (React, Vue, etc.) unless requested
- ❌ Create new directories without user approval
- ❌ Modify existing content without explicit instruction
- ❌ Add analytics or tracking code
- ❌ Change the overall design system without consultation
- ❌ Remove existing features or sections

### What to DO

- ✅ Maintain existing code style and patterns
- ✅ Keep the site simple and performant
- ✅ Ensure accessibility standards are met
- ✅ Test all changes thoroughly
- ✅ Ask for clarification if requirements are unclear
- ✅ Make minimal, focused changes
- ✅ Document complex logic with brief comments

### Scope Control

When given a task:
1. Read the relevant files first
2. Identify the exact scope of changes needed
3. Confirm understanding with the user if requirements are ambiguous
4. Make changes only within the specified scope
5. Test and verify the changes work as expected

### Emergency Contact

If something breaks or you encounter an issue:
- Immediately stop and inform the user
- Explain what happened and what was being changed
- Suggest a fix or rollback strategy
- Wait for user approval before proceeding
