(function($, root, undefined) {
    //remove empty p tags
    $('p').each(function(index, item) {
        if($.trim($(item).text()) === "") {
            $(item).remove(); // $(item).remove();
        }
    });

    var isMobile = window.matchMedia("only screen and (max-width: 992px)");
    services();
    $(function() {

        'use strict';
        checklist();
        

        if($('.home').length){
        
            document.getElementById('vid').play();

 
    $("html, body, .wrapper").css({
        height: $(window).height()
})
}
        $('.plus-icon').click(function() {
            $(this).hide();
            var data = $(this).attr('data');
            $('[data-open="' + data + '"]').addClass('data-show');
            $(this).parents('.sec').addClass('data-visible');
        });
        $('.close-icon').click(function() {

            $(this).parents('.adv-content').removeClass('data-show');
            $(this).parents('.sec').removeClass('data-visible');
            $(this).parents('.sec').find('.plus-icon').show();
        });
        $('.detail .close-icon').click(function() {
            $('.detail').removeClass('show');
            $('.serv-bg').removeClass('show');
        });
        if (!isMobile.matches) {
            //number counter desktop
            calcLeft();
            calcWidth();
            desktopNav();

            $('.number').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            aboutArrows();
        } else {
            mobileNav();
            //number counter mobile
            var i = 1;
            setInterval(function() {

                $('.numbers>div').removeClass('number-turn');
                $('.numbers>div:nth-of-type(' + i + ')').addClass('number-turn');
                i++
                if (i == 4) {
                    i = 1;
                }


            }, 2000);
            windowHeight();
            videoHeight();
        }
    });


    $('.desktop-nav .open').click(function() {
        $(this).parents('.desktop-nav').addClass('open-nav');
        $('.logo').addClass('fixed');

    });



    $('.desktop-nav .close').click(function() {
        $(this).parents('.desktop-nav').removeClass('open-nav');
        $('.logo').removeClass('fixed');
    });



    $('.mobile-nav .open').click(function() {
        $(this).parents('.mobile-nav').addClass('open-nav');

    });



    $('.mobile-nav .close').click(function() {
        $(this).parents('.mobile-nav').removeClass('open-nav');
    });




    var current = parseInt($('.next').attr('data'));
    $('.next').click(function() {
        $('.about_sec').hide();
        current = current + 1;
        $('[about=' + current + ']').fadeIn();
        if (current > 1) {
            $('.prev').fadeIn();
        } else {
            $('.prev').hide();
        }
        if (current >= 4) {
            $('.next').hide();
        } else {
            $('.next').fadeIn();
        }

    });
    $('.prev').click(function() {
        $('.about_sec').hide();
        current = current - 1;
        $('[about=' + current + ']').fadeIn();
        if (current > 1) {
            $('.prev').fadeIn();
        } else {
            $('.prev').hide();
        }
        if (current >= 4) {
            $('.next').hide();
        } else {
            $('.next').fadeIn();
        }

    });


    //contactform open
    $('#contactForm').click(function() {
        $('.contact-form').fadeIn();
        $('#contact').addClass("contact-open")
    });
    $('.contact-form .close').click(function() {
        $('.contact-form').fadeOut();
        $('#contact').removeClass("contact-open")

    });
    
    $(window).resize(function() {


        if (!isMobile.matches) {
            calcLeft();
            calcWidth();
            aboutArrows();
        }else{

           
        }
    });
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).scroll(function(){
     /*   if ($('#advertisers').isInViewport()){
            $('#advertisers .plus-icon').addClass('animate');
        }else{
            $('#advertisers .plus-icon').removeClass('animate');
        }
        if ($('#affiliates').isInViewport()){
            $('#affiliates .plus-icon').addClass('animate');
        }else{
            $('#affiliates .plus-icon').removeClass('animate');
        }
                */
      /*  if ($('#services .labels').isInViewport()){
            $('#services .serviceSquare').addClass('animate');
        }else{
            $('#services .serviceSquare').removeClass('animate');
        }
*/
    });

})(jQuery, this);


//left of for show sections 
function calcLeft() {

    var advLeft =  $('#advertisers .labels label').width() + 50;
    var affLeft =  $('#affiliates .labels label').width() + 50;
    var serLeft =  $('#services .labels label').width() + 28;
    $('#advertisers .adv-content').css('left', affLeft);//because in new PSD the both depend on aff label
    $('#affiliates .adv-content').css('left', affLeft);
    $('#services .adv-content').css('left', serLeft);

}
//left of for show sections 
function calcWidth() {
    var advWidth = $('#advertisers .container').width() - $('#advertisers .labels').width() + 28;
    var affWidth = $('#affiliates .container').width() - $('#affiliates .labels').width() + 28;
 //   var affWidth = $('#services .container').width() - $('#services .labels').width() + 28;
    $('#advertisers .adv-content').css('width', advWidth);
    $('#affiliates .adv-content').css('width', affWidth);
    $('#services .adv-content').css('width', affWidth);

}
//services show and hide
function services(){
    $('.service').click(function(){
        var num=$(this).attr('serv-data');
        $('.detail[serv-det='+num+']').addClass('show')
        $('.serv-bg').addClass('show');
    });
}
//mobile nav
function mobileNav(){
    $('.mobile-nav ul a').click(function(){
        setTimeout(() => {
            $('.mobile-nav').removeClass('open-nav');
        }, 200);
        
    });
}
// desktop nav
function desktopNav(){

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            $('a').removeClass('current-sec');
            $(this).addClass('current-sec');
            $('.mobile-nav').removeClass('open-nav');
            $('.logo').addClass('fixed');
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        //   $target.focus();
                        // if ($target.is(":focus")) { // Checking if the target was focused
                        //  return false;
                        // } else {
                        // $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        //    $target.focus(); // Set focus again
                        //};
                    });
                }
            }
        });
}
//set sec height to 100% for mobile
function windowHeight(){

    var height=$(window).innerHeight()-80;
    $('#mainSec').css('height',height); 
    $('#advertisers').css('height',height/2); 
    $('#affiliates').css('height',height/2); 
   // $('#partner').css('height',height); 
    $('#goals').css('height',height); 

}

    function aboutArrows(){
        var width=$('.about_cont').width()-20,
        left = $('.about_cont').offset().left;
        $('.about-arrows').css('width',width);
        $('.about-arrows').css('left',left);

    }
//checklist open
function checklist(){

    $('.placeholder').click(function(){
        if($(this).parents('.checkbox-list').hasClass('open')){
            $(this).parents('.checkbox-list').removeClass('open');
        }else{
            $(this).parents('.checkbox-list').addClass('open');
        }
    });
    $('.options label').click(function(){
  //      var text=$(this).text();
    //    $(this).parents('.options').siblings('.placeholder').text(text);
      //  $('.checkbox-list').removeClass('open');
    });
}
function videoHeight(){
    var height=$(window).height()-80;
    vid=height*0.6;
    $('.video').css('height',vid);
    $('.video video').css('height',vid);
}