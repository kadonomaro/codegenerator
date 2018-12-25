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
    var codeBorder = document.querySelector('.code-border');
    var codeCopyButton = document.querySelector('.code-border__copy');

    var allCorners = document.querySelector('.settings-border__border-all-slider');
    var topLeftCorner = document.querySelector('.settings-border__border-top-left-slider');
    var topRightCorner = document.querySelector('.settings-border__border-top-right-slider');
    var bottomLeftCorner = document.querySelector('.settings-border__border-bottom-left-slider');
    var bottomRightCorner = document.querySelector('.settings-border__border-bottom-right-slider');
    var borderWidth = document.querySelector('.settings-border__border-width-slider');

    var allCount = document.querySelector('.settings-border__border-all-count');
    var topLeftCount = document.querySelector('.settings-border__border-top-left-count');
    var topRightCount = document.querySelector('.settings-border__border-top-right-count');
    var bottomLeftCount = document.querySelector('.settings-border__border-bottom-left-count');
    var bottomRightCount = document.querySelector('.settings-border__border-bottom-right-count');
    var borderWidthCount = document.querySelector('.settings-border__border-width-count');
    var textArea = document.getElementsByTagName('textarea');
    
    allCorners.addEventListener('input', function () {
        allCount.value = allCorners.value + 'px';
        target.style.borderRadius = `${allCount.value}`;
        codeBorder.value = target.style.cssText;
        codeReplace(codeBorder);
    });

    topLeftCorner.addEventListener('input', function () {
        topLeftCount.value = topLeftCorner.value + 'px';
        target.style.borderTopLeftRadius = `${topLeftCount.value}`;
        codeBorder.value = target.style.cssText;
        codeReplace(codeBorder);
    });

    topRightCorner.addEventListener('input', function () {
        topRightCount.value = topRightCorner.value + 'px';
        target.style.borderTopRightRadius = `${topRightCount.value}`;
        codeBorder.value = target.style.cssText;
        codeReplace(codeBorder);
    });
    
    bottomLeftCorner.addEventListener('input', function () {
        bottomLeftCount.value = bottomLeftCorner.value + 'px';
        target.style.borderBottomLeftRadius = `${bottomLeftCount.value}`;
        codeBorder.value = target.style.cssText;
        codeReplace(codeBorder);
    });

    bottomRightCorner.addEventListener('input', function () {
        bottomRightCount.value = bottomRightCorner.value + 'px';
        target.style.borderBottomRightRadius = `${bottomRightCount.value}`;
        codeBorder.value = target.style.cssText;
        codeReplace(codeBorder);
    });

    borderWidth.addEventListener('input', function () {
        borderWidthCount.value = borderWidth.value + 'px';
        target.style.borderWidth = `${borderWidth.value}px`;
        codeBorder.value = target.style.cssText;
        codeReplace(codeBorder);
    });

    codeCopyButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        codeBorder.select();
        document.execCommand('copy');
        
    });
   
    function codeReplace(string) {
        string.value = string.value.replace(/;\s/g, ";\n");
    }


}







    // var file = document.querySelector('.file');
    // var borderCode = document.querySelector('.border__code');

    // console.dir(file);

    // file.addEventListener('change', function () {
    //     borderCode.style.background = `url('${file.files[0].name}')`;
    //     console.log(`url('${file.webkitRelativePath}')`);
    // });