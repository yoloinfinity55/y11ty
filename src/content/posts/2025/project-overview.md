---
title: Y11ty - Eleventy Blog with Tailwind CSS
tags: posts
---

# Y11ty - Eleventy Blog with Tailwind CSS

A modern static blog built with Eleventy (11ty) and Tailwind CSS.

## Features

- ⚡ Fast static site generation with Eleventy
- 🎨 Beautiful styling with Tailwind CSS
- 📱 Responsive design
- 🚀 GitHub Pages deployment ready
- 📝 Markdown blog posts support

## Getting Started

### Prerequisites

- Node.js (v20.17.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yoloinfinity55/y11ty.git
cd y11ty
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run build
```

4. View the site at `http://localhost:8080` (if using serve) or check the `_site` folder

## Project Structure

```
├── src/
│   ├── _includes/
│   │   └── index.html          # Main layout template
│   ├── css/
│   │   └── style.css           # Tailwind CSS styles
│   └── *.md                    # Blog posts and pages
├── _site/                      # Generated static site
├── eleventy.config.js          # Eleventy configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── package.json
```

## Development

### Build Commands

- `npm run build` - Build the static site
- `npm run test` - Run tests (currently placeholder)

### Adding New Posts

Create new markdown files in the `src/` directory with front matter:

```markdown
---
title: Your Post Title
tags: posts
---
# {{ title }}

Your post content here...
```

## Customization

### Tailwind CSS

The project uses Tailwind CSS v4 with custom configuration. Main styles are in `src/css/style.css`.

### Custom Colors

Primary color is set to `#ff49db` (hot pink) in `tailwind.config.js`.

## Deployment

The site is configured for automatic deployment to GitHub Pages via GitHub Actions. Simply push to the `main` branch to trigger a deployment.

## License

ISC License
