---
title: Home
layout: layouts/index.html
pagination:
  data: collections.pagedPosts
  size: 5
  alias: posts
---
# Welcome to Y11ty Blog

This is a modern blog built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/). It's designed to be fast, responsive, and easy to customize.

## Latest Posts

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{% for post in posts %}
    <article class="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
        <h2 class="text-xl font-bold mb-2">
            <a href="{{ post.url }}" class="text-gray-900 hover:text-primary transition-colors">{{ post.data.title }}</a>
        </h2>
        <p class="text-gray-600 text-sm mb-3">
            Posted on {{ post.date | date: "%B %d, %Y" }}
            {% if post.data.tags %}
            • Tagged: {% for tag in post.data.tags %}<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mx-1">{{ tag }}</span>{% endfor %}
            {% endif %}
        </p>
        {% if post.data.description %}
        <p class="text-gray-700 leading-relaxed mb-3">{{ post.data.description }}</p>
        {% endif %}
        <p class="text-gray-700 leading-relaxed text-sm">
            {{ post.templateContent | striptags | truncate: 150 }}
        </p>
        <a href="{{ post.url }}" class="inline-flex items-center text-primary hover:text-primary-dark font-medium mt-3">
            Read more →
        </a>
    </article>
{% endfor %}
</div>

<!-- Pagination -->
{% if pagination.pages.length > 1 %}
<nav class="mt-12 pt-8 border-t border-gray-200">
    <div class="flex justify-center items-center space-x-2">
        {% if pagination.previousPageHref %}
        <a href="{{ pagination.previousPageHref }}" class="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            ← Previous
        </a>
        {% endif %}

        {% for pageEntry in pagination.pages %}
        <a href="{{ pageEntry.href }}" class="px-4 py-2 text-sm font-medium {% if pageEntry.number == pagination.pageNumber %}text-white bg-primary border border-primary{% else %}text-gray-500 bg-white border border-gray-300 hover:bg-gray-50{% endif %} rounded-md">
            {{ pageEntry.number }}
        </a>
        {% endfor %}

        {% if pagination.nextPageHref %}
        <a href="{{ pagination.nextPageHref }}" class="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Next →
        </a>
        {% endif %}
    </div>
</nav>
{% endif %}

## About This Blog

This blog is built as a learning project to demonstrate modern web development techniques using static site generation. It features:

- ⚡ **Fast Performance**: Static generation for lightning-fast load times
- 🎨 **Modern Design**: Clean, responsive layout with Tailwind CSS
- 📱 **Mobile-First**: Optimized for all device sizes
- 🚀 **Easy Deployment**: Ready for GitHub Pages and other static hosts
- 📝 **Markdown Support**: Easy content creation with Markdown
- 🔍 **SEO Optimized**: Proper meta tags and structured data
- 📄 **RSS Feed**: Subscribe to new posts
- 📖 **Pagination**: Browse through posts easily

## Recent Posts

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
{% for post in collections.posts | limit: 4 %}
    <div class="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow">
        <h3 class="font-semibold mb-2">
            <a href="{{ post.url }}" class="text-gray-900 hover:text-primary transition-colors">{{ post.data.title }}</a>
        </h3>
        <p class="text-sm text-gray-600 mb-2">{{ post.date | date: "%B %d, %Y" }}</p>
        {% if post.data.description %}
        <p class="text-sm text-gray-700">{{ post.data.description | truncate: 100 }}</p>
        {% endif %}
    </div>
{% endfor %}
</div>

## Getting Started

To run this blog locally:

1. Clone the repository
2. Install dependencies with `npm install`
3. Start development server with `npm run dev`
4. View at `http://localhost:8080`

The blog is automatically deployed to GitHub Pages when changes are pushed to the main branch.
