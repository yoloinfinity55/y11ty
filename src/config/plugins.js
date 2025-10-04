// Configure plugins
import tailwind from "eleventy-plugin-tailwindcss-4";

export function configurePlugins(eleventyConfig) {
  // Add the Tailwind CSS plugin
  eleventyConfig.addPlugin(tailwind, {
    input: "assets/css/main.css",
    output: "assets/css/main.css"
  });

  // Tell Eleventy to watch your assets for changes
  eleventyConfig.addWatchTarget("./src/assets/");
}
