$(document).ready(function () {
    $('body').append('<div class="copyright">&copy; <a href="https://learn.javascript.ru">learn.javascript.ru</a></div>');
    
    $('img').removeAttr('width').removeAttr('height');
    $('*').removeAttr('style');
    $('a').each(function () {
        var link = $(this).attr('href');
        if (link.substr(0, 4) == 'http') {
            $(this).append(' <i class="fas fa-external-link-alt"></i>');
        }
    });

    $('#get_mobile_menu').on('click', function () {
        if ($('#mobile_menu').css('left') == '0px') {
            $('#mobile_menu').animate({
                left: '-320px'
            });
        } else {
            $('#mobile_menu').animate({
                left: '0px'
            });
        }
    });

    function getShowMenu() {
        event.preventDefault();
        $('#mobile_menu').animate({
            left: '0px'
        });

    }

    function getHideMenu() {
        $('#mobile_menu').animate({
            left: '-320px'
        });
    }

    $('#get_left_menu').hammer().bind("swiperight", getShowMenu);

    $('#mobile_menu').hammer().bind("swipeleft", getHideMenu);
});