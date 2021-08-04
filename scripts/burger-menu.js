$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.menu__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});