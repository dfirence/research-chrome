# Lab 3 - Hello World Extension w/ Badge & BackgroundPage
This extension uses the `badge` ui feature of the `browser_action` api. To implement a badge, we will need to register the `background` key in the manifest, and create a `background_script`


# Functionality
* Custom `badge` of the browser_action api: `0x42`
***

# Key Takeaways
* The `badge` is limited to 4 characters that will appear slightly next to the icon 16x16

* Try to use the `background` key in the manifest and create a `background_script` that would use the `chrome.browserAction` api methods like below.

* Set the text by using the `browserAction.setBadgeText` api method

* Set the color by using the `browserAction.setBadgeBackgroundColor` api method

* Badges are limited to 4 characters, so be extra mindful in your design

* Badges should be useful when used with a listener or event handlers that are monitoring a particular conditions.  Look at the gmail inbox extensions that tell the user when they have inbound emails and what volume with a badge.