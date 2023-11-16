document.getElementById('popupButton').onclick = function() {
    document.getElementById('popupContainer').style.display = 'block';
}

document.getElementById('closeButton').onclick = function() {
    document.getElementById('popupContainer').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === document.getElementById('popupContainer')) {
        document.getElementById('popupContainer').style.display = 'none';
    }
}
