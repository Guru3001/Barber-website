const container = document.getElementById('js-container');
const highlight = document.getElementById('js-highlight');
var containerHeight;

window.onscroll = function() {
    containerHeight = container.offsetHeight - window.innerHeight;
    containerPos = container.getBoundingClientRect();
    diff = containerHeight + containerPos.top;
    progressP = diff / containerHeight * 100;
    cssWidth = Math.floor(100 - progressP);
    highlight.style.width = cssWidth + "%";
}