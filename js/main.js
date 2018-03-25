$(document).ready(function () {
    $('.responsive').slick({
        arrows: false,
        autoplay: false,
        dots: true,
        dotsClass: "dot",
        focusOnSelect: false,
        mobileFirst: true,
        fade: true,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    autoplay: true
                }
            }
        ]
    });
    //выпадающее меню slide toggle переключает дисплей нон-блок\\
    $('.burger_button').on("click", function () {
        $(".header__btm_menu").stop().slideToggle();
    });

    $('.search_icon').on("click", function () {
        $(".form_search").stop().slideToggle();
    });

});