# Y11ty Blog

A modern, fast, and responsive blog built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/).

## Features

- ⚡ **Lightning Fast**: Static site generation for optimal performance
- 🎨 **Modern Design**: Clean, responsive layout with Tailwind CSS
- 📱 **Mobile-First**: Optimized for all device sizes
- 🚀 **Easy Deployment**: Ready for GitHub Pages, Netlify, and other static hosts
- 📝 **Markdown Support**: Easy content creation with Markdown
- 🔍 **SEO Optimized**: Proper meta tags and structured data
- 📖 **Blog Posts**: Organized post structure with tags and categories
- 🎯 **Accessible**: WCAG compliant with proper semantic markup

## Project Structure

```
y11ty/
├── src/                          # Source files
│   ├── _data/                    # Global data files
│   │   └── site.json            # Site metadata
│   ├── _includes/                # Templates & layouts
│   │   ├── layouts/
│   │   │   ├── base.njk         # Base HTML template
│   │   │   └── post.njk         # Blog post template
│   │   ├── partials/
│   │   │   ├── header.njk
│   │   │   ├── footer.njk
│   │   │   └── nav.njk
│   │   └── components/
│   │       └── post-list.njk
│   ├── assets/                   # Static assets
│   │   ├── css/
│   │   │   ├── styles.css
│   │   │   └── tailwind.css
│   │   ├── js/
│   │   │   └── main.js
│   │   └── images/
│   ├── posts/                    # Blog posts
│   │   ├── posts.json           # Directory data file
│   │   ├── 2025-01-15-first-post.md
│   │   └── 2025-01-20-second-post.md
│   ├── pages/                    # Static pages
│   │   ├── about.md
│   │   └── contact.md
│   └── index.md                  # Home page
├── _site/                        # Build output (gitignored)
├── .eleventy.js                  # Eleventy config
├── .eleventyignore
├── .gitignore
├── package.json
├── package-lock.json
├── tailwind.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/y11ty.git
   cd y11ty
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run serve` - Start production server
- `npm run build` - Build static site for production
- `npm run clean` - Remove build directory
- `npm run build:clean` - Clean build and rebuild

## Configuration

### Site Configuration

Edit `src/_data/site.json` to customize your site:

```json
{
  "title": "Your Blog Title",
  "description": "Your blog description",
  "url": "https://your-site.com",
  "author": "Your Name",
  "email": "your-email@example.com",
  "social": {
    "twitter": "your-twitter-handle",
    "github": "your-github-username"
  }
}
```

### Eleventy Configuration

The main configuration is in `.eleventy.js`. Key settings:

- Input directory: `src/`
- Output directory: `_site/`
- Template formats: Markdown, Nunjucks, HTML
- Asset copying: `src/assets/` → `_site/`

### Tailwind CSS

Tailwind is configured in `tailwind.config.js` with:

- Content scanning for `src/` directory
- Custom color palette and fonts
- Animation keyframes for smooth transitions

## Creating Content

### Blog Posts

1. Create new markdown files in `src/posts/`
2. Use front matter for metadata:

```markdown
---
title: Your Post Title
description: Brief description of your post
date: 2025-01-15
tags: [tag1, tag2]
layout: layouts/post.njk
---

Your post content here...
```

3. Posts will automatically appear on the home page and in collections

### Pages

Create static pages in `src/pages/`:

```markdown
---
title: About
description: About page description
layout: layouts/base.njk
---

# About Page

Your content here...
```

## Customization

### Styling

- Edit `src/assets/css/styles.css` for custom styles
- Modify `tailwind.config.js` for theme customization
- Update partials in `src/_includes/partials/` for layout changes

### Layouts

- `src/_includes/layouts/base.njk` - Main layout for all pages
- `src/_includes/layouts/post.njk` - Layout for blog posts

### Components

Reusable components are in `src/_includes/components/`:

- `post-list.njk` - Displays a grid of blog posts

## Deployment

### GitHub Pages

1. Build the site:
   ```bash
   npm run build
   ```

2. Push the `_site/` directory to your GitHub repository

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `_site`

### Other Platforms

The static site can be deployed to any static hosting service:

- Vercel
- Firebase Hosting
- AWS S3 + CloudFront
- Any web server

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Acknowledgments

- [Eleventy](https://www.11ty.dev/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Nunjucks](https://mozilla.github.io/nunjucks/) - Template engine
