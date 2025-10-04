// eleventy.config.js
import tailwind from "eleventy-plugin-tailwindcss-4";

export default function(eleventyConfig) {
  // Add the Tailwind CSS plugin with correct path
  eleventyConfig.addPlugin(tailwind, {
    input: "src/css/style.css"
  });

  // Tell Eleventy to watch your CSS for changes
  eleventyConfig.addWatchTarget("./src/css/");

  // Configure collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").sort(function(a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  });

  // Add date formatting filter
  eleventyConfig.addFilter("date", function(date, format) {
    if (format === "%B %d, %Y") {
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(new Date(date));
    }
    return new Date(date).toLocaleDateString();
  });

  // Add striptags filter
  eleventyConfig.addFilter("striptags", function(str) {
    return str.replace(/<[^>]*>/g, '');
  });

  // Add truncate filter
  eleventyConfig.addFilter("truncate", function(str, length) {
    if (str.length <= length) return str;
    return str.substring(0, length) + '...';
  });

  // Add safe filter
  eleventyConfig.addFilter("safe", function(str) {
    return str;
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
