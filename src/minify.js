module.exports = {
    minify: function(code, options = {removeAttributeQuotes: true, removeOptionalTags: true, collapseBooleanAttributes: true, collapseInlineTagWhitespace: true, collapseWhitespace: true, continueOnParseError: true, decodeEntities: true, minifyCSS: true, minifyJS: true, removeComments: true, quoteCharacter: "\"", removeEmptyAttributes: true, useShortDoctype: true, sortAttributes: true, sortClassName: true, removeScriptTypeAttributes: true, removeStyleLinkTypeAttributes: true, removeRedundantAttributes: true}) {
        const detect = require("lang-detector");
        const JavaScriptTerser = require("terser");
        const HTMLTerser = require("html-minifier-terser");
        switch (detect(code)) {
            case "JavaScript":
                return JavaScriptTerser.minify(code);
            case "HTML":
                return HTMLTerser.minify(code, options);
        }
    }
};
