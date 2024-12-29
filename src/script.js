const button = document.getElementById('button');
const popup = document.getElementById('popup');

button.onclick = function() {
    popup.showModal();
    button.style.display = 'none';
};

function closePopup() {
    popup.close();
    button.style.display = 'block';
}

