const button = document.getElementById('button');
const popup = document.getElementById('popup');

button.onclick = function() {
    popup.style.display = 'block';
    button.style.display = 'none';
};

function closePopup() {
    popup.style.display = 'none';
    button.style.display = 'block';
}