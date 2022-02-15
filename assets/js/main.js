
var $ = jQuery.noConflict();

$(document).ready(function($) {
    "use strict";

    
	var windowHeight = $(window).height(),
		topSection = $('#hero-section');
	topSection.css('height', windowHeight);

	$(window).resize(function(){
		var windowHeight = $(window).height();
		topSection.css('height', windowHeight);       
	});


        $('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
            if($(window).width() < 768 )
                $('.navbar-collapse').collapse('hide');
        });

    

        $('body').scrollspy({
           target: '#navigation-nav',
           offset: 140      
        });

    
    $.stellar({
        responsive: true,
        horizontalScrolling: false,
        verticalOffset: 0
    });

   

    $('.caption-slides').bxSlider({
      pager: false,
      mode: 'fade',
      adaptiveHeight: true,
      controls: false,
      auto: true
    });
 

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
                  scrollTop: target.offset().top -66
            }, 1000);
            return false;
          }
        }
    });


    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });


    function countUp() {   
        var dataperc;   
        $('.statistic-percent').each(function(){
            dataperc = $(this).attr('data-perc'),
            $(this).find('.percentfactor').delay(6000).countTo({
                from: 0,                 
                to: dataperc,      
                speed: 1000,             
                refreshInterval: 10,
            });  
        });
    }
        
    $('.statistic-percent').waypoint(function() {
        countUp();
    },
    {
        offset: '95%',                 
        triggerOnce: true
    });

        $('.progress-bar').each(function(i) {
            $(this).appear(function() {
                var percent = $(this).attr('aria-valuenow');
                $(this).animate({'width' : percent + '%'});
            });
        });


    $('input, textarea').placeholder();


    $('.animated').appear(function(){
        var el = $(this);
        var anim = el.data('animation');
        var animDelay = el.data('delay');
        if (animDelay) {

            setTimeout(function(){
                el.addClass( anim + " in" );
                el.removeClass('out');
            }, animDelay);

        }

        else {
            el.addClass( anim + " in" );
            el.removeClass('out');
        }    
    },{accY: -150});  
    



    $('.mailchimp').ajaxChimp({
        callback: mailchimpCallback,
        url: "http://clas-design.us10.list-manage.com/subscribe/post?u=5ca5eb87ff7cef4f18d05e127&amp;id=9c23c46672" 
    });

    function mailchimpCallback(resp) {
         if (resp.result === 'success') {
            $('.subscription-success').html('<span class="icon-happy"></span><br/>' + resp.msg).fadeIn(1000);
            $('.subscription-error').fadeOut(500);
        
        } else if(resp.result === 'error') {
            $('.subscription-error').html('<span class="icon-sad"></span><br/>' + resp.msg).fadeIn(1000);
            $('.subscription-success').fadeOut(500);
        }  
    }


    $('#contactform').submit(function(){

        var action = $(this).attr('action');

        $("#alert").slideUp(750,function() {
            $('#alert').hide();

        $('#submit')
            .after('<img src="../images/ajax-loader.GIF" class="contactloader" />')
            .attr('disabled','disabled');

        $.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        },
            function(data){
                document.getElementById('alert').innerHTML = data;
                $('#alert').slideDown('slow');
                $('#contactform img.contactloader').fadeOut('slow',function(){$(this).remove();});
                $('#submit').removeAttr('disabled');
                if(data.match('success') !== null) {
                    $('#name').val('');
                    $('#email').val('');
                    $('#message').val('');
                }
            }
        );

        });

        return false;

    });

    
    $(function() {
      var endDate = "June 26, 2016 20:39:00";
      $('.soon-countdown .row').countdown({
        date: endDate,
        render: function(data) {
          $(this.el).html('<div><div><span>' + (parseInt(this.leadingZeros(data.years, 2)*365) + parseInt(this.leadingZeros(data.days, 2))) + '</span><span>days</span></div><div><span>' + this.leadingZeros(data.hours, 2) + '</span><span>hours</span></div></div><div class="lj-countdown-ms"><div><span>' + this.leadingZeros(data.min, 2) + '</span><span>minutes</span></div><div><span>' + this.leadingZeros(data.sec, 2) + '</span><span>seconds</span></div></div>');
        }
      });
    });



    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
            easing: 'swing'
        }, 750);
        return false;
    });


        $(".project-slider").bxSlider({
            pager: false,
            controls: true,
            auto: true,        
            speed: 500,       
            pause: 5000,      
            useCSS: false     
        });

    
        $(".blog-slider").bxSlider({
            pager: false,
            controls: true,
            auto: true,        
            speed: 500,        
            pause: 5000,      
            useCSS: false     
        });

    


        $('.tweet-slider').bxSlider({
          adaptiveHeight: true,
          controls: false,
          auto: true
        });

    

    $(".testimonials-slider").bxSlider({
        nextSelector: ".tc-arrows .tc-arrow-right",
        prevSelector: ".tc-arrows .tc-arrow-left",
        nextText: "<i class='fa fa-angle-right'></i>",
        prevText: "<i class='fa fa-angle-left'></i>",
        pager: false,
        auto: true,          
        pause: 5000,         
        mode: 'vertical',    
        useCSS: false        
    });


        $(".owl-carousel").owlCarousel({
 
            autoPlay: 3000, 
            items : 4,
            itemsDesktop : [1199,3], 
            itemsDesktopSmall : [979,3] 
 
        });

   
    
        $(".project-video, .video-creative, .video-post").fitVids();
        

 
        $('.zoom').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        $('.video-pop-up').magnificPopup({
            type: 'iframe',
        });

    
    
    $(".screenshots-carousel").owlCarousel({
 
        autoPlay: 3000, 
 
        items : 5,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
 
    });

});

$(window).load(function(){
    "use strict";
 

        if( $("#filter").length>0 ) {
            var container = $('#filter');
            container.isotope({
                itemSelector: '.gallery-item',
                transitionDuration: '0.8s'
            });
            $(".filter").click(function(){
                $(".filter.active").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                container.isotope({ 
                    filter: selector
                });
                return false;
            });

            $(window).resize(function(){
                setTimeout(function(){
                    container.isotope();
                },1000);
            }).trigger('resize');
        }


            if ( $('#type-masory').length ) {

            var $container = $('#type-masory');

            $container.imagesLoaded( function(){
              $container.fadeIn(1000).isotope({
                itemSelector : '.masonry-item'
              });
            });
        }

    
    $("#loading-animation").fadeOut();
    $("#preloader").delay(600).fadeOut("slow");

});