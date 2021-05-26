const fg = require('fast-glob');
const Image = require("@11ty/eleventy-img")
const sharp = require("sharp")
const now = String(Date.now())

async function imageShortcode(src, alt, sizes = "100vw") {
  let metadata = await Image(`./images/${src}.png`, {
    widths: [24],
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

// Run search for images in /gallery and /sponsors
const iconImages = fg.sync(['icons/*', '!**/_site']);

//Create collections so you can access the data in your templates
module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget('./_tmp/style.css')
  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })

  eleventyConfig.addShortcode('version', function () {
    return now
  })
  
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode)

  eleventyConfig.addPassthroughCopy("icons")
  eleventyConfig.addPassthroughCopy("fonts")
  eleventyConfig.addPassthroughCopy("images")
  eleventyConfig.addPassthroughCopy("majesticons-v2-free.zip")

  //Create collection of gallery images
  eleventyConfig.addCollection('icons', function(collection) {
    return iconImages;
  });

  return {
    htmlTemplateEngine: "njk",
  };
};