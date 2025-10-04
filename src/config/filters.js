// Configure filters
export function configureFilters(eleventyConfig) {
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

  // Add ISO date filter for meta tags
  eleventyConfig.addFilter("isoDate", function(date) {
    return new Date(date).toISOString();
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

  // Add limit filter for recent posts
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });
}
