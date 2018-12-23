# Chrome Specification
This repo section is to document my findings and
familiarization with the Chrome Architecture, or
its API documentation provided by Google.

I like documenting code snippets in native `.js`
extension while I am working from an IDE.


***
NOTE:  
    These scripts are just for visual purpose
    They do not work or are not for usage.
***

# Google Resources:  References for Google Chrome
| Resource | URL         |
|----------|-------------|
| Chrome Main | https://developer.chrome.com/extensions|
| Chrome APIs | https://developer.chrome.com/extensions/api_index|
| Extension Architecture |https://developer.chrome.com/extensions/overview#arch|
| Extension UI Concepts |https://developer.chrome.com/extensions/user_interface|
| Background Scripts | https://developer.chrome.com/extensions/background_pages|
| Content Scripts | https://developer.chrome.com/extensions/content_scripts|

***

# Chrome Extension: Architecture Overview

## Manifest
The manifest is the `entry-point` to the extension. All of the JSON keys are
based on the specification from Google Chrome.

## UI - User Interface 
The UI relies on standard web technologies (i.e., HTML + CSS + JS).
There are 3 types of pages used by Chrome Extensions:

* BrowserPage:     These use the `chrome.browserAction` api

* ActionPage:      These use the `chrome.pageAction` api

* OptionsPage:     These are the `settings` of `options` view for a user to configure

Since the chrome extensions are driven through web dev technologies, understanding the usage of each page type is critical to design a good
chrome extension.

## Background Script
The background script is very important to chrome extensions.  These scripts are the `event_handlers`. The `chrome.runtime` api is commonly used to add/remove `listeners`. 

One example could be, imagine an extension uses a background script to download tweets for you.

## Content Script
The content script(s) execute on the target webpage that has been loaded in the
browser.  These are commonly used by extensions when they need to `read/write` data from the loaded webpage.

***