# Lab 5 - Hello World Extension w/ Native Javascript Mouse Event Listeners
This extension demonstrates native web dev features to understand the usage of the architecture of a Chrome Extension.
For example, we are using a standard javascript file called `popup.js` that is imported by the `popup.html` page.
The event listeners are taken from native javascript eventhandlers with `.addEventListener()` that interacts
with HTML5 buttons.

This effectively demonstrates how to create a basic UI with buttons that reach to user actions when filling out
the text input fields. As well as, providing the output to the user under the popup HTML view.


# Functionality
* Change colors of the input and output boxes when hovering the mouse through javascript events


***

# Key Takeaways
* You can debug your Chrome Extension more effectively when developing it, by opening a new Chrome Browser TAB,
  and typing the following in the URL Addresss Bar | `chrome-extension://<your_extension_id/your_html_file.html>`

* When using `HTML INPUT` tags, the `innerHTML` attribute does not fill the values, instead you should try to use
  the `document.getElementById('input').value = ...`

* When setting up `Native JS Event Handlers`, try to use the global `document.addEventListener('DOMContentLoaded',()=>{})`

* Remember, using `background.js` in a Chrome Extension is different than using `popup.js`

* Remember, `browser_action` is a different page or UI experience than `page_action`, this lab is about learning how to
  control the popup.html and popup.js
