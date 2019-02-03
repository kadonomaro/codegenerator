
window.addEventListener('load', function () {
    // выделение активного пункта меню
    let navList = document.querySelector('.nav__list');
    let content = document.querySelector('.content');

    window.addEventListener('scroll', function () {
        for (let i = 0; i < content.children.length; i++) {
            if (window.pageYOffset >= (content.children[i].offsetTop - 200)) {
                navList.children[i].classList.add('nav__item_active');
                if (navList.children[i].previousElementSibling !== null) {
                    navList.children[i].previousElementSibling.classList.remove('nav__item_active');
                }
            } else if (navList.children[i].classList.contains('nav__item_active')) {
                navList.children[i].classList.remove('nav__item_active');
            }
        }
    });
    

    // открытие/закрытие бокового меню
    var burger = document.querySelector('.header__logo');
    var nav = document.querySelector('.nav');
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
    var borderStyle = document.querySelector('.settings-border__border-style');

    var allCount = document.querySelector('.settings-border__border-all-count');
    var topLeftCount = document.querySelector('.settings-border__border-top-left-count');
    var topRightCount = document.querySelector('.settings-border__border-top-right-count');
    var bottomLeftCount = document.querySelector('.settings-border__border-bottom-left-count');
    var bottomRightCount = document.querySelector('.settings-border__border-bottom-right-count');
    var borderWidthCount = document.querySelector('.settings-border__border-width-count');

    allCorners.addEventListener('input', function () {
        allCount.value = allCorners.value + 'px';
        target.style.borderRadius = '' + allCount.value;
        codeBorder.value = target.style.cssText;
        codeReplace(codeBorder);
    });

    topLeftCorner.addEventListener('input', function () {
        topLeftCount.value = topLeftCorner.value + 'px';
        target.style.borderTopLeftRadius = '' + topLeftCount.value;
        codeBorder.value = target.style.cssText;
        codeReplace(codeBorder);
    });

    topRightCorner.addEventListener('input', function () {
        topRightCount.value = topRightCorner.value + 'px';
        target.style.borderTopRightRadius = '' + topRightCount.value;
        codeBorder.value = target.style.cssText;
        codeReplace(codeBorder);
    });

    bottomLeftCorner.addEventListener('input', function () {
        bottomLeftCount.value = bottomLeftCorner.value + 'px';
        target.style.borderBottomLeftRadius = '' + bottomLeftCount.value;
        codeBorder.value = target.style.cssText;
        codeReplace(codeBorder);
    });

    bottomRightCorner.addEventListener('input', function () {
        bottomRightCount.value = bottomRightCorner.value + 'px';
        target.style.borderBottomRightRadius = '' + bottomRightCount.value;
        codeBorder.value = target.style.cssText;
        codeReplace(codeBorder);
    });

    borderWidth.addEventListener('input', function () {
        borderWidthCount.value = borderWidth.value + 'px';
        target.style.border = borderWidth.value + 'px ' + borderStyle.value + ' black';
        codeBorder.value = target.style.cssText;
        codeReplace(codeBorder);
    });

    borderStyle.addEventListener('change', function () {
        target.style.border = borderWidth.value + 'px ' + borderStyle.value + ' black';
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

    //изменения стиля box-shadow 
    var targetShadow = document.querySelector('.preview-shadow__target');
    var codeShadow = document.querySelector('.code-shadow');
    var codeCopyButtonShadow = document.querySelector('.code-shadow__copy');
    var insetCheckbox = document.querySelector('.settings-shadow__inset');

    var inset = false;
    var insetText = "";

    var shiftXSlider = document.querySelector('.settings-shadow__shift-x-slider');
    var shiftYSlider = document.querySelector('.settings-shadow__shift-y-slider');
    var shiftBlurSlider = document.querySelector('.settings-shadow__blur-slider');
    var shiftSpreadSlider = document.querySelector('.settings-shadow__spread-slider');
    var opacitySlider = document.querySelector('.settings-shadow__opacity-slider');

    var shiftXCount = document.querySelector('.settings-shadow__shift-x-count');
    var shiftYCount = document.querySelector('.settings-shadow__shift-y-count');
    var shiftBlurCount = document.querySelector('.settings-shadow__blur-count');
    var shiftSpreadCount = document.querySelector('.settings-shadow__spread-count');
    var opacityCount = document.querySelector('.settings-shadow__opacity-count');

    shiftXSlider.addEventListener('input', function () {
        shiftXCount.value = shiftXSlider.value + "px";
        targetShadow.style.boxShadow = insetText + ' ' + shiftXSlider.value + 'px ' + shiftYSlider.value + 'px ' + shiftBlurSlider.value + 'px ' + shiftSpreadSlider.value + 'px rgba(0, 0, 0, ' + opacitySlider.value + ')';
        codeShadow.value = targetShadow.style.cssText;
    });

    shiftYSlider.addEventListener('input', function () {
        shiftYCount.value = shiftYSlider.value + "px";
        targetShadow.style.boxShadow = insetText + ' ' + shiftXSlider.value + 'px ' + shiftYSlider.value + 'px ' + shiftBlurSlider.value + 'px ' + shiftSpreadSlider.value + 'px rgba(0, 0, 0, ' + opacitySlider.value + ')';
        codeShadow.value = targetShadow.style.cssText;
    });

    shiftBlurSlider.addEventListener('input', function () {
        shiftBlurCount.value = shiftBlurSlider.value + "px";
        targetShadow.style.boxShadow = insetText + ' ' + shiftXSlider.value + 'px ' + shiftYSlider.value + 'px ' + shiftBlurSlider.value + 'px ' + shiftSpreadSlider.value + 'px rgba(0, 0, 0, ' + opacitySlider.value + ')';
        codeShadow.value = targetShadow.style.cssText;
    });

    shiftSpreadSlider.addEventListener('input', function () {
        shiftSpreadCount.value = shiftSpreadSlider.value + "px";
        targetShadow.style.boxShadow = insetText + ' ' + shiftXSlider.value + 'px ' + shiftYSlider.value + 'px ' + shiftBlurSlider.value + 'px ' + shiftSpreadSlider.value + 'px rgba(0, 0, 0, ' + opacitySlider.value + ')';
        codeShadow.value = targetShadow.style.cssText;
    });

    opacitySlider.addEventListener('input', function () {
        opacityCount.value = opacitySlider.value;
        targetShadow.style.boxShadow = insetText + ' ' + shiftXSlider.value + 'px ' + shiftYSlider.value + 'px ' + shiftBlurSlider.value + 'px ' + shiftSpreadSlider.value + 'px rgba(0, 0, 0, ' + opacitySlider.value + ')';
        codeShadow.value = targetShadow.style.cssText;
    });

    insetCheckbox.addEventListener('click', function () {
        inset = !inset;

        if (inset) {
            insetText = "inset";
        } else {
            insetText = "";
        }

        insetCheckbox.classList.toggle('settings-shadow__inset_checked');
        targetShadow.style.boxShadow = insetText + ' ' + shiftXSlider.value + 'px ' + shiftYSlider.value + 'px ' + shiftBlurSlider.value + 'px ' + shiftSpreadSlider.value + 'px rgba(0, 0, 0, ' + opacitySlider.value + ')';
        codeShadow.value = targetShadow.style.cssText;
    });

    codeCopyButtonShadow.addEventListener('click', function (evt) {
        evt.preventDefault();
        codeShadow.select();
        document.execCommand('copy');
    });

    var targetTransition = document.querySelector('.preview-transition__target');
    var codeTransition = document.querySelector('.code-transition');
    var copyCodeTransition = document.querySelector('.code-transition__copy');

    var durationTransition = document.querySelector('.settings-transition__duration');
    var delayTransition = document.querySelector('.settings-transition__delay');
    var timingTransition = document.querySelector('.settings-transition__timing');

    var bezierSetTransition = document.querySelector('.settings-transition__bezier-set');
    var bezierTransition = document.querySelector('.settings-transition__bezier');

    targetTransition.addEventListener('click', function () {
        targetTransition.classList.toggle('preview-transition__target_anim_active');
    });

    bezierTransition.addEventListener('input', function () {
        targetTransition.style.transitionTimingFunction = timingTransition.value + '(' + bezierTransition.value + ')';
        codeTransition.value = targetTransition.style.cssText;
        codeReplace(codeTransition);
    });

    durationTransition.addEventListener('input', function () {
        targetTransition.style.transitionDuration = durationTransition.value + "s";
        codeTransition.value = targetTransition.style.cssText;
        codeReplace(codeTransition);
    });

    delayTransition.addEventListener('input', function () {
        targetTransition.style.transitionDelay = delayTransition.value + "s";
        codeTransition.value = targetTransition.style.cssText;
        codeReplace(codeTransition);
    });

    timingTransition.addEventListener('change', function () {
        if (timingTransition.value == 'cubic-bezier') {
            bezierSetTransition.classList.add('settings-transition__bezier-set_active');
            targetTransition.style.transitionTimingFunction = timingTransition.value + '(' + bezierTransition.value + ')';
        } else if (timingTransition.value !== 'cubic-bezier') {
            bezierSetTransition.classList.remove('settings-transition__bezier-set_active');
            targetTransition.style.transitionTimingFunction = timingTransition.value;
        }
        codeTransition.value = targetTransition.style.cssText;
        codeReplace(codeTransition);
    });

    copyCodeTransition.addEventListener('click', function (evt) {
        evt.preventDefault();
        codeTransition.select();
        document.execCommand('copy');
    });
});