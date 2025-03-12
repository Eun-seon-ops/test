$(function () {
    // 흘러가는 슬라이드
    $("#scroller").simplyScroll({
        speed: 1,
    });

    //숫자 카운트
    var executed1 = false;
    var executed2 = false;

    $('.section2').waypoint(function () {
        var targetNumber = $('.animate1').attr('data-rate');
        if (!executed1) {
            var percent_number_step = $.animateNumber.numberStepFactories.append('%')
            $('.animate1').animateNumber({
                number: targetNumber,
                numberStep: percent_number_step
            }, 1500);
            executed1 = true;
        }
    },
        {
            offset: '80%'
        }
    );


    $('.section2').waypoint(function () {
        var targetNumber = $('.animate2').attr('data-rate');
        if (!executed2) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.animate2').animateNumber({
                number: targetNumber,
                numberStep: comma_separator_number_step
            }, 1500);
            executed2 = true;
        }
    },
        {
            offset: '80%'
        }
    );

});