---
title: Blog
layout: layouts/index.html
pagination:
  data: collections.posts
  size: 1000
  alias: posts
---

# All Blog Posts

Explore all our articles about web development, Eleventy, Tailwind CSS, and modern development practices.

## Posts

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{% for post in posts %}
    <article class="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 class="text-xl font-bold mb-2">
            <a href="{{ post.url }}" class="text-gray-900 dark:text-white hover:text-primary transition-colors">{{ post.data.title }}</a>
        </h2>
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">
            Posted on {{ post.date | date: "%B %d, %Y" }}
            {% if post.data.tags %}
            • Tagged: {% for tag in post.data.tags %}<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mx-1">{{ tag }}</span>{% endfor %}
            {% endif %}
        </p>
        {% if post.data.description %}
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">{{ post.data.description }}</p>
        {% endif %}
        <a href="{{ post.url }}" class="inline-flex items-center text-primary hover:text-primary-dark font-medium mt-3">
            Read more →
        </a>
    </article>
{% endfor %}
</div>

<!-- Pagination -->
{% if pagination.pages.length > 1 %}
<nav class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
    <div class="flex justify-center items-center space-x-2">
        {% if pagination.previousPageHref %}
        <a href="{{ pagination.previousPageHref }}" class="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
            ← Previous
        </a>
        {% endif %}

        {% for pageEntry in pagination.pages %}
        <a href="{{ pageEntry.href }}" class="px-4 py-2 text-sm font-medium {% if pageEntry.number == pagination.pageNumber %}text-white bg-primary border border-primary{% else %}text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300{% endif %} rounded-md">
            {{ pageEntry.number }}
        </a>
        {% endfor %}

        {% if pagination.nextPageHref %}
        <a href="{{ pagination.nextPageHref }}" class="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
            Next →
        </a>
        {% endif %}
    </div>
</nav>
{% endif %}
