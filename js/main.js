window.onload = function () {

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


}