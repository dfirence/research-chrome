/**
 * This is not a background script.
 *  This is a regular javascript used in the `popup.html` web page
 *  This allows us to read the DOM elements in the `popup.html` web page
 */

document.addEventListener('DOMContentLoaded', function() {
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    
    if (firstName.value === "" && lastName.value === "") {
        console.log("Nothing is typed, yet...")
        // Now auto fill a value in the firstName
        firstName.value = "john";
        lastName.value = "doe";
    }

    // Use Output Box
    // Let's auto fill the results from the input boxes
    let user_output = document.getElementById('user-output');
    user_output.innerHTML = firstName.value + " " + lastName.value;

    // Add a Click Event Listener
    // This binds it to the reset button in the `poopup.html` webpage
    let reset_button = document.getElementById('reset');

    reset_button.addEventListener('click', function() {
        firstName.value = '';
        lastName.value = '';
        user_output.innerHTML = '';
        console.log('Cleared Fields');
    })

    // Add a Click Event Listeners
    // This binds it to the uppercase button in the `popup.html` webpage
    let uppercase_button = document.getElementById('uppercase');

    uppercase_button.addEventListener('click', function() {
        if (firstName.value != "") {
            firstName.value = firstName.value.toUpperCase();
        }

        if (lastName.value != "") {
            lastName.value = lastName.value.toUpperCase();
        }
        user_output.innerHTML = firstName.value + " " + lastName.value;
    })

    // Add a Click Event Listener
    // This binds it to the reverse button in the `popup.html` webpage
    let reverse_button = document.getElementById('reverse');
    reverse_button.addEventListener('click', function() {
        if (firstName.value != "") {
            let rv = firstName.value.split('').reverse();
            firstName.value = rv.join('');
        }

        if (lastName.value != "") {
            let rv = lastName.value.split('').reverse();
            lastName.value = rv.join('');
        }
        user_output.innerHTML = firstName.value + " " + lastName.value;
    })

})


