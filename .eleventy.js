const fg = require('fast-glob');
const Image = require("@11ty/eleventy-img")
const now = String(Date.now())

async function imageShortcode(src, alt, sizes = "100vw") {
  let metadata = await Image(`images/${src}`, {
    widths: [30, 300, 600, 1200, 1600],
    formats: ["avif", "jpeg"],
    urlPath: "/images/",
    outputDir: "./_site/images/"
  });
  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  return Image.generateHTML(metadata, imageAttributes);
}

const version31 = fg.sync(['**/version-3-1/*', '!**/_site']);
const version32 = fg.sync(['**/version-3-2/*', '!**/_site']);
const version33 = fg.sync(['**/version-3-3/*', '!**/_site']);
const version331 = fg.sync(['**/version-3-3-1/*', '!**/_site']);
const version34 = fg.sync(['**/version-3-4/*', '!**/_site']);
const version341 = fg.sync(['**/version-3-4-1/*', '!**/_site']);

//Create collections so you can access the data in your templates
module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget('./_tmp/style.css')
  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })
  eleventyConfig.addPassthroughCopy({ './node_modules/alpinejs/dist/alpine.js': './js/alpine.js' })

  eleventyConfig.addShortcode('version', function () {
    return now
  })
  
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode)

  eleventyConfig.addPassthroughCopy("icons")
  eleventyConfig.addPassthroughCopy("fonts")
  eleventyConfig.addPassthroughCopy("images")
  eleventyConfig.addPassthroughCopy("majesticons-v2-free.zip")

  eleventyConfig.addCollection('version31', function(collection) {return version31;});
  eleventyConfig.addCollection('version32', function(collection) {return version32;});
  eleventyConfig.addCollection('version33', function(collection) {return version33;});
  eleventyConfig.addCollection('version331', function(collection) {return version331;});
  eleventyConfig.addCollection('version34', function(collection) {return version34;});
  eleventyConfig.addCollection('version341', function(collection) {return version341;});

  return {
    htmlTemplateEngine: "njk",
  };
};