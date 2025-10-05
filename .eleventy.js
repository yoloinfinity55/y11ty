import pluginTailwind from "eleventy-plugin-tailwindcss-4";

export default function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginTailwind, {
    src: "src",
    input: "assets/css/tailwind.css"
  });

  // Date filter
  eleventyConfig.addFilter("date", (dateObj, format) => {
    const date = new Date(dateObj);
    if (format === 'YYYY-MM-DD') {
      return date.toISOString().split('T')[0];
    }
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  });

  // Strip HTML tags filter
  eleventyConfig.addFilter("striptags", (str) => {
    if (!str) return '';
    return str.replace(/<[^>]*>/g, '');
  });

  // Truncate filter
  eleventyConfig.addFilter("truncate", (str, length = 150) => {
    if (!str) return '';
    if (str.length <= length) return str;
    return str.substring(0, length).trim() + '...';
  });

  // Copy assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Watch targets
  eleventyConfig.addWatchTarget("./src/assets/**/*.{css,js}");

  // Layout aliases
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

  // Collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}