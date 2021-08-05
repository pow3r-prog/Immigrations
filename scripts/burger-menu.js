$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.header__logo,.menu__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.menu__list').click(function(event) {
        $('.header__burger,.header__menu,.menu__list').removeClass('active');
        $('body').removeClass('lock');
    });
});