# Lab 1 - Hello World Extension w/ POPUP

This extension covers the installation and structure of a chrome-extension project.

# Functionality
It serves a popup html UI with 'HELLO WORLD' and demonstrates:
* how to use relative imports
* how to import the CSS
* how to import the popup.html
* how to insert hyperlink with target="_blank" and leads to new tab to this repo
***
# Key Takeaways
* The manifest file `browser_action` allows for user to click on the extension icon and results in a minified UI built with html + css

* The popup behavior when hovering the mouse over the browser extension icon shows the `name` of the extension defined in the `manifest.json` file

* You can override the `name` in the manifest with a custom string under the `browser_action` key with a subkey labeled as: `default_title`

* You have to refresh the extension to see the custom `default_title` value show up as a tooltip

* You can customize the size of the popup by using native CSS `height` and `width` attributes in the structure of the html page: `popoup.html`