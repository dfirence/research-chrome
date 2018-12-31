# Lab 4 - Hello World Extension w/ TABS API
This extension uses the Chrome TABS API to demonstrate its usage


# Functionality
The extension is intended to do a few things with tabs.

* Allow the extension to  find inactive tabs and present the number of tabs opened under the badge

***

# Key Takeaways
* The `chrome.tabs.query` requires a javascript object that is passed with API spec parameters
* The results from the query return an array
* Remember the event handlers in the background page are set as synchronous calls