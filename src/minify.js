module.exports = {
    minify: function(code, options) {
        const Detector = require("lang-detector");
        const JS = require("terser");
        const HTML = require("html-minifier-terser");
        const CSS = require("clean-css");
        switch (Detector(code)) {
            case "JavaScript":
                if (typeof options == "undefined") {
                    options = {};
                }
                return JS.minify(code, options)[Object.keys(JS.minify(code, options))[0]];
            case "HTML":
                if (typeof options == "undefined") {
                    options = {removeAttributeQuotes: true, removeOptionalTags: true, collapseBooleanAttributes: true, collapseInlineTagWhitespace: true, collapseWhitespace: true, continueOnParseError: true, decodeEntities: true, minifyCSS: true, minifyJS: true, removeComments: true, quoteCharacter: "\"", removeEmptyAttributes: true, useShortDoctype: true, sortAttributes: true, sortClassName: true, removeScriptTypeAttributes: true, removeStyleLinkTypeAttributes: true, removeRedundantAttributes: true};
                }
                return HTML.minify(code, options);
            case "CSS":
                if (typeof options == "undefined") {
                    options = "";
                }
                return new CSS(options).minify(code)[Object.keys(new CSS(options).minify(code))[0]];
            default:
                return code;
        }
    }
};
