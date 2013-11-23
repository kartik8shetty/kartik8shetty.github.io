/**
 * Created with JetBrains PhpStorm.
 * User: karthik
 * Date: 11/22/13
 * Time: 4:35 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
    jQuery.event.add(window, "load", resizeFrame);
    jQuery.event.add(window, "resize", resizeFrame);
    event.preventDefault();
    var num_div = $('.float_divs').length;
    var move_right;
    console.log(num_div)
    function resizeFrame() {
        var h = $(window).height();
        var w = $(window).width();
        move = w;
        var total_wid = w * num_div;
//        console.log('w='+w+' '+'h='+h);
//                $('.car_container').height(h);
        $('.float_divs').height(h);
        $('.float_divs').width(w);
        $('body').width(total_wid);

    }

    $(function () {

        $("body").mousewheel(function (event, delta) {

            this.scrollLeft -= (delta * 30);
            var num = 0;

            console.log(event.deltaY);
            event.preventDefault();

        });

    });
//        var offset1 = $('#one').offset();
//        va
// r offset2 = $('#two').offset();
//        var offset3 = $('#three').offset();
//        $('#click2').click(function () {
//            $('html body').animate({
//                scrollLeft: -200
//            }, 2000, 'easeOutElastic');
//        });
    var from = 0;

    $('input[type="button"]').click(function () {
        var to = $(this).data('value');
        var effect;
        if (to == 0 || to == 4) {
            effect = 'easeOutBounce'
        }
        else {
            effect = 'easeOutElastic'
        }
        var mover = to * move;
        $('html body').animate({
            scrollLeft: mover
        }, 2000, effect);
    });
    $('.button_wrapper a').click(function () {
        var to = $(this).data('value');
        var effect;
        if (to == 0 || to == 5) {
            effect = 'easeOutBounce'
        }
        else {
            effect = 'easeOutElastic'
        }
        var mover = to * move;
        $('html body').animate({
            scrollLeft: mover
        }, 1000, effect);
    });
    $('.coll_image img').hover(function () {
        $(this).fadeIn(function () {
            $(this).attr('src', 'college_image.png');
        });
    }, function () {
        $(this).attr('src', 'black_n_white.png');
    });
    $('.my_photo img').hover(function () {
        $(this).animate({
            left: '30px'
        }, 1000, 'easeInOutElastic');
        $('.about_me h2').animate({
            paddingRight: '10px'
        }, 1000);
    }, function () {
        $(this).animate({
            left: '0px'
        }, 1000, 'easeInOutElastic');
    });
});
