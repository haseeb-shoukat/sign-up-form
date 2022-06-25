const input = document.querySelectorAll("input");
input.forEach(e => e.addEventListener('invalid', changeOutline));
function changeOutline(e) {
    this.style.outlineColor = "#d61616";
}

