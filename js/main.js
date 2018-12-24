window.onload = function () {
    // выделение активного пункта меню
    var navItem = document.querySelectorAll('.nav__item');

    navItem.forEach(function (link) {
        link.addEventListener('click', function (evt) {
            var nav = link.parentNode.children;
            for (let i = 0; i < nav.length; i++) {
                if (nav[i].classList.contains('nav__item_active')) {
                    nav[i].classList.remove('nav__item_active');
                }
                
            }
            link.classList.add('nav__item_active'); 
        });
    });

    // открытие/закрытие бокового меню
    var burger = document.querySelector('.header__logo');
    var nav = document.querySelector('.nav');
    var content = document.querySelector('.content');
    var footer = document.querySelector('.footer');

    burger.addEventListener('click', function () {
        nav.classList.toggle('nav_closed');
        content.classList.toggle('content_size_full');
        footer.classList.toggle('footer_size_full');
    });

    // изменения стиля элемента "preview" с помощью range слайдера
    var target = document.querySelector('.preview-border__target');
    var allCorners = document.querySelector('.settings-border__border-all-slider');


    var allCount = document.querySelector('.settings-border__border-all-count');


    allCorners.addEventListener('input', function () {
        allCount.value = allCorners.value + 'px';
        target.style.borderRadius = `${allCount.value}`;
    });

    allCorners.addEventListener('input', changeCorner(allCorners, allCount, target));
    

    function changeCorner(slider, counter, target) {
        counter.value = slider.value + 'px';
        target.style.borderRadius = `${counter.value}`;


    }
    
}







    // var file = document.querySelector('.file');
    // var borderCode = document.querySelector('.border__code');

    // console.dir(file);

    // file.addEventListener('change', function () {
    //     borderCode.style.background = `url('${file.files[0].name}')`;
    //     console.log(`url('${file.webkitRelativePath}')`);
    // });