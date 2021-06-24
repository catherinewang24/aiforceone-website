$(document).ready(function() {
    /*
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
    */

    /*
    $('#navbarNav ul').find('ul').show().hide();
    $('#navbarNav > ul > li').hover(function() {
        $(this).children('ul').stop().fadeIn(300);
    }, function() {
        $(this).children('ul').stop().fadeOut('fast');
    });
    */

    /* Scroll on buttons */
    /*
    $('#introduction').click(function () {
       $('html, body').animate({scrollTop: $('#introduction').offset().top}, 1000); 
    });
    
    $('#crypto').click(function () {
       $('html, body').animate({scrollTop: $('#crypto').offset().top}, 1000); 
    });
    */
    
    
    /* Navigation scroll */
    /* 
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    }); */


});
