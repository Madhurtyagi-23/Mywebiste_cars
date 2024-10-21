// Popup functionality
document.getElementById('sellCar').onclick = function() {
    document.getElementById('popup').style.display = 'block';
}

document.getElementById('closePopup').onclick = function() {
    document.getElementById('popup').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
}