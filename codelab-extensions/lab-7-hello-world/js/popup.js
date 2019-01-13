/**
 *  This script does all the work in connecting to the IPSTACK API
 */

 document.addEventListener("DOMContentLoaded", function() {
    let status = document.getElementById("conn_status");
    if (navigator.onLine) {
        // Change Value & CSS Properties if ONLINE
        status.innerHTML = "ON";
        status.style.backgroundColor = "green";
        status.style.padding = "2px 5px 2px 5px";
        status.style.borderRadius = "5px";
        if(getInputFromSearchbar()) {
            console.log("Browser Connected...")
        }
    } else {
        // Change Value & CSS Properties if OFFLINE
        status.innerHTML = "OFF"
        status.style.backgroundColor = "red";
        status.style.padding = "2px 5px 2px 5px";
        status.style.borderRadius = "5px";
    }

    let resetButton = document.getElementById("reset-form");
    resetButton.addEventListener("click", function() {
        resetInputSearchBar();
    })
 });



 /**
  *     Helper Functions
  */
function getInputFromSearchbar() {
    let btn = document.getElementById("search-ip");
    btn.addEventListener("click", function() {
        let sv = document.getElementById("ip-search").value;
        if (sv == "" || sv == undefined || sv == null) {
            window.alert("You must provide a valid IPv4 Address");
            console.log("You must provide a valid IPv4 Address")
            return false;
        } else {
            getIPv4(sv);
            console.log("We have something: " + sv)
            return true;
        }
    })
}

function resetInputSearchBar() {
    var sv = document.getElementById("ip-search");
    sv.value = "";
}

/**
 *  IPSTACK AJAX CALLS
 */

 function getIPv4(ipv4, callback) {
     let base = "http://api.ipstack.com/";
     let key_ = "?access_key=<INSERT_YOUR_API_KEY_HERE>";
     let url  = base + ipv4 + key_;
     let http = new XMLHttpRequest();
     http.open("GET", url);
     http.onreadystatechange = function() {
         if (http.readyState === 4 && http.status === 200) {
             console.log(http.responseText);
             parseReponse(http.responseText);
         }
     }
     http.send();
 }

 function parseReponse(r) {
     // Use JSON parser
    let json = JSON.parse(r);
    for (var key in json) {
        switch(key) {
            case 'ip':
                if (json[key] === null) { json[key] = '---'; };
                document.getElementById('ipv4_value').innerHTML = json[key];
                break;
            case 'continent_name':
                if (json[key] === null) { json[key] = '---'; };
                document.getElementById('continent_value').innerHTML = json[key];
                break;
            case 'region_code':
                if (json[key] === null) { json[key] = '---'; };
                document.getElementById('region_value').innerHTML = json[key];
                break;
            case 'city':
                if (json[key] === null) { json[key] = '---'; };
                document.getElementById('city_value').innerHTML = json[key];
                break;
            case 'latitude':
                if (json[key] === null) { json[key] = '---'; };
                document.getElementById('latitude_value').innerHTML = json[key];
                break;
            case 'longitude':
                if (json[key] === null) { json[key] = '---'; };
                document.getElementById('longitude_value').innerHTML = json[key];
                break;
        }
    }
 }