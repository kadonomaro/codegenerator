var pixel = document.querySelector('.pixel');
var pixelDrag = document.querySelector('.pixel__head');

var pixelHeight = pixelDrag.getBoundingClientRect().height;
var pixelWidth = pixelDrag.getBoundingClientRect().width;

var isDrag = false;


pixelDrag.addEventListener('mousedown', function () {
    drag = true;
});

pixelDrag.addEventListener('mousemove', function (evt) {
    if (drag) {
        pixel.style.top = (evt.clientY +  - (pixelHeight / 2)) + "px";
        pixel.style.left = (evt.clientX + - (pixelWidth / 2)) + "px";
    }
});

pixelDrag.addEventListener('mouseleave', function () {
    drag = false;
});

pixelDrag.addEventListener('mouseup', function () {
    drag = false;
});