// Create a function that queries and shows the number of tabs
function queryAndShow() {
    var tabNum = 0;
    var query = { active: false };
    chrome.tabs.query(query, function(tabs) {
        if (tabs) {
            tabNum = String(tabs.length);
            chrome.browserAction.setBadgeText({text: String(tabNum)});
            chrome.browserAction.setBadgeBackgroundColor({color: "#f44242"})
        } 
;
    });
}

// Create a listener for when extension is installed
chrome.runtime.onInstalled.addListener(function() {
    queryAndShow();
});

// Create a listener for when a TAB is created
// This should allow it to update after it is created
chrome.tabs.onCreated.addListener(function() {
    queryAndShow();
});

// Create a listener for when a TAB is closed
chrome.tabs.onRemoved.addListener(function() {
    queryAndShow();
});
