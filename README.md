# Code Minifier - Browser

## Description

Code Minifier - Browser is an NPM package compiled with [Browserify](https://www.npmjs.com/package/browserify "Browserify") that runs in the browser to minify code. This currently supports JavaScript and HTML. This can be useful when combined with an [ACE](https://ace.c9.io/ "ACE") editor.

## How to include:

You can include the JavaScript file by including it from your `node_modules` folder.

    <script src="node_modules/@inf3cti0n/code-minifier.browser/dist/minifier.js"></script>

## How to use:

Once you include the JavaScript file, an object named `minifier` will be created and ready to use. 

You can minify code by using `minifier.minify(code)` where `code` is your code to be minified. There will be no result if the code is unsupported.

This project runs on [html-minifier-terser](https://www.npmjs.com/package/html-minifier-terser "html-minifier-terser"), [terser](https://www.npmjs.com/package/terser "terser"), and [lang-detector](https://www.npmjs.com/package/lang-detector "lang-detector"). The HTML minifier can be customized with the second parameter in `minify` of `options`.

Check the [html-minifier-terser](https://www.npmjs.com/package/html-minifier-terser "html-minifier-terser") package for compatible customizations. Terser customization options will be coming in a later update.

This package is a test and has no warranty. This may not work the entire time of usage. Please use at your own risk.

---

### Updates:

1.0.0:

Initial Release:

Initial release. Documentation coming soon with in hope of more support with other languages.

***

1.0.7

Bug fixes

Updated file README.md.
