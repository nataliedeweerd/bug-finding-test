
jQuery(function($) {
    
    console.log('hello!');

    $('.circle--1').waypoint(function(){
        $('.circle--1').addClass('circle--animate');
    }, { offset: 'bottom-in-view' });

    $('.circle--2').waypoint(function(){
        $('.circle--2').addClass('circle--animate');
    }, { offset: 'bottom-in-view' });

    $('.circle--3').waypoint(function(){
        $('.circle--3').addClass('circle--animate');
    }, { offset: 'bottom-in-view' });

    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 40
                    }, 900);
                return false;
            }
        }
    });


    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 600;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

    // Hide nav on click
    $(".navbar-nav li a").click(function (event) {
        // check if window is small enough so dropdown is created
        var toggle = $(".navbar-toggle").is(":visible");
        if (toggle) {
          $(".navbar-collapse").collapse('hide');
        }
    });

    // Add browser specific classes to body
    var browserInfo = getBrowserInfo();
    $('body').addClass((browserInfo.browser).toLowerCase()).addClass((browserInfo.browser).toLowerCase()+'--'+(browserInfo.version).toLowerCase());
    
});

function circleAnimation(){
    
    /* Separate as they stack in responsive */
    $('.circle--1, .circle--2, .circle--3').appear();
    
    $('.circle--1').on('appear',function(){	$('.circle--1').addClass('circle--animate'); });
    $('.circle--2').on('appear',function(){	$('.circle--2').addClass('circle--animate'); });
    $('.circle--3').on('appear',function(){	$('.circle--3').addClass('circle--animate'); });

}


function getBrowserInfo() {
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([0-9|\.]+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return { 'browser': M[0], 'version': M[1] }
};

