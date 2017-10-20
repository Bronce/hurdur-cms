$(function(){
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('.menu').offset().top;
 
        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('.menu').css({position: 'fixed', top: '0px'});
                        $('.menufix').css('display', 'block');
						$('nav').addClass('navfix');
                } else {
                        $('.menu').css({position: 'relative', top: '0px'});
                        $('.menufix').css('display', 'none');
						$('nav').removeClass('navfix');
                }
        });
  });
  
