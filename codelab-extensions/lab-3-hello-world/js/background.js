//-------------------------------------------------------
//  Chrome Background Script
//
//  Remember:  Architecture Overview
//      - `background` is run something in the background
//      - typically you put event handlers
//      - We can use this for a badge
//-------------------------------------------------------

// Badges are used under the `browser_action` page
// Set the Text of the badge with: .setBadgeText({text: <mystring>})
chrome.browserAction.setBadgeText({text: '0x42'})

// Set the Color of the Text with. .setBadgeBackgroundColos({color: <color_hex>})
chrome.browserAction.setBadgeBackgroundColor({color: "#f44242"})