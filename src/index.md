---
title: Home
layout: index.html
---
# Welcome to Y11ty Blog

This is a modern blog built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/). It's designed to be fast, responsive, and easy to customize.

## Latest Posts

{% for post in collections.posts | reverse %}
<article class="bg-white rounded-lg shadow-sm border p-6 mb-6 hover:shadow-md transition-shadow">
    <h2 class="text-2xl font-bold mb-2">
        <a href="{{ post.url }}" class="text-gray-900 hover:text-primary transition-colors">{{ post.data.title }}</a>
    </h2>
    <p class="text-gray-600 text-sm mb-3">
        Posted on {{ post.date | date: "%B %d, %Y" }}
        {% if post.data.tags %}
        • Tagged: {{ post.data.tags | join: ", " }}
        {% endif %}
    </p>
    <p class="text-gray-700 leading-relaxed">
        {{ post.templateContent | striptags | truncate: 200 }}
    </p>
    <a href="{{ post.url }}" class="inline-flex items-center text-primary hover:text-primary-dark font-medium mt-3">
        Read more →
    </a>
</article>
{% endfor %}

## About This Blog

This blog is built as a learning project to demonstrate modern web development techniques using static site generation. It features:

- ⚡ **Fast Performance**: Static generation for lightning-fast load times
- 🎨 **Modern Design**: Clean, responsive layout with Tailwind CSS
- 📱 **Mobile-First**: Optimized for all device sizes
- 🚀 **Easy Deployment**: Ready for GitHub Pages and other static hosts
- 📝 **Markdown Support**: Easy content creation with Markdown

## Getting Started

To run this blog locally:

1. Clone the repository
2. Install dependencies with `npm install`
3. Build with `npm run build`
4. Serve the `_site` folder with your preferred static file server

The blog is automatically deployed to GitHub Pages when changes are pushed to the main branch.
