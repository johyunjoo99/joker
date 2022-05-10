$(document).ready(function () {

    $("#bar_1 img:nth-of-type(2)").css('opacity', '1');

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $("#bar_1 img:nth-of-type(2)").css('opacity', '1');
        }

 
        if (scroll > 600) {
            $("#bar_2 img:nth-of-type(2)").css('opacity', '1');
            $("#bar_1 img:nth-of-type(2)").css('opacity', '0');
        }
        else {
            $("#bar_2 img:nth-of-type(2)").css('opacity', '0');
            $("#bar_1 img:nth-of-type(2)").css('opacity', '1');
        }


        if (scroll > 1200) {
            $("#bar_3 img:nth-of-type(2)").css('opacity', '1');
            $("#bar_2 img:nth-of-type(2)").css('opacity', '0');
        }
        else {
            $("#bar_3 img:nth-of-type(2)").css('opacity', '0');
        }
  

        if (scroll > 1800) {
            $("#bar_4 img:nth-of-type(2)").css('opacity', '1');
            $("#bar_3 img:nth-of-type(2)").css('opacity', '0');
        }
        else {
            $("#bar_4 img:nth-of-type(2)").css('opacity', '0');
        }
    });
});