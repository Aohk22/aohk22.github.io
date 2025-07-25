import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
	eleventyConfig.addLayoutAlias("base", "base.njk");
	eleventyConfig.addLayoutAlias("post_layout", "post_layout.njk");

    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("favicon.ico");

    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        formats: ["png"],
        widths: ["auto"],
        htmlOptions: {
            imgAttributes: {
                loading: "lazy",
                decoding: "async",
                alt: "",
            },
            pictureAttributes: {}
        },
    });

    eleventyConfig.addFilter("getParentDir", function (val) {
        const val_arr = val.split('/')
        return val_arr.slice(0, val_arr.length-1).join('/');
    });
};

export const config = {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
        input: "views",
        // relative to views folder
        includes: "includes",
        layouts: "layout",

        // in project root
        output: "dist"
    }
}
