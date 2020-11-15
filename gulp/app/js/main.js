$(document).ready(function () {

    $('.header_burger').click(function (event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $("a.nav_link").click(function () {
        $("html,body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, {
            duration: 2000,
            aesing: 'swing'
        });
        return false;
    });

});