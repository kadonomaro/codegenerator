var pixel = document.querySelector('.pixel');
var pixelDrag = document.querySelector('.pixel__head');
var pixelFile = document.querySelector('.pixel__file');
var pixelImg = document.querySelector('.pixel__img');
var pixelClose = document.querySelector('.pixel__close');

var pixelHeight = pixelDrag.getBoundingClientRect().height;
var pixelWidth = pixelDrag.getBoundingClientRect().width;

var isDrag = false;

pixelClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    pixel.classList.add('pixel_hidden');
});

pixelDrag.addEventListener('mousedown', function () {
    isDrag = true;
});

pixelDrag.addEventListener('mousemove', function (evt) {
    if (isDrag) {
        pixel.style.top = (evt.clientY +  - (pixelHeight / 2)) + "px";
        pixel.style.left = (evt.clientX + - (pixelWidth / 2)) + "px";
    }
});

pixelDrag.addEventListener('mouseleave', function () {
    isDrag = false;
});

pixelDrag.addEventListener('mouseup', function () {
    isDrag = false;
});

pixelFile.addEventListener('change', function () {
    var fileUrl = "easy-pixel/img/" + pixelFile.files[0].name;
    pixelImg.setAttribute('src',fileUrl)
});

    // var file = document.querySelector('.file');
    // var borderCode = document.querySelector('.border__code');

    // console.dir(file);

    // file.addEventListener('change', function () {
    //     borderCode.style.background = `url('${file.files[0].name}')`;
    //     console.log(`url('${file.webkitRelativePath}')`);
    // });