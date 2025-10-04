// Configure collections
export function configureCollections(eleventyConfig) {
  // Configure posts collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").sort(function(a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  });

  // Configure paginated posts collection
  eleventyConfig.addCollection("pagedPosts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").sort(function(a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  });
}
