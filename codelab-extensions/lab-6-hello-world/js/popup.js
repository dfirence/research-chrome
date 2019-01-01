/**
 * This is not a background script.
 *  This is a regular javascript used in the `popup.html` web page
 *  This allows us to read the DOM elements in the `popup.html` web page
 */

document.addEventListener('DOMContentLoaded', function() {
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let user_output = document.getElementById('user-output');

    if (firstName.value === "" && lastName.value === "") {
        console.log("Nothing is typed, yet...")
        // Now auto fill a value in the firstName
        firstName.value = "john";
        lastName.value = "doe";
    }

    // Use Output Box
    // Let's auto fill the results from the input boxes
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
    /**
     * Section below is for all Mouse Events
     * We want to add more event listeners but this time we want to style
     * elements of the popup.html
     */

     // --------------------------------------------------------------------
     // CHANGE COLOR:  firstName | BLUE
     // --------------------------------------------------------------------
     firstName.addEventListener('mouseover', function() {
         if (firstName.value != "") {
             let style = firstName.style;
             style.color = "blue";
         }
     });

     firstName.addEventListener('mouseout', function() {
        if (firstName != "") {
            let style = firstName.style;
            style.color = "black"
        }      
    })
    // --------------------------------------------------------------------
    // CHANGE COLOR:  lastName | RED
    // --------------------------------------------------------------------
    lastName.addEventListener('mouseover', function() {
        if (lastName.value != "") {
            let style = lastName.style;
            style.color = "red";
        }
    });

    lastName.addEventListener('mouseout', function() {
        if (lastName.value != "") {
            let style = lastName.style;
            style.color = "black";
        }
    });
    // --------------------------------------------------------------------
    // CHANGE COLOR:  UserOutput | BLACK OVER YELLOW
    // --------------------------------------------------------------------
    user_output.addEventListener('mouseover', function() {
        if (user_output.value != "") {
            let style = user_output.style;
            style.color = "yellow";
            style.backgroundColor = "black"
        }
    });
    user_output.addEventListener('mouseout', function() {
        if (user_output.value != "") {
            let style = user_output.style;
            style.color = "black";
            style.backgroundColor = ""
        }
    }); 
})


