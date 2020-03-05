# Code Minifier - Browser

## Description

Code Minifier - Browser is an NPM package compiled with [Browserify](https://www.npmjs.com/package/browserify "Browserify") that runs in the browser to minify code. This currently supports JavaScript, HTML, and CSS. This can be useful when combined with an [ACE](https://ace.c9.io/ "ACE") editor.

## How to include:

You can include the JavaScript file by including it from your `node_modules` folder.

    <script src="node_modules/@inf3cti0n/code-minifier.browser/dist/minifier.js"></script>

## How to use:

Once you include the JavaScript file, an object named `minifier` will be created and ready to use. 

You can minify code by using `minifier.minify(code)` where `code` is your code to be minified. There will be no result if the code is unsupported. Sometimes you may get errors about the result not being a string. This has been encountered in ACE editor. You can fix that by using this:

    const e = minifier.minify(editor.getValue());
    e.hasOwnProperty("code") ? editor.setValue(e.code) : editor.setValue(e)
    
This is assuming you have your ACE editor as a value of `editor`. This may not be required, but if this package does return errors, try modifying this script to work for you, since (I think) the JavaScript Terser returns a value with a `code` property.

This project runs on [html-minifier-terser](https://www.npmjs.com/package/html-minifier-terser "html-minifier-terser"), [terser](https://www.npmjs.com/package/terser "terser"), [lang-detector](https://www.npmjs.com/package/lang-detector "lang-detector"), and [clean-css](https://www.npmjs.com/package/clean-css "clean-css"). The minifiers can be customized with the second parameter in `minify` of `options`.

Check the corresponding packages for the minification options.

This package is a test and has no warranty, as this is our first package. This may not work the entire time of usage. Please use at your own risk. You can submit issues on our GitHub issues page.

---

### Updates:

1.0.0:

Initial Release:

Initial release. Documentation coming soon with in hope of more support with other languages.

***

1.0.7

Bug Fixes

Updated file README.md.

***

1.1.2

Support Addition

Added support for CSS.

Bug Fixes

Updated file README.md.

Added support for ACE editor; check example.
