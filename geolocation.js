function getGeoPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showMyPosition, showError);
    }
}
    
function showMyPosition(myPos) {
    let myP = document.getElementById("position");
    myP.innerHTML = "Breite: " + myPos.coords.latitude + "<br>Länge :" + myPos.coords.longitude;
}

function showError(error) {
    let myP = document.getElementById("position");
    if (error.PERMISSION_DENIED) {
        myP.innerHTML = "Der Zugriff auf Ihre Position wurde verweigert!"
    }
    else if (error.POSITION_UNAVAILABLE) {
        myP.innerHTML = "Es sind keine Geopositionsdaten vorhanden."
    }
    else if (error.TIMEOUT) {
        myP.innerHTML = "Timeout bei der Ortsanfrage wurde ausgelöst."
    }
    else {
        myP.innerHTML = "Ein unbekannter Fehler ist aufgetreten";
    }
}