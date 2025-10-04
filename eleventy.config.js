// eleventy.config.js
import { configurePlugins } from "./src/config/plugins.js";
import { configureCollections } from "./src/config/collections.js";
import { configureFilters } from "./src/config/filters.js";

export default function(eleventyConfig) {
  // Configure plugins
  configurePlugins(eleventyConfig);

  // Configure collections
  configureCollections(eleventyConfig);

  // Configure filters
  configureFilters(eleventyConfig);

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}
