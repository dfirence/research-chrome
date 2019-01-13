# Lab 7- Hello World Extension w/ AJAX Call to a REST API
This is a custom extension from the ground up.  The extension takes an IPv4 address as input an creates a request via AJAX to ipstack.com.
This is also intended to show how to parse a response from an AJAX Call in JSON Format.  Note, this should not be used in production.

# Functionality
* The extension should detect when the navigator object has connectivity or when it is lost
* The extension should take input from the user, and with a search button, it should query the target REST API
* The extension should parse the REST API response as a JSON object and auto populate the fields in the response
* The extension should reset the user input with the click of a button
* The extension should account for `null` responses in API response and display the string '---' as its value

# Requirements
* To get this extension working you will need to signup and obtain a free API Key
* Once you have the API_KEY, paste it in the 'js/popup.js' `getIPv4()` function

***

# Key Takeaways
* AJAX Calls are confusing, however, once you read the book: Javascript - The Definitive Guide, you know AJAX in depth
* AJAX Calls can be run in both - async & sync mode.  However, async for extensions is better to ensure code is not-blocking the user
* Detecting when the system has lost connectivity and while using the browser is tricky, for example, it should not be only based on the `navigator` object which is Boolean
  There are several things that can happen while the AJAX Request is fetching results.  Therefore, it is better to write a solid connectivity detection script with a mix of
  js events: an example from Google:  http://html5-demos.appspot.com/static/navigator.onLine.html
