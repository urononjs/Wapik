$(function () {

    $(function () {
        $('.menu-toggle').click(function () {
            $(this).toggleClass('active');
            $('.menu').slideToggle(300)
        });
    });
});