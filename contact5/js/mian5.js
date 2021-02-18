function $(element) {
    return document.querySelector(element);
}
function x(element) {
    return document.querySelectorAll(element);
}

let btnElement = $('.menu');
let modalElement = $('.modall');

btnElement.onclick = function() {
    modalElement.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modalElement) {
      modalElement.style.display = "none";
    }
  }